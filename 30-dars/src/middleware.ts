import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const getServerCookie = cookies();
    const userToken = (await getServerCookie).get("token");
    if (
        userToken &&
        (request.nextUrl.pathname.startsWith("/login") ||
            request.nextUrl.pathname.startsWith("/register"))
    ) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    if (!userToken && request.nextUrl.pathname.startsWith("/profile")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher:
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
