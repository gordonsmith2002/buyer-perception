import { NextRequest, NextResponse } from "next/server";

const REPORT_AUTH_REALM = "Buyer Perception Report";

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "Cache-Control": "no-store",
      "WWW-Authenticate": `Basic realm="${REPORT_AUTH_REALM}", charset="UTF-8"`,
    },
  });
}

function notFound() {
  return new NextResponse("Not Found", {
    status: 404,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

export function middleware(request: NextRequest) {
  const username = process.env.REPORT_BASIC_AUTH_USER;
  const password = process.env.REPORT_BASIC_AUTH_PASSWORD;

  if (!username || !password) {
    return notFound();
  }

  const expectedAuthorization = `Basic ${btoa(`${username}:${password}`)}`;

  if (request.headers.get("authorization") !== expectedAuthorization) {
    return unauthorized();
  }

  const response = NextResponse.next();
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

export const config = {
  matcher: ["/report/:path*"],
};
