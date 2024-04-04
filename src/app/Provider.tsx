"use client"
import {SessionProvider} from "next-auth/react";

 const NextSessionProvider=({children,session}:any)=>{

  // const data= await getServerSession();
  return <SessionProvider session={session}>{children}</SessionProvider>
}
export default NextSessionProvider;