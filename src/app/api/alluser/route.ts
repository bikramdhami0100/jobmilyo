import Usersignup from "@/app/mongodb/SignUpSchema";
import UserInformation from "@/app/mongodb/UserInformationSchema";
import mongodbconn from "@/app/mongodb/connection";
import { NextResponse } from "next/server";
var jwt = require('jsonwebtoken');

export async function POST(req: any) {
     await mongodbconn;
const userinformation=await req.json();
 console.log(userinformation,"userinformation")
     const data=await req.cookies.get("token");
     const token=data.value
    //  console.log(token);
     if (!token) {
        return NextResponse.json({ message: "Token not found", status: 400 });
    }

     var decoded = jwt.verify(token, 'secretkeybikramdhami');
     let  email = decoded.encodeemail.email;
    //  console.log(email)
     const user = await Usersignup.findOne(
            { email },
        ); 
 
        

        if (!user) {
            return NextResponse.json({ message: "User not found", status: 404 });
        }

        const alldata=await UserInformation.find(userinformation).populate("userId")
        let respon=NextResponse.json({ message: " successfully fetch",data:alldata, status: 200 });
        // respon.cookies.set("userinfotoken",token,{httpOnly:true});
        return respon;
 }
 