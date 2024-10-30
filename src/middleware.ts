
const jwt=require("jsonwebtoken")
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import CheckUserType from './app/components/CheckUserType';
// Middleware function to handle authentication
export function middleware(request: NextRequest) {
    //   console.log(CheckUserType())
    const token = request.cookies.get("token")?.value;
    const pathname = request.nextUrl.pathname;
//    console.log(token)
//    MiddlewareFun(token)
    // If the token is not present and the user is not on the login, signup, or specific signup subpaths, redirect to the login page
    if (!token && 
        pathname !== "/user/login" && 
        !pathname.startsWith("/user/signup") && 
        !pathname.startsWith("/user/forgotpassword")&&
        pathname !== "/user"
    ) {
        return NextResponse.redirect(new URL('/user/login', request.url));
    }

    // If the user has a token and is trying to access the login or signup page, redirect to the profile page
    if (token && (pathname === "/user/login" || pathname.startsWith("/user/signup"))) {
        return NextResponse.redirect(new URL('/user/profile', request.url));
    }
}

// Config to apply the middleware to specific paths
export const config = {
    matcher: ['/user/:path*',"/admin/:path*"]
}

