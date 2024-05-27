
import Usersignup from "@/app/mongodb/SignUpSchema";
import mongodbconn from "@/app/mongodb/connection";
import { NextResponse } from "next/server";
var jwt =require("jsonwebtoken");
var bcrypt = require('bcryptjs');
var nodemailer =require("nodemailer");

export async function POST(req:any) {
  await mongodbconn;
  const { loginemail, loginpassword } = await req.json();
  const token = req.cookies.get("token")?.value;

  try {
    const user = await Usersignup.findOne({ email: loginemail });

    if (!user) {
      return NextResponse.json({ message: "User not found", status: 404 });
    }

    if (!token) {
      if (!user.userVerify) {
        // User is not verified, send verification email
        const newToken = jwt.sign({ encodeemail: loginemail, role: 'user' }, process.env.TOKEN_SECRETKEY, { expiresIn: '7d' });

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: loginemail,
          subject: "Verify your email",
          html: `
            <p>Name: ${user.fullName}</p>
            <p>Email: ${loginemail}</p>
            <p>Click here to verify: <a href='http://localhost:3000/user/signup/${newToken}'>Verify</a></p>
          `
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Check your email to verify your account", success: true, status: 200 });
      }

      // User is verified, proceed with login
      const isPasswordValid = await bcrypt.compareSync(loginpassword, user.password);
      if (isPasswordValid) {
        const user = await Usersignup.findOne({ email: loginemail }).select("-password");
        const newToken = jwt.sign({ encodeemail:user, role: 'user' }, process.env.TOKEN_SECRETKEY, { expiresIn: '7d' });
        const response = NextResponse.json({ message: "User verified successfully", status: 200 });
        response.cookies.set("token", newToken, { httpOnly: true });
        return response;
      } else {
        return NextResponse.json({ message: "Bad credentials", status: 401 });
      }
    } else {
      // Token is provided
      const decoded = jwt.verify(token, process.env.TOKEN_SECRETKEY);
      const userEmail = decoded.encodeemail;
      const user = await Usersignup.findOne({ email: userEmail.email });
      try {
       
        if (!user) {
          return NextResponse.json({ message: "User not found", status: 404 });
        }

        if (user.userVerify) {
          const isPasswordValid = await bcrypt.compare(loginpassword, user.password);
          if (isPasswordValid) {
            return NextResponse.json({ message: "User verified successfully", status: 200 });
          } else {
            return NextResponse.json({ message: "Bad credentials", status: 401 });
          }
        } else {
          return NextResponse.json({ message: "User is not verified", status: 401 });
        }
      } catch (error) {
        return NextResponse.json({ message: "Invalid token"+error, status: 401 });
      }
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error", status: 500 });
  }
}






