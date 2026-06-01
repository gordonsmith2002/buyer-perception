import { NextResponse } from "next/server";
import {
  AUTH_COOKIE,
  COOKIE_MAX_AGE_SECONDS,
  createInternalAuthToken,
  getInternalAuthSecret,
} from "../../../lib/internal-auth";

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

  const authSecret = getInternalAuthSecret();
  if (!authSecret) {
    return NextResponse.json(
      { ok: false, message: "Internal auth is not configured" },
      { status: 500 },
    );
  }

  if (password !== authSecret) {
    return NextResponse.json(
      { ok: false, message: "Incorrect password" },
      { status: 401 },
    );
  }

  const safeNext =
    nextPath.startsWith("/") && !nextPath.startsWith("//") ? nextPath : "/tools";
  const response = NextResponse.json({ ok: true, next: safeNext });
  response.cookies.set(AUTH_COOKIE, await createInternalAuthToken(authSecret), {
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
