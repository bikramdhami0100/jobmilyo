// import Usersignup from "@/app/mongodb/SignUpSchema";
// import mongodbconn from "@/app/mongodb/connection";
// import { NextResponse } from "next/server";
// import jwt from 'jsonwebtoken';

// export async function GET(req: any) {
//     await mongodbconn;

//     try {
//         const tokenCookie = req.cookies.get("token");
//         if (!tokenCookie) {
//             return NextResponse.json({ message: "Token not found", status: 400 });
//         }

//         const token = tokenCookie.value;
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const email = decoded.encodeemail;

//         const user = await Usersignup.findOne({ email }).select("-password");
//         if (!user) {
//             return NextResponse.json({ message: "User not found", status: 404 });
//         }

//         if (user.userVerify) {
//             return NextResponse.json({ message: "User verified successfully", status: 200, user });
//         } else {
//             return NextResponse.json({ message: "User is not verified", status: 401, user });
//         }
//     } catch (error) {
//         return NextResponse.json({ message: "Invalid token", status: 400, error: error.message });
//     }
// }

// export async function POST(req: any) {
//     await mongodbconn;

//     try {
//         const { femail } = await req.json();
//         const tokenCookie = req.cookies.get("token");

//         if (!tokenCookie) {
//             const user = await Usersignup.findOne({ email: femail });
//             if (!user) {
//                 return NextResponse.json({ message: "User not found", status: 404 });
//             }

//             if (user.userVerify) {
//                 const newToken = jwt.sign({ encodeemail: user.email }, process.env.JWT_SECRET);
//                 const response = NextResponse.json({ message: "Email verified successfully", status: 200 });
//                 response.cookies.set("token", newToken);
//                 return response;
//             } else {
//                 return NextResponse.json({ message: "User is not verified", status: 401 });
//             }
//         }

//         const token = tokenCookie.value;
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const email = decoded.encodeemail;

//         if (femail === email) {
//             const user = await Usersignup.findOne({ email });
//             if (!user) {
//                 return NextResponse.json({ message: "User not found", status: 404 });
//             }

//             if (user.userVerify) {
//                 return NextResponse.json({ message: "Email verified successfully", status: 200 });
//             } else {
//                 return NextResponse.json({ message: "User is not verified", status: 401, user });
//             }
//         } else {
//             return NextResponse.json({ message: "User not found", status: 404 });
//         }
//     } catch (error) {
//         return NextResponse.json({ message: "Invalid token", status: 400, error: error.message });
//     }
// }
import React from 'react'

function forgetpassword() {
  return (
    <div>
      
    </div>
  )
}

export default forgetpassword
