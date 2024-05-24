// pages/api/fetchUsers.js

import Usersignup from "@/app/mongodb/SignUpSchema";
import UserInformation from "@/app/mongodb/UserInformationSchema";
import mongodbconn from "@/app/mongodb/connection";
import { NextResponse } from "next/server";
const jwt=require("jsonwebtoken");

export  async function POST(req:any) {
  await mongodbconn;
 const tokendata=await req.cookies.get("token").value;
 const data=await req;
 const userinfotoken=await req.cookies.get("userinfotoken").value;
//   console.log(userinfotoken);
  try {
    const useremail=jwt.verify(tokendata,"secretkeybikramdhami");
    const email=useremail.encodeemail;
    const userinfo=jwt.verify(userinfotoken,"secretkeybikramdhami");
 const userinfoid=userinfo.userinfoid;   

    const users = await Usersignup.findOne({email:email}).select("-password");
    // console.log(users)
    // const userInfos = await UserInformation.find().populate(users._id);
//  console.log("userinfo"+userInfos)
    return NextResponse.json({ success: true, data: { users, "userInfos":"none" },status:200 });
    // return NextResponse.json({ success: true,status:200 });
  } catch (error) {
    
    return NextResponse.json({ success: false,status:404 });
  }
}
