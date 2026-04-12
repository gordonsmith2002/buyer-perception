import { NextResponse } from "next/server";

const AUTH_COOKIE = "bp_tools_auth";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 12;

function getExpectedPassword() {
  return process.env.TOOLS_PASSWORD || "change-me";
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";

  let password = "";
  let nextPath = "/tools";

  if (contentType.includes("application/json")) {
    const body = (await request.json()) as {
      password?: string;
      next?: string;
    };
    password = body.password || "";
    nextPath = body.next || "/tools";
  } else {
    const formData = await request.formData();
    password = String(formData.get("password") || "");
    nextPath = String(formData.get("next") || "/tools");
  }

  if (password !== getExpectedPassword()) {
    return NextResponse.json(
      { ok: false, message: "Incorrect password" },
      { status: 401 },
    );
  }

  const safeNext = nextPath.startsWith("/") ? nextPath : "/tools";
  const response = NextResponse.json({ ok: true, next: safeNext });
  response.cookies.set(AUTH_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: COOKIE_MAX_AGE_SECONDS,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(AUTH_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}
