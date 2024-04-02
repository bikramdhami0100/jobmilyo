"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Splash = ({ visible }:any) => {
  return visible ? (
    <div className='w-full h-screen bg-white flex justify-center items-center'>
      <Image alt='logo image' src={"/images/logo.png"} width={200} height={200}></Image>
    </div>
  ) : null;
}

function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setShowSplash(false); // Hide splash screen after 500 milliseconds
    }, 1000);
  
  },[])
  return (
    <div>
      <Splash visible={showSplash}></Splash>
    </div>
  );
}

export default SplashScreen;
