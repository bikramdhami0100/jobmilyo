import Usersignup from "@/app/mongodb/SignUpSchema";
import UserInformation from "@/app/mongodb/UserInformationSchema";
import mongodbconn from "@/app/mongodb/connection";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export async function POST(req:any) {
  await mongodbconn;
   const bskill=await req.json();
   console.log(bskill);
  const tokendata = await req.cookies.get("token").value;
  const useremail = jwt.verify(tokendata, process.env.TOKEN_SECRETKEY);
  const email = useremail.encodeemail.email;

  const users = await Usersignup.findOne({ email: email }).select("-password");
  console.log(users);
  try {
        
    // const userallprofiledata = await UserInformation.find({userId:users._id}).populate("userId").select("-password");
    const userallprofiledata = await UserInformation.find({userId:users._id});
    // userallprofiledata.skill=
    console.log(userallprofiledata)
    return NextResponse.json({ success: true, data: { userInfos: userallprofiledata,user:users }, status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, status: 404 });
  }
}
