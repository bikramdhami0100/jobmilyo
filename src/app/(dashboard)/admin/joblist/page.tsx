"use client"
import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Delete, Pencil, Trash2 } from 'lucide-react';
import { useTheme } from 'next-themes';

interface JobDetailType {
  Sr_No: number;
  jobTitle: string;
  No_of_Post: string;
  Qualification_Required: string;
  Experience_Required: string; // Corrected property name
  Last_Date_To_Apply: string;
  Company: string;
  State: string;
  Job_Posted_Date: string;
  Edit: string;
  Delete: string;
}
function JobList() {
  const { theme ,setTheme,themes}=useTheme();
  console.log(theme)
  
   
  const jobDetails: JobDetailType[] = [
    {
      Sr_No: 1,
      jobTitle: "Web Development",
      No_of_Post: "5",
      Qualification_Required: "Bachelor's Degree in Computer Science",
      Experience_Required: "3 years",
      Last_Date_To_Apply: "2024-05-15",
      Company: "ABC Web Solutions",
      State: "California",
      Job_Posted_Date: "2024-05-01",
      Edit: "Edit",
      Delete: "Delete",
    },
    {
      Sr_No: 2,
      jobTitle: "App Development",
      No_of_Post: "3",
      Qualification_Required: "Bachelor's Degree in Software Engineering",
      Experience_Required: "2 years",
      Last_Date_To_Apply: "2024-05-20",
      Company: "XYZ Mobile Apps",
      State: "New York",
      Job_Posted_Date: "2024-05-02",
      Edit: "Edit",
      Delete: "Delete",
    },
    // Add more job details as needed
  ];

  return (
    <div className=' flex flex-col gap-4 min-h-screen overflow-hidden'>
{/* table */}
      <div className=' overflow-x-scroll  '>
        <table className={` border-2  `}>
          <tr className={`border-2 ${theme=="light"?"bg-blue-400":null}`}><th className="border-2  p-2" > Sr.No</th> <th className="border-2  p-2" >Job Title</th> <th className="border-2  p-2" >No. Of Post</th> <th className="border-2  p-2" >Qualification Required</th> <th className="border-2  p-2" >Experience Required</th> <th className="border-2  p-2" >Last Date To apply</th> <th className="border-2  p-2" >Company</th> <th className="border-2  p-2" >State</th> <th className="border-2  p-2" >job Posted Date</th> <th className="border-2  p-2" >Edit</th> <th className="border-2  p-2" >Delete</th></tr>

          {
            jobDetails.map((item: JobDetailType, index: any) => {
              return (
                <tr className={`${theme=="light"?"bg-gray-300":null}`}>
                  <td className=" border-2   p-2 ">{item.Sr_No}</td>
                  <td className=" border-2   p-2 ">{item.jobTitle}</td>
                  <td className=" border-2   p-2 ">{item.No_of_Post}</td>
                  <td className=" border-2   p-2 ">{item.Qualification_Required}</td>
                  <td className=" border-2   p-2 ">{item.Experience_Required}</td>
                  <td className=" border-2   p-2 ">{item.Last_Date_To_Apply}</td>
                  <td className=" border-2   p-2 ">{item.Company}</td>
                  <td className=" border-2   p-2 ">{item.State}</td>
                  <td className=" border-2   p-2 ">{item.Job_Posted_Date}</td>
                  <td className=" border-2   p-2 cursor-pointer text-blue-600 underline underline-offset-2 "> <Pencil/></td>
                  <td className=" border-2   p-2  cursor-pointer text-blue-600 underline underline-offset-2">  <Trash2/></td>

                </tr>)
            })
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
