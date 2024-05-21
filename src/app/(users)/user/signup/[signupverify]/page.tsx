"use client"
import { useParams } from 'next/navigation'
import React from 'react'
var jwt = require('jsonwebtoken');
function SignUpVerify() {
  const param=useParams();
  // console.log(param.signupverify);
  const token=param.signupverify
  try {
    var decoded = jwt.verify(token, 'secretkeybikramdhami');
    const email=decoded.encodeemail
  } catch (error) {
    console.error('JWT verification failed:');
  }
  const sendSuccess=async()=>{
    // const send=await fetch("api/")
  }
  return (
    <div>
      SignUpVerify and email is  
    </div>
  )
}

export default SignUpVerify
