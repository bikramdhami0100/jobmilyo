// // pages/api/fetchUsers.js

// import Usersignup from "@/app/mongodb/SignUpSchema";
// import UserInformation from "@/app/mongodb/UserInformationSchema";
// import mongodbconn from "@/app/mongodb/connection";
// import { NextResponse } from "next/server";
// const jwt=require("jsonwebtoken");

// export  async function GET(req:any) {
//   await mongodbconn;
//  const tokendata=await req.cookies.get("token").value;
// const useremail=jwt.verify(tokendata,process.env.TOKEN_SECRETKEY);
// const email=useremail.encodeemail.email;
// const users = await Usersignup.findOne({email:email}).select("-password");
// // console.log(users)


//  const userinfotoken=await req.cookies.get("userinfotoken").value;
//   // console.log(userinfotoken);
//   try {

//   const userinfo=jwt.verify(userinfotoken,process.env.TOKEN_SECRETKEY);
//  const userinfoid=userinfo.userinfoid;   
//   console.log(userinfoid)
   
//     const userallprofiledata = await UserInformation.findById(userinfoid).populate({
      
//     })
//  console.log(userallprofiledata);
//     return NextResponse.json({ success: true, data: { users, "userInfos":"none" },status:200 });
//     // return NextResponse.json({ success: true,status:200 });
//   } catch (error) {
    
//     return NextResponse.json({ success: false,status:404 });
//   }
// }

// pages/api/fetchUsers.js

import Usersignup from "@/app/mongodb/SignUpSchema";
import UserInformation from "@/app/mongodb/UserInformationSchema";
import mongodbconn from "@/app/mongodb/connection";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export async function GET(req:any) {
  await mongodbconn;

  const tokendata = await req.cookies.get("token").value;
  const useremail = jwt.verify(tokendata, process.env.TOKEN_SECRETKEY);
  const email = useremail.encodeemail.email;
  const users = await Usersignup.findOne({ email: email }).select("-password");

  const userinfotoken = await req.cookies.get("userinfotoken").value;

  try {
    const userinfo = jwt.verify(userinfotoken, process.env.TOKEN_SECRETKEY);
    const userinfoid = userinfo.userinfoid;
    console.log(userinfoid);

    // Populate user details (adjust the path to match your schema)
    // const userallprofiledata = await UserInformation.findById(userinfoid).populate('userId').select("-password"); // Adjust 'user' to the actual field you need to populate
    const userallprofiledata = await UserInformation.find({userId:users._id});
    console.log(userallprofiledata)
    return NextResponse.json({ success: true, data: { userInfos: userallprofiledata,user:users }, status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, status: 404 });
  }
}

