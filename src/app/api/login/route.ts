import Usersignup from "@/app/mongodb/SignUpSchema";
import mongodbconn from "@/app/mongodb/connection";
import { NextResponse } from "next/server";
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
 export async function POST(req: any) {
    await mongodbconn;
    const logindata=await req.json();
    console.log(logindata)
    const token=await req.cookies.get("token").value;
    const salt= bcrypt.genSaltSync(10);
    const hashpass=bcrypt.hashSync(logindata.loginpassword,salt);
    if (!token) {
       return NextResponse.json({ message: "Token not found", status: 400 });
   }

    var decoded = jwt.verify(token, 'secretkeybikramdhami');
    let  email = decoded.encodeemail;
    const user = await Usersignup.findOne(
           { email },
       );

       if (!user) {
           return NextResponse.json({ message: "User not found", status: 404 });
       }
       if (user.userVerify==true) {
        // const value=bcrypt.compareSync(logindata.loginpassword, user.password);
        // console.log(value);
        //  if (value) {
            let respon=NextResponse.json({ message: "User verified successfully", status: 200,user });
           return respon;
        //  }
       }else{
           const response = NextResponse.json(
               { message: "User is not verified", status: "User is not verified", user },
               { status: 401 }
           );
           return response;  
       }
  //  return NextResponse.json("hello");
}

