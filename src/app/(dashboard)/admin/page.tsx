// "use client"
// import React, { useEffect, useState } from 'react';
// import { CldUploadButton } from 'next-cloudinary';
// import Image from 'next/image';
// // import { Image } from 'lucide-react';
// // import {Cloudinary} from "next-cloudinary"
// function AdminPanel() {
//   const [imageUrl, setImageUrl] = useState(null);
//   const [data, setData] = useState(null);
//   const handleSuccess = (response:any) => {
//     // Assuming the response contains the uploaded image details including URL
//     //  console.log(imageUrl)
//     // const publicid=response.public_id;
//     // const clurl= Cloudinary
//     // setImageUrl(response.secure_url);
//     console.log(response);
//     setImageUrl(response.info.url);

//   };
//   const Myfun=async(data:any)=>{
//     const ndata= await fetch("http://127.0.0.1:8000/api/create",{
//       method:"post",
//       headers:{
//         "content-type":"application/json"
//       },
//       body:JSON.stringify({
//         "name":"bikram dhami ji second",
//         "email":"bikram@gmail.com",
//         "password":"one",
//         "address":data
//       })
//     })
//   }
//   if (imageUrl!==null) {
    
//     Myfun(imageUrl);
//   }
//  const getUser=async()=>{
//   const ndata= await fetch("http://127.0.0.1:8000/api/getuser",{
//     method:"get",
//     headers:{
//       "content-type":"application/json"
//     },
   
//   })
//   const result=await ndata.json();
//   setData(result.data);
//   console.log(result);
//  }
//  useEffect(()=>{
//    getUser();
//  },[])
//  const user=data?.map((item,index)=>{
//      console.log(item.address);
//     return item?.address;
//  });
//  console.log("this si urls ",user)
//  console.log('this is image url'+imageUrl)
//   return (
//     <div className='  mt-20'>
//       AdminPanel 
//       <br />
//       <CldUploadButton 
//         uploadPreset="oiraxkfy" 
//         onSuccess={handleSuccess}
//       />
//       {data?<Image src={user[1]} height={100} width={200} alt="Uploaded" />:null} {/* Display the uploaded image */}
//     </div>
//   );
// }

// export default AdminPanel;
import React from 'react'

function AdminDashboard() {
  return (
    <div>
      
    </div>
  )
}

export default AdminDashboard

