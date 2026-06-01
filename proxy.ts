import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  AUTH_COOKIE,
  getInternalAuthSecret,
  isValidInternalAuthToken,
} from "./lib/internal-auth";

const PROTECTED_PATH_PREFIXES = [
  "/tools",
  "/blind-spot-test",
  "/report",
  "/roi-calculator",
  "/proposal-template",
  "/exercise",
];

function isProtectedPath(pathname: string) {
  return PROTECTED_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (!isProtectedPath(pathname)) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get(AUTH_COOKIE)?.value;
  if (await isValidInternalAuthToken(authCookie, getInternalAuthSecret())) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", `${pathname}${search}`);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/tools/:path*",
    "/blind-spot-test/:path*",
    "/report/:path*",
    "/roi-calculator/:path*",
    "/proposal-template/:path*",
    "/exercise/:path*",
  ],
};
