"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { Input } from "@/components/ui/input"

import { Button } from '@/components/ui/button'
import {
  IconBrandApple,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,

} from "@tabler/icons-react";
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { userSignUpInfo } from '@/app/Redux/Slice'
import { Eye, EyeOff } from 'lucide-react'

export interface MysignupType {
  fullname: string,
  dob: string,
  email: string | undefined,
  password: string,
  confirmpassword: string
}

function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();

  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
  const passwordRegex =  /^[a-zA-Z\s]/;

  const [name, setname] = useState<string>("");
  const [birth, setbirth] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [confirm, setconfirm] = useState<string>("");
  const [passData, setPassData] = useState<any>();
  const [errorName, setErrorName] = useState(true);
  const [errorBirth, setErrorBirth] = useState(true);
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(true);
  const [Show, setShow] = useState(true);
  
  useEffect(() => {
    console.log("this is first useeffect")
    if (name || birth || email || password || confirm) {
      if (nameRegex.test(name) && name.length > 4) {
        // console.log("valide name")
        setErrorName(false);
      } else {
        setErrorName(true);
        
      }
      
      if (dobRegex.test(birth) && birth.length > 4) {
        // console.log("valide name")
        setErrorBirth(false);
      } else {
        setErrorBirth(true)
      }
      if (emailRegex.test(email) && email.length > 4) {
        // console.log("valide name")
        setErrorEmail(false);
      } else {
        setErrorEmail(true)
      }
      if (passwordRegex.test(password) && password.length > 4) {
        // console.log("valide name")
        setErrorPassword(false);
      } else {
        setErrorPassword(true)
      }
      if (password==confirm && confirm.length > 4) {
        // console.log("valide name")
        setErrorConfirmPassword(false);
      } else {
        setErrorConfirmPassword(true)
      }
      
     
    }
   
   
  }, [name, birth, email, password, confirm, nameRegex, emailRegex, dobRegex, passwordRegex]);

  const HandleMyFun =async()=>{
    
    if (nameRegex.test(name) && emailRegex.test(email) && dobRegex.test(birth) && passwordRegex.test(password) && password === confirm) {
      setPassData({ fullname: name, email: email, dob: birth, password: password, confirmpassword: confirm });
      if (passData!=undefined) {
        dispatch(userSignUpInfo(passData));
       await router.push("/userinformation")
       
       }
     
    }
   

           
  }
  


  return (
    <div className='flex flex-col justify-around items-center md:flex-row md:justify-around lg:justify-around lg:flex-row p-2'>
      <div className='flex flex-col justify-around items-center'>
        <div className='flex gap-4 mt-4'>
          <Image alt="image" src={"/images/logo.png"} height={200} width={200}></Image>
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-3xl'><strong><span className='text-red-600'>Create</span> a new account and get your <span className='text-blue-600'>Dream Job</span></strong></p>
          <div>
            <Image alt='login image' src={"/images/signup.png"} height={400} width={400} className='h-full'></Image>
          </div>
        </div>
      </div>
      <div className='flex flex-col shadow-lg p-6 justify-center items-center m-4 rounded-md'>
        <div className='m-4'>
          <h1>Let's create a new account</h1>
          <hr color='gray' className='w-full shadow-md' />
        </div>
        <div className='flex flex-col flex-wrap justify-center m-auto items-start ml-20   p-4'>
          <div className="flex flex-col justify-center item-start w-[300px] md:[400px] lg:w-[500px]">
            <label htmlFor="fname">Full Name</label>
            <Input onChange={(e) => { setname(e.target.value) }} name='fname' type="text" placeholder="Your full name" />
            {errorName ? <p className=' text-red-600'>please enter valid name</p> : null}
          </div>

          <div className="flex flex-col justify-center item-start w-[300px] md:[400px] lg:w-[500px]">
            <label htmlFor="dob">Date of birth</label>
            <Input onChange={(e) => { setbirth(e.target.value) }} type="text" placeholder="Date of Birth YYYY-MM-DD" name='dob' />
            {errorBirth ? <p className=' text-red-600'>please enter valid Date of Birth</p> : null}
          </div>
          <div className="flex flex-col justify-center item-start w-[300px] md:[400px] lg:w-[500px]">
            <label htmlFor="email">Email</label>
            <Input onChange={(e) => { setemail(e.target.value) }} type="email" placeholder="Email address" name='email' />
            {errorEmail? <p className=' text-red-600'>please enter valid Email</p> : null}
          </div>
          <div className="flex flex-col justify-center item-start w-[300px] md:w-[400px] lg:w-[500px]">
            <label htmlFor="password">Password</label>
              <div className=' flex'>
              <Input onChange={(e) => { setpassword(e.target.value) }} type={`${Show?"password":"text"}`} placeholder="Create a strong password" name='password' />
                {
                  Show?<Eye onClick={()=>{
                    setShow(false)
                  }}  className=' absolute ml-[260px] md:ml-[360px] lg:ml-[460px] mt-1'/>: <EyeOff onClick={()=>{
                    setShow(true);
                  }} className=' absolute ml-[260px] md:ml-[360px] lg:ml-[460px] mt-1'/>
                }
              </div>
            {errorPassword ? <p className=' text-red-600'>please enter strong Password</p> : null}
          </div>
          <div className="flex flex-col justify-center item-start w-[300px] md:[400px] lg:w-[500px]">
            <label htmlFor="confirmpassword">Confirm Password</label>
             <div className=' flex'>
       {
        Show?<Eye onClick={()=>{
          setShow(false);
        }} className=' absolute ml-[260px] md:ml-[360px] lg:ml-[460px] mt-1'/>: <EyeOff onClick={()=>{
          setShow(true)
        }} className=' absolute ml-[260px] md:ml-[360px] lg:ml-[460px] mt-1'/>
       }
            <Input onChange={(e) => { setconfirm(e.target.value) }} type={`${Show?"password":"text"}`} placeholder="Confirm your password" name='confirmpassword' />
            
             </div>
            {errorConfirmPassword ? <p className=' text-red-600'>please enter Confirm Password</p> : null}
          </div>
          <p className='text-center'>or Continue with</p>
          <div className='flex gap-3 cursor-pointer self-center'>
            <div className='flex'><Button><IconBrandGithub /> Github</Button></div>
            <div className='flex'><Button><IconBrandFacebook /> Facebook</Button></div>
            <div className='flex'><Button><IconBrandGoogle /> Google</Button></div>
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row'>By selecting Agree and continue <p className='underline text-blue-600 font-extrabold'><span>Job</span> <span className='text-red-600 font-extrabold'>मिल्यो?</span></p>, I agree to <span className='underline cursor-pointer text-blue-600 '>Term of Service</span></div>
          <Button onClick={HandleMyFun}  className='bg-blue-600 w-[200px] rounded-full self-center'>Continue</Button>
        </div>
      </div>
    </div>
  )
}

export default Signup
