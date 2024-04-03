"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { CldImage } from 'next-cloudinary';
import { HeroSlider } from './(users)/usercomponents/HeroSlider';
import Home from './(users)/Home/page';
 
// import Navbar from './components/Navbar'
function Home1() {

  return (
    <div className=' flex w-full '>
    <Home/>
    
    </div>
  )
}

export default Home1
