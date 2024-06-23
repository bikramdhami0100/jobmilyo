"use client"
import { useParams, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

function HandleJob() {
  const {editjob}:any=useParams()
  console.log(editjob)
  const params=new URLSearchParams();
  params.set("jobId",editjob);
  const HandleFetchData=async()=>{
    const result=await fetch(`/api/addjob/edit?${params}`,{
      method:"get"
    });
    const data= await result.json();
    console.log(data)
  }
  useEffect(() => {
   HandleFetchData()
  }, [])
  

  return (
    <div>
       
    </div>
  )
}

export default HandleJob