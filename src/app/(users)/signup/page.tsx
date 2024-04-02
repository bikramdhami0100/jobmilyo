
import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  IconBrandApple,
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { CalendarForm } from '@/app/components/DateCalender'

function Signup() {
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
          <hr color=' gray' className=' size-1 w-full' />
        </div>
        <div className='flex flex-col gap-4'>
        <Input type="text" placeholder="Your full name" />
          <CalendarForm /> 
         <Input type="text" placeholder="Email address" />
         <Input type="password" placeholder="Create a strong password" />
         <Input type="password" placeholder="Confirm a strong password" />
      
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
            <div className=' flex ' ><IconBrandGithub /> github</div>
            <div className=' flex ' ><IconBrandApple /> Apple</div>
            <div className=' flex ' ><IconBrandGoogle /> Google</div>
          </div>
           {/*  */}
            <div>
              <div className=' flex flex-col md:flex-col lg:flex-row'>By selecting Agree and continue <Image alt='logo' src={"/images/logo.png"} height={20} width={60}></Image>, I agree to <span className=' underline cursor-pointer text-blue-600 '>Term of Service</span> </div>

            </div>
          <Button className=' bg-blue-600 w-[200px] rounded-full self-center'>Continue </Button>
         
          
        </div>
      </div>
    </div>
  )
}

export default Signup
