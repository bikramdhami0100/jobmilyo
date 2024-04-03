"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { CldImage } from 'next-cloudinary';
import { HeroSlider } from './components/HeroSlider';
 
// import Navbar from './components/Navbar'
function Home() {

  return (
    <div className=' flex w-full '>
    <HeroSlider />

    </div>
  )
}

export default Home
