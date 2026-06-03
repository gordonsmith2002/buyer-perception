export const AUTH_COOKIE = "bp_tools_auth";
export const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 12;

const TOKEN_VERSION = "v1";
const DEVELOPMENT_AUTH_SECRET = "change-me";
const encoder = new TextEncoder();

export function getInternalAuthSecret() {
  const configuredSecret = process.env.TOOLS_PASSWORD;

  if (configuredSecret) {
    return configuredSecret;
  }

  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return DEVELOPMENT_AUTH_SECRET;
}

export function getSafeInternalNextPath(nextPath: string | null | undefined) {
  if (!nextPath || !nextPath.startsWith("/") || nextPath.startsWith("//")) {
    return "/tools";
  }

  try {
    const url = new URL(nextPath, "https://buyerperception.internal");

    if (url.origin !== "https://buyerperception.internal") {
      return "/tools";
    }

    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return "/tools";
  }
}

function bytesToHex(bytes: Uint8Array) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join(
    "",
  );
}

async function signPayload(payload: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(payload),
  );

  return bytesToHex(new Uint8Array(signature));
}

function constantTimeEqual(left: string, right: string) {
  if (left.length !== right.length) {
    return false;
  }

  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) {
    mismatch |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }

  return mismatch === 0;
}

export async function createInternalAuthToken(
  secret: string,
  now = Date.now(),
) {
  const expiresAt = now + COOKIE_MAX_AGE_SECONDS * 1000;
  const payload = `${TOKEN_VERSION}.${expiresAt}`;
  const signature = await signPayload(payload, secret);

  return `${payload}.${signature}`;
}

export async function isValidInternalAuthToken(
  token: string | undefined,
  secret: string | null = getInternalAuthSecret(),
  now = Date.now(),
) {
  if (!token || !secret) {
    return false;
  }

  const [version, expiresAtValue, signature, ...extraParts] = token.split(".");
  if (
    extraParts.length > 0 ||
    version !== TOKEN_VERSION ||
    !/^\d+$/.test(expiresAtValue || "") ||
    !/^[a-f0-9]{64}$/.test(signature || "")
  ) {
    return false;
  }

  const expiresAt = Number(expiresAtValue);
  if (!Number.isSafeInteger(expiresAt) || expiresAt <= now) {
    return false;
  }

  const payload = `${version}.${expiresAtValue}`;
  const expectedSignature = await signPayload(payload, secret);

  return constantTimeEqual(signature, expectedSignature);
}
