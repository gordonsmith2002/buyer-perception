import assert from "node:assert/strict";
import test from "node:test";
import {
  COOKIE_MAX_AGE_SECONDS,
  createInternalAuthToken,
  getInternalAuthSecret,
  isValidInternalAuthToken,
} from "./internal-auth";

test("accepts a valid signed auth token", async () => {
  const secret = "test-secret";
  const now = 1_700_000_000_000;
  const token = await createInternalAuthToken(secret, now);

  assert.equal(await isValidInternalAuthToken(token, secret, now), true);
});

test("rejects a forgeable legacy boolean auth cookie", async () => {
  assert.equal(await isValidInternalAuthToken("1", "test-secret"), false);
});

test("rejects tokens signed with a different secret", async () => {
  const now = 1_700_000_000_000;
  const token = await createInternalAuthToken("real-secret", now);

  assert.equal(
    await isValidInternalAuthToken(token, "attacker-secret", now),
    false,
  );
});

test("rejects expired signed auth tokens", async () => {
  const secret = "test-secret";
  const issuedAt = 1_700_000_000_000;
  const token = await createInternalAuthToken(secret, issuedAt);
  const afterExpiry = issuedAt + COOKIE_MAX_AGE_SECONDS * 1000 + 1;

  assert.equal(await isValidInternalAuthToken(token, secret, afterExpiry), false);
});

test("fails closed in production when auth secret is not configured", () => {
  const previousNodeEnv = process.env.NODE_ENV;
  const previousToolsPassword = process.env.TOOLS_PASSWORD;

  process.env.NODE_ENV = "production";
  delete process.env.TOOLS_PASSWORD;

  try {
    assert.equal(getInternalAuthSecret(), null);
  } finally {
    if (previousNodeEnv === undefined) {
      delete process.env.NODE_ENV;
    } else {
      process.env.NODE_ENV = previousNodeEnv;
    }

    if (previousToolsPassword === undefined) {
      delete process.env.TOOLS_PASSWORD;
    } else {
      process.env.TOOLS_PASSWORD = previousToolsPassword;
    }
  }
});
