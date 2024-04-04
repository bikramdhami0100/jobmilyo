"use client"
import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import {signIn, useSession} from "next-auth/react";
import { Button } from '@/components/ui/button'
import {
  IconBrandApple,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { useRouter } from 'next/navigation'


function Login() {
  const session=useSession();
  console.log(session);
  const router=useRouter();
  if (session.status=="authenticated" ) {
    const userdata:any=[{name:session.data.user?.name, email:session.data.user?.email ,image:session.data.user?.image}]
     router.push("/userinformation");
  }
  return (
    <div className='flex  flex-col justify-around items-center md:flex-row md:justify-around lg:justify-around lg:flex-row p-2'>
      <div className=' grid-cols-2 justify-center items-center'>
        <div className=' flex flex-col justify-center '>
        <p className='text-3xl mt-6'><strong>Make your dream career a <span className=' text-blue-600'> reality</span></strong></p>
         <div className=' flex gap-4'><span className=''> <b>With</b></span> <Image  alt="image" src={"/images/logo.png"} height={100} width={100}></Image></div>
         <div>
           <Image alt='login image' src={"/images/login.png"} height={400} width={400} className=' h-full'></Image>
         </div>
        </div>
      </div>
      <div className=' flex flex-col shadow-lg p-6 justify-center items-center m-4 rounded-md'>
          <h1>Login</h1>
         <div  className='flex flex-col gap-4'>
         <Input type="email" placeholder="Email or user name" />
         <Input type="password" placeholder="password" />
          <Link href={"/forgotpassword"} className=' text-blue-600 underline'> Forgot Password ? </Link>
          <p>You agree to create account for job मिल्यो </p>
          <Button  className=' bg-blue-600'>Continue </Button>
           <p className=' text-center'>or Continue with</p>
           <div className=' flex gap-3 cursor-pointer self-center'> 
             <Button className=' flex '  onClick={()=>{
                 signIn("github");
             }}><IconBrandGithub  /> github</Button>
             <Button className=' flex  ' ><IconBrandFacebook/> Facebook</Button>
             <Button  onClick={()=>{
              signIn("google");
             }} className=' flex ' ><IconBrandGoogle/> Google</Button>
           </div>
           <p className=' text-center'>Don't have an account ? <Link href={"./signup"} className=' underline text-blue-600'> Signup</Link></p>
         </div>
      </div>
    </div>
  )
}

export default Login
