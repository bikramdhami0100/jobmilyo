"use client"
import React, { useEffect, useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Delete, Edit, Pencil, Trash2 } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

interface JobDetailType {
  _id:string
  Sr_No: number;
  jobtitle: string;
  number_of_post:string;
  qualification: string;
  experience: string; // Corrected property name
  last_date: string;
  company: string;
  state: string;
  job_posted: string;
  Edit: string;
  Delete: string;
}
function JobList() {
  const { theme ,setTheme,themes}=useTheme();
  const [job,setJob]=useState<any>()
  const fetchJobData=async()=>{
    const result=await fetch("/api/addjob",{
      method:"get"
    })
    const data=await result.json()
    console.log(data)
    if(data.message=="success"){
      setJob(data.data)
    }
  }
useEffect(()=>{
  fetchJobData()
},[])
// const jobDetails: JobDetailType[] = [
 
//   // {
//   //   Sr_No: count+1,
//   //   jobTitle: "Web Development",
//   //   No_of_Post: "5",
//   //   Qualification_Required: "Bachelor's Degree in Computer Science",
//   //   Experience_Required: "3 years",
//   //   Last_Date_To_Apply: "2024-05-15",
//   //   Company: "ABC Web Solutions",
//   //   State: "California",
//   //   Job_Posted_Date: "2024-05-01",
//   //   Edit: "Edit",
//   //   Delete: "Delete",
//   // },
//   // {
//   //   Sr_No: 2,
//   //   jobTitle: "App Development",
//   //   No_of_Post: "3",
//   //   Qualification_Required: "Bachelor's Degree in Software Engineering",
//   //   Experience_Required: "2 years",
//   //   Last_Date_To_Apply: "2024-05-20",
//   //   Company: "XYZ Mobile Apps",
//   //   State: "New York",
//   //   Job_Posted_Date: "2024-05-02",
//   //   Edit: "Edit",
//   //   Delete: "Delete",
//   // },
//   // Add more job details as needed
// ];
// console.log(...job)

  return (
    <div className=' flex flex-col gap-4 min-h-screen overflow-hidden'>
{/* table */}
      <div className=' overflow-x-scroll  '>
        <table className={` border-2  `}>
          <tr className={`border-2 ${theme=="light"?"bg-blue-400":null}`}><th className="border-2  p-2" > Sr.No</th> <th className="border-2  p-2" >Job Title</th> <th className="border-2  p-2" >No. Of Post</th> <th className="border-2  p-2" >Qualification Required</th> <th className="border-2  p-2" >Experience Required</th> <th className="border-2  p-2" >Last Date To apply</th> <th className="border-2  p-2" >Company</th> <th className="border-2  p-2" >State</th> <th className="border-2  p-2" >job Posted Date</th> <th className="border-2  p-2" >Edit</th> <th className="border-2  p-2" >Delete</th></tr>

          {
           job? job.map((item: JobDetailType, index: any) => {
            return (
              <tr className={`${theme=="light"?"bg-gray-300":null}`}>
                <td className=" border-2   p-2 ">{item.Sr_No}</td>
                <td className=" border-2   p-2 ">{item.jobtitle}</td>
                <td className=" border-2   p-2 ">{item.number_of_post}</td>
                <td className=" border-2   p-2 ">{item.qualification}</td>
                <td className=" border-2   p-2 ">{item.experience}</td>
                <td className=" border-2   p-2 ">{item.last_date}</td>
                <td className=" border-2   p-2 ">{item.company}</td>
                <td className=" border-2   p-2 ">{item.state}</td>
                <td className=" border-2   p-2 ">{item.job_posted}</td>
                <td  className=" border-2   p-2 cursor-pointer text-blue-600 underline underline-offset-2 ">  <Link href={`/admin/joblist/${item._id}`} > <Pencil/></Link></td>
                <td  className=" border-2   p-2 cursor-pointer text-blue-600 underline underline-offset-2 ">  <Link href={`/admin/joblist/${item._id}`} > <Trash2/></Link></td>
              

              </tr>)
          }):null
          }

        </table>

      </div>
    {/* paganization */}
      <div className=''>
       <Pagination className=' flex justify-start items-start'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
       </div>
    </div>
  )
}

export default JobList
