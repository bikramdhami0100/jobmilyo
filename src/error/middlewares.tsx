import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
// import { useDispatch } from 'react-redux';
// import { validUserToken } from './app/Redux/Slice';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    // const path=request.nextUrl.pathname;
    // const isAdminPublicPath=path=="/adminlogin";
    // const userToken= request.cookies.get("token")?.value;
    // console.log(request.cookies.get("token"))
    // const dispatch=useDispatch();
    // dispatch(validUserToken(userToken))
    return NextResponse.redirect(new URL('/home', request.url))
    // if (isAdminPublicPath &&adminToken ) {
    //     return NextResponse.redirect(new URL("/admin",request.nextUrl));
    // } 
    // if (!isAdminPublicPath&& !adminToken) {
    //     return NextResponse.redirect(new URL("/adminlogin",request.nextUrl));
    // } 
    //  const isPublicPath=path=="/login"|| path=="/signup"
    //  const token= request.cookies.get("user")?.value 
    //  if(isPublicPath&& token){
    //   return NextResponse.redirect(new URL("/user/Home/",request.nextUrl))
    //  }
    //  if (!isPublicPath && !token) {
    //     return NextResponse.redirect(new URL("/login",request.nextUrl))
    //  } 


}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['user/About/:path*',"/Home/:path*","/Contact/:path*","profile/:path*","jobdetail/:path*"],
// }
export const config={
    
     matcher:['/admin:path*','/admin/joblist:path*','/admin/newjob:path*']
}