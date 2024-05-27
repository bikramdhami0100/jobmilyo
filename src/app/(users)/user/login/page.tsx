"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
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
import { Eye, EyeOff } from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify'

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(true);

  const [errorEmail, setErrorEmail] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
  const passwordRegex = /^[a-zA-Z\s]/;
     const router=useRouter();
     const session=useSession();
     if (session.status=="authenticated") {
      router.push("/user/Home/");
     }
     useEffect(() => {
      if ( email || password) {
      
        // setErrorBirth(!(dobRegex.test(birth) && birth.length > 4));
        setErrorEmail(!(emailRegex.test(email) && email.length > 4));
        setErrorPassword(!(passwordRegex.test(password) && password.length > 4));
       
      }
    }, [ email, password]);
    const handlelogIn=async()=>{
      console.log(email,password)
     if (email&&password) {
  
      toast.info('🦄 data  submit successfully !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
       
        });
      const data=await fetch("/api/login/",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({loginemail:email,loginpassword:password})
    })
    console.log(data);
      
    if (data.ok) {
      const result=await data.json()
      if( result.status==200){
        toast.success(result.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
         
          });
          if (result.message=="User verified successfully") {
            router.push("/user/profile");
          }

      }else{
        toast.success(result.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
         
          });
      }
    }else{
      toast.success(data.statusText, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
       
        });
    }
     }
  }
 
  return (
<div className='flex  flex-col justify-around items-center md:flex-row md:justify-around lg:justify-around lg:flex-row p-2'>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
      <div className=' grid-cols-2 justify-center items-center'>
        <div className=' flex flex-col justify-center '>
        <p className='text-3xl mt-6'><strong>Make your dream career a <span className=' text-blue-600'> reality</span></strong></p>
         <div className=' flex gap-4'><span className=''> <b>With</b></span> <Image  alt="image" src={"/images/logo.png"} height={100} width={100}></Image></div>
         <div>
           <Image alt='login image' src={"/images/login.png"} height={400} width={400} className=' h-full'></Image>
         </div>
        </div>
      </div>
      <div className='  flex flex-col shadow-lg p-6 justify-center items-center ml-12 rounded-md'>
          <h1>Login</h1>
         <div  className='flex flex-col gap-4'>
         <div className="flex flex-col justify-center item-start w-full">
            <label htmlFor="email">Email</label>
            <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" name='email' />
            {errorEmail && <p className=' text-red-600'>Please enter a valid Email</p>}
          </div>
          <div className="flex flex-col justify-center z-0 item-start w-full">
            <label htmlFor="password">Password</label>
            <div className='flex'>
              <Input onChange={(e) => setPassword(e.target.value)} type={showPassword ? "password" : "text"} placeholder="Create a strong password" name='password' />
              {showPassword ? (
                <Eye onClick={() => setShowPassword(false)} className='z-10 absolute right-[18%] md:right-[10%] lg:right-[8%] self-center' />
              ) : (
                <EyeOff onClick={() => setShowPassword(true)} className='z-10 absolute right-[18%] md:right-[10%] lg:right-[8%] self-center' />
              )}
            </div>
            {errorPassword && <p className=' text-red-600'>Please enter a strong password</p>}
          </div>

          <Link href={"/user/forgotpassword"} className=' text-blue-600 underline'> Forgot Password ? </Link>
          <p>You agree to create account for <span className=' text-blue-600'>job</span> <span className=' text-red-600'>मिल्यो?</span> </p>
          <Button onClick={handlelogIn}  className=' bg-blue-600'>Continue </Button>
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
