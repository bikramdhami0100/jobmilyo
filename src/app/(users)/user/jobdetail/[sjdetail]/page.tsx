import { Button } from '@/components/ui/button';
import { IconCalendarTime } from '@tabler/icons-react';
import { Bookmark, CalendarDays, Clock10, Clock7, DollarSign, Locate, Mail, MapPin, Rocket } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { SelectSeparator } from '@radix-ui/react-select';
import { Input } from '@/components/ui/input';
function SingleJobDetails() {
  interface SingleJobData {
    companyname: string,
    workingemployee: number,
    no_of_office: string,
    industry: string,
    companylogo: string,
    jobfor: string,
    location: string,
    jobtime: string,
    place: string,
    content: string,
    salary: string,
    time: string,

  }
  const jobItem: SingleJobData = {
    companyname: "ABC Corporation",
    workingemployee: 500,
    no_of_office: "1",
    industry: "Technology",
    companylogo: "abc_corp_logo.png",
    jobfor: "Software Engineer",
    location: "New York City",
    jobtime: "Full-time",
    place: "On-site",
    content: "The content provides an overview of ABC Corporation, a leading technology company known for its commitment to innovation. It introduces the position of Software Engineer, highlighting responsibilities such as designing and implementing software solutions, collaborating with cross-functional teams, and ensuring code quality and reliability. The requirements include a bachelor's degree in Computer Science or related field, proficiency in programming languages, problem-solving skills, and effective communication abilities. The summary emphasizes ABC Corporation's dynamic work environment, emphasis on creativity and inclusion, and the opportunity for professional growth and development. It encourages qualified candidates passionate about technology to apply and become part of a team shaping the future of technology at ABC Corporation.",

    salary: "$80 - $100k",
    time: "29 min ago"
  };
  return (
    <div>
      <div className='flex flex-row flex-wrap justify-center items-start '>
        {/*  jobs short details */}
        <div className=' flex flex-col  justify-center items-center  gap-2 shadow-md border m-2 p-4 w-[100%] md:w-[19%] lg:w-[19%] '>
          <Image alt='images' src="/images/verisk.png" height={100} width={100} className='w-[200px] h-[200px] ' />
          <p>{jobItem.companyname}</p>
          <p>Industry - {jobItem.industry}</p>
          <p>No of Employees - {jobItem.workingemployee}+</p>
          <p>Offices in - {jobItem.no_of_office}</p>

        </div>
        {/* middle part */}
        <div className=' flex flex-row  justify-between  items-start mt-2 gap-4 w-[100%] md:w-[60%] lg:w-[60%] shadow-md border  p-2'>
          <div className=' w-[100px]'>
            <Image alt="item image" src="/images/verisk.png" height={100} width={100} />
          </div>
          <div className='w-full '>
            <p>{jobItem.companyname}</p>
            <div className=' flex gap-4 '>
              <h1 >{jobItem.jobfor} <Button className=' h-[30px] text-green-600 bg-green-200'>Remote</Button></h1>
              <div className=' flex gap-2'><Bookmark className=' h-[30px]' /> <Button className=' h-[30px] bg-green-600'>Apply</Button></div>
            </div>
            <div className=' flex items-center justify-between'>
              <p className=' flex gap-2 justify-center items-center'><MapPin />{jobItem.location}</p>
              <p className=' flex gap-2 justify-center items-center'><Clock10 />{jobItem.jobtime}</p>
              <p className=' flex gap-2 justify-center items-center'><DollarSign />{jobItem.salary}</p>
              <p className=' flex gap-2 justify-center items-center'><IconCalendarTime />{jobItem.time}</p>
            </div>
            <p>
              {jobItem.content}
            </p>
            <h1 className='text-3xl font-extrabold'>
              <span className='underline decoration-blue-600'>Other job Openings</span>
            </h1>
            {/* item 1 and i have to setup for using map further backend working */}
            <div className=' flex  flex-col  gap-2 p-1 '>
              <div className=' flex gap-4  '>
                <h1 >{jobItem.jobfor} <Button className=' h-[30px] text-green-600 bg-green-200'>Remote</Button></h1>
              </div>
              <div className=' flex items-center justify-between'>
                <p className=' flex gap-2 justify-center items-center'><MapPin />{jobItem.location}</p>
                <p className=' flex gap-2 justify-center items-center'><Clock10 />{jobItem.jobtime}</p>
                <p className=' flex gap-2 justify-center items-center'><DollarSign />{jobItem.salary}</p>
                <p className=' flex gap-2 justify-center items-center'><IconCalendarTime />{jobItem.time}</p>
              </div>
            </div>
            <hr />
            <div className=' flex  flex-col  gap-2 p-1 '>
              <div className=' flex gap-4  '>
                <h1 >{jobItem.jobfor} <Button className=' h-[30px] text-green-600 bg-green-200'>Remote</Button></h1>
              </div>
              <div className=' flex items-center justify-between'>
                <p className=' flex gap-2 justify-center items-center'><MapPin />{jobItem.location}</p>
                <p className=' flex gap-2 justify-center items-center'><Clock10 />{jobItem.jobtime}</p>
                <p className=' flex gap-2 justify-center items-center'><DollarSign />{jobItem.salary}</p>
                <p className=' flex gap-2 justify-center items-center'><IconCalendarTime />{jobItem.time}</p>
              </div>
            </div>
            <hr />
            <div className=' flex  flex-col  gap-2 p-1 '>
              <div className=' flex gap-4  '>
                <h1 >{jobItem.jobfor} <Button className=' h-[30px] text-green-600 bg-green-200'>Remote</Button></h1>
              </div>
              <div className=' flex items-center justify-between'>
                <p className=' flex gap-2 justify-center items-center'><MapPin />{jobItem.location}</p>
                <p className=' flex gap-2 justify-center items-center'><Clock10 />{jobItem.jobtime}</p>
                <p className=' flex gap-2 justify-center items-center'><DollarSign />{jobItem.salary}</p>
                <p className=' flex gap-2 justify-center items-center'><IconCalendarTime />{jobItem.time}</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
        {/* last part */}
        <div className=' mt-2 flex flex-col flex-wrap w-[70%] shadow-md border m-auto md:w-[19%] lg:w-[19%] justify-center items-start p-2'>
          <div>
            <h1 className=' flex  gap-3'><Mail /> Email me for jobs</h1>
            <p>Are you ready to take your career to the next level? Look no further than ABC Corporation! We are thrilled to announce several exciting job openings that could be the perfect fit for you.</p>
            <Input placeholder=' Enter Email' />
            <Button className=' w-full bg-red-400'>Subscribe</Button>
          </div>
          <div>
            <h1 className=''>🚀 Get noticed faster</h1>
            <p>Are you ready to take your career to the next level? Look no further than ABC Corporation! We are thrilled to announce several exciting job openings that could be the perfect fit for you.</p>

            <Button className=' w-full bg-green-600'>Upload your resume</Button>
          </div>
          <div>
          <h1 className=''>😎 Freelance gigs</h1>
            <p>Are you ready to take your career to the next level? Look no further than ABC Corporation! We are thrilled to announce several exciting job openings that could be the perfect fit for you.</p>

            <Button className=' w-full bg-green-600'>Visit Freelance site</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleJobDetails
