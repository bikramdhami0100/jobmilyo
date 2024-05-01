"use client"
import Image from 'next/image'
import AdminLoginImage from "../components/adminlogin.json";
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { signIn, useSession } from "next-auth/react";
import { Button } from '@/components/ui/button'
import {
  IconBrandApple,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { useRouter } from 'next/navigation'
import Lottie from 'lottie-react'

function AdminLogin() {
  const router = useRouter();
  const session = useSession();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  useEffect(() => {
    if (email != undefined) {
      if (email === "jobmilyo@gmail.com") {
        setEmailError(false)
        if (password == "123") {
          setPasswordError(false)


        } else {
          setPasswordError(true)
        }
      } else {
        setEmailError(true)

      }

    }
  }, [email, password])
  const HandleAdminLogin = () => {
    if (emailError == passwordError) {
      router.push("/admin")
    }
  }

  //  if (session.status=="authenticated") {
  //   router.push("/admin");
  //  }

  return (
    <div className='flex  flex-col justify-around items-center md:flex-row md:justify-around lg:justify-around lg:flex-row p-2'>
      <div className=' grid-cols-2 justify-center items-center'>
        <div className=' flex flex-col justify-center '>
          <p className='text-3xl mt-6'><strong>Make your dream career a <span className=' text-blue-600'> reality</span></strong></p>
          <div className=' flex gap-4'><span className=''> <b>With</b></span> <Image alt="image" src={"/images/logo.png"} height={100} width={100}></Image></div>
          <div>
            <Lottie animationData={AdminLoginImage}></Lottie>
          </div>
        </div>
      </div>
      <div className=' flex flex-col shadow-lg p-6 justify-center items-center m-4 rounded-md'>
        <h1>AdminLogin</h1>
        <div className='flex flex-col gap-4'>
          <div>
            <Input type="email" placeholder="Email or user name" onChange={(e) => { setEmail(e.target.value) }} />
            {
              emailError ? <p className=' text-rose-800'>please Enter a email</p> : null
            }
          </div>
          <div>
            <Input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
            {
              passwordError ? <p className=' text-rose-800'>please Enter a password</p> : null
            }
          </div>

          <Link href={"/user/forgotpassword"} className=' text-blue-600 underline'> Forgot Password ? </Link>
          <p>You agree to create account for <span className=' text-blue-600'>job</span> <span className=' text-red-600'>मिल्यो?</span> </p>
          <Button className=' bg-blue-600' onClick={HandleAdminLogin}>Continue </Button>
          <p className=' text-center'>or Continue with</p>
          <div className=' flex gap-3 cursor-pointer self-center'>
            <Button className=' flex ' onClick={() => {
              signIn("github");
            }}><IconBrandGithub /> github</Button>
            <Button className=' flex  ' ><IconBrandFacebook /> Facebook</Button>
            <Button onClick={() => {
              signIn("google");
            }} className=' flex ' ><IconBrandGoogle /> Google</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
