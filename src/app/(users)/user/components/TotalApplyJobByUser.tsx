"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image';
import Link from 'next/link';
function TotalApplyJobByUser() {
    interface Job {
        _id: string;
        company:string,
        company_logo:string,

        jobtitle: string;
        description: string;
        qualification: string;
        last_date: string; // Using string to represent ISO date string
      }
    interface JobApplication {
        applicationDate: string; // Using string to represent ISO date string
        createdAt: string; // Using string to represent ISO date string
        job: Job;
        resume: string;
        status: string;
        updatedAt: string; // Using string to represent ISO date string
        user: string;
        __v: number;
        _id: string;
      }
    const [applyjobList,setApplyJobList]=useState<any>();

    const totalJobApply=async()=>{
        const send=(await axios.get("/api/apply/user")).data;
        console.log(send)
        if(send.status==200){
            setApplyJobList(send.data)
        }
    }
    useEffect(()=>{
      totalJobApply();
    },[])
    console.log(applyjobList)
  return (
    <div>
        <div className=''>
            <h1 className=' text-3xl mt-10 underline font-bold m-4 text-center '> Apply Jobs List</h1>
            <div className=' flex flex-wrap gap-2 m-4  items-center justify-center'>
              {
               applyjobList?.map((item:JobApplication,index:number)=>{
                return(<div key={index} className='  w-[100%] md:w-[40%] lg:w-[40%]  border rounded-md  p-2 shadow-sm hover:shadow-md  '>
                 <Image  alt='companylogo' src={item.job?.company_logo} height={100} width={100} ></Image>
                 <p className={` ${item.status=="Applied"?"text-green-400":""}`}>{item.status}</p>
                 <p>{item.job.company}</p>
                 <p className=' text-ellipsis'>{item.job.jobtitle}</p>
                 {/* <Link href={item?.resume} target="_blank">Resume</Link> */}
                </div>)
               })
              }
            </div>
        </div>
    </div>
  )
}

export default TotalApplyJobByUser