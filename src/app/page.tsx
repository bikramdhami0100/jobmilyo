"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { CldImage } from 'next-cloudinary';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';
import SearchImage from "./components/search.json";

import MainHomeHero from './components/MainHomeHero';
function Home1() {
  const router = useRouter();

  

 const HandleUserLogin=()=>{

 router.push("/user")
 }
  return (
    <div>
    
      <div className=' m-auto flex  flex-col-reverse flex-wrap justify-between items-center md:flex-row lg:flex-row'>
        <div className=' w-full md:w-[40%] lg:w-[45%] '><MainHomeHero /></div>
        <div className=' w-full md:w-[50%] lg:w-[45%]'><Lottie animationData={SearchImage}></Lottie></div>

      </div>
     
    </div>
  )
}

export default Home1
