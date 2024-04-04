"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { CldImage } from 'next-cloudinary';
import { HeroSlider } from './(users)/usercomponents/HeroSlider';
import Home from './(users)/Home/page';
import { useSession } from 'next-auth/react';
 
// import Navbar from './components/Navbar'
function Home1() {
const session=useSession();
console.log(session);
  return (
    <div className=' flex w-full '>
    <Home/>
    
    </div>
  )
}

export default Home1
