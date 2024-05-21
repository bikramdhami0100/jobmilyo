import { NextResponse, NextRequest } from 'next/server';
const nodemailer=require("nodemailer");
const bcrypt=require("bcryptjs");
var jwt = require('jsonwebtoken');
// Handles POST requests to /api

export async function POST(request: any) {
   //  const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
   //  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
   //  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
   
    const user = await request.json();
    console.log(user);
    const name = user.fullname;
    const userpassword=user.password;
    const salt= bcrypt.genSaltSync(10);
    const hashpass=bcrypt.hashSync(userpassword,salt);
    console.log(hashpass);

    const email = user.email;
    // const message = user.password;
    var token = jwt.sign({ encodeemail: email }, 'secretkeybikramdhami');
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
            <p> Click here to verify: <a href='http://localhost:3000/user/signup/${token}' > Verify </a></p>
            `,
        });
       
        return NextResponse.json({ message: "Success: email was sent",status:200,success:true});

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "COULD NOT SEND MESSAGE", status: 500 });
    }
}

export async function GET(req: any) {
   return NextResponse.json("message");
}
