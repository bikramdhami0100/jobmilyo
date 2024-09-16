import Usersignup from "@/app/mongodb/SignUpSchema";
import UserPostedJob from "@/app/mongodb/UserPostedJob";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    console.log(token)
    var decoded = jwt.verify(token, process.env.TOKEN_SECRETKEY);
    let email = decoded.encodeemail.email;
    try {
        const user = await Usersignup.findOne({ email: email }).sort({ jobupload: -1 }).select("-password");
        const userId = user._id;
        const postlist = await UserPostedJob.findOne({ user: userId });
        console.log(postlist);
        return NextResponse.json({ message: "data fetch successfully", data: postlist, user: user });

    } catch (error) {
        return NextResponse.json({ message: "error occure", error })
    }
}