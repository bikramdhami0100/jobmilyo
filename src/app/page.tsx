"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { CldImage } from 'next-cloudinary';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function Home1() {
// const session=useSession();
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
const router=useRouter();
  return (
    <div className=' flex w-full '>
     {/* <Button>Submit</Button> */}
    
     This is home page
     <div>
      {/* <Button onClick={()=>{
        router.replace("user")
      }}>User</Button>
       <Button onClick={()=>{
        router.replace("admin")
      }}>Admin</Button> */}
     </div>
    </div>
  )
}

export default Home1
