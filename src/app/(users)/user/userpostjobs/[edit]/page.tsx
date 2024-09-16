"use client"
import axios from 'axios'
import React, { useEffect } from 'react'

function UserPostJobList({params}:any) {
    console.log(params.post)
    const UserPostedJob=async()=>{
        const send=await axios.get
    }
    useEffect(()=>{
        
    },[]);
  return (
    <div>UserPostJobList</div>
  )
}

export default UserPostJobList