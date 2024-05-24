import Usersignup from "@/app/mongodb/SignUpSchema";
import mongodbconn from "@/app/mongodb/connection";
import { NextResponse } from "next/server";
var jwt = require('jsonwebtoken');

export async function GET(req: any) {
     await mongodbconn;
     const data=await req.cookies.get("token").value;
   //   console.log(data);
     const token=data
     if (!token) {
        return NextResponse.json({ message: "Token not found", status: 400 });
    }

     var decoded = jwt.verify(token, 'secretkeybikramdhami');
     let  email = decoded.encodeemail;
     const user = await Usersignup.findOne(
            { email },
        ).select("-password");
        if (!user) {
            return NextResponse.json({ message: "User not found", status: 404 });
        }
        if (user.userVerify==true) {
        let respon=NextResponse.json({ message: "User verified successfully", status: 200,user });
        return respon;
        }else{
            const response = NextResponse.json(
                { message: "User is not verified", status: "User is not verified", user },
                { status: 401 }
            );
            return response;  
        }
   //  return NextResponse.json("hello");
 }
 