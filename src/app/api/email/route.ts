import Usersignup from '@/app/mongodb/SignUpSchema';
import mongodbconn from '@/app/mongodb/connection';
import { NextResponse, NextRequest } from 'next/server';
const nodemailer=require("nodemailer");
const bcrypt=require("bcryptjs");
var jwt = require('jsonwebtoken');
// Handles POST requests to /api

export async function POST(request: any) {
    const connection=await mongodbconn;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    const passwordRegex = /^[a-zA-Z\s]/;
    const user = await request.json();
    console.log(user);
    const name = user.fullname;
    
    const email = user.email;
    const userpassword=user.password;
    const salt= bcrypt.genSaltSync(10);
    const hashpass=bcrypt.hashSync(userpassword,salt);
    console.log(hashpass);
    function generateRandomColorCode() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor.padStart(6, '0')}`;
    }
    
    // Generate and log a random color code
    const randomColorCode = generateRandomColorCode();
    const newUser = new Usersignup({
        fullName: name,
        color:randomColorCode,
        email: email,
        password: hashpass,
        userVerify: false, // or false, depending on your logic
        admin: false,
    });

    let token = jwt.sign({encodeemail: email, role: 'user' }, 'secretkeybikramdhami', { expiresIn: '1d' });
   try {
    

   const userdata= await newUser.save();

    
    console.log('User saved successfully');
} catch (error) {
    console.error('Error saving user:', error);
}
 
    const transporter = nodemailer.createTransport({
        service:"gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure:false, // false for 587, false for other ports
      //   requireTLS: true,
        auth: {
            user: "bikramdhami334@gmail.com",
            pass: "goii iiqm bdvb namv"
        }
    });

    try {
        const mail = await transporter.sendMail({
            // from: myEmail, // Sender address
            from:"jobmilyo@gmail.com",
            to: email, // List of recipients
            // replyTo: myEmail,
            subject: `Website activity from ${email}`,
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p> Click here to verify: <a href='https://jobmilyo.vercel.app/user/signup/${token}' > Verify </a></p>
            `,
        });
        let respon =NextResponse.json({ message: "Success: email was sent",status:200,success:true, });
      
        return respon;

    } catch (error) {
        console.log(error);
      
        return NextResponse.json({ message: "COULD NOT SEND MESSAGE", status: 500});
    }
}

export async function GET(req: any) {
   return NextResponse.json("message");
}












