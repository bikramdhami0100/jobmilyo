
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  IconBrandApple,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { useRouter } from 'next/navigation'


function Signup() {
  const [userData,setUserData]=useState([]);

  const router=useRouter();

  return (
    <div className='flex  flex-col justify-around items-center md:flex-row md:justify-around lg:justify-around lg:flex-row p-2'>
      <div className=' flex  flex-col justify-around items-center'>
        <div className=' flex gap-4 mt-4'>
          <Image alt="image" src={"/images/logo.png"} height={200} width={200}></Image>
        </div>
        <div className=' flex flex-col justify-center '>

          <p className='text-3xl'><strong><span className=' text-red-600'>Create</span> a new account and get your <span className=' text-blue-600'> Dream Job</span></strong></p>

          <div>
            <Image alt='login image' src={"/images/signup.png"} height={400} width={400} className=' h-full'></Image>
          </div>
        </div>
      </div>
      <div className=' flex flex-col shadow-lg p-6 justify-center items-center m-4 rounded-md'>
        <div className=' m-4'>
          <h1>Let's create a new account</h1>
          <hr color=' gray' className='w-full shadow-md' />
        </div>
        <div className='flex flex-col gap-4'>
          <div>
          <label htmlFor="fname">Full Name</label>
        <Input name='fname' type="text" placeholder="Your full name" />
          </div>
          {/* <CalendarForm  />  */}
           <div>
           <label htmlFor="dob">Date of birth</label>
          <Input  type="text" placeholder="2024-12-15"  name='dob'/>
           </div>
           <div>
           <label htmlFor="email">Email</label>
         <Input type="email" placeholder="Email address"  name='email'/>
           </div>
           <div>
           <label htmlFor="password">Password</label>
         <Input type="password" placeholder="Create a strong password" name='password' />
           </div>
           <div>
           <label htmlFor="cpassword">Confirm Password</label>
         <Input name='cpassword' type="password" placeholder="Confirm a strong password" />
           </div>
      
          <div>
            {/* error handeling  */}
             <p>Password strength:weak</p>
             <p>Can't contain your name or email address</p>
             <p>At least 8 characters</p>
             <p>Contains a numbre or symbol</p>
          </div>
              {/* another way of signup */}
          <p className=' text-center'>or Continue with</p>
          <div className=' flex gap-3 cursor-pointer self-center'>
            <div className=' flex ' ><Button><IconBrandGithub /> Github</Button></div>
            <div className=' flex ' ><Button><IconBrandFacebook /> Facebook</Button></div>
            <div className=' flex ' ><Button><IconBrandGoogle /> Google</Button></div>
          </div>
           {/*  */}
            <div>
              <div className=' flex flex-col md:flex-col lg:flex-row'>By selecting Agree and continue <p className=' underline text-blue-600 font-extrabold'><span >Job</span> <span className=' text-red-600 font-extrabold'>मिल्यो?</span></p> ,I agree to <span className=' underline cursor-pointer text-blue-600 '>Term of Service</span> </div>

            </div>
          <Button className=' bg-blue-600 w-[200px] rounded-full self-center' onClick={()=>{ 
            router.push("/userinformation")
          }}>Continue </Button>
         
          
        </div>
      </div>
    </div>
  )
}

export default Signup
