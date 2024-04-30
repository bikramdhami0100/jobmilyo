"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { CldImage } from 'next-cloudinary';

import Home from './(users)/Home/page';
import { useSession } from 'next-auth/react';
import Email from './components/Email';
import Myfun from './components/EmailTemplate';
import { Button } from '@/components/ui/button';

function Home1() {
const session=useSession();
// const dataFetch=async()=>{
//    const data=await fetch("http://127.0.0.1:8000/api/getuser",{
//     method:"get",
//     headers:{"content-type":"application/json"},
    
//    });
//   const result=await data.json();
  
// }
// useEffect(()=>{
//    dataFetch();
// },[]);

  return (
    <div className=' flex w-full '>
     {/* <Button>Submit</Button> */}
    <Home/>
    
    </div>
  )
}

export default Home1
