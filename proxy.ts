import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE = "bp_tools_auth";

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

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (!isProtectedPath(pathname)) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get(AUTH_COOKIE)?.value;
  if (authCookie === "1") {
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
