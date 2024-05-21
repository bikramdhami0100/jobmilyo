"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function NewJob() {
  const [selectedJob, setSelectedJob] = useState("");

  const handleChange = (event:any) => {
    setSelectedJob(event.target.value);
  };

  return (
    <div>
      <div className='shadow-md hover:shadow-2xl'>
        <h1 className='text-center text-3xl italic underline underline-offset-2 font-semibold hover:decoration-blue-600 duration-200 animate-out'>Add Job</h1>
        <div className='flex flex-row flex-wrap justify-around items-center'>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>Job Title</h1>
            <Input placeholder="Enter job title" />
          </div>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>Number of Posts</h1>
            <Input placeholder="Enter number of posts" />
          </div>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>Description</h1>
            <Input placeholder="Enter job description" />
          </div>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>Experience Required</h1>
            <Input placeholder="Enter required experience" />
          </div>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>Qualification/Education Required</h1>
            <Input placeholder="Enter required qualification/education" />
          </div>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>Specialization Required</h1>
            <Input placeholder="Enter required specialization" />
          </div>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>Last Date to Apply</h1>
            <Input placeholder="Enter last date to apply" />
          </div>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>Salary</h1>
            <Input placeholder="Enter salary" />
          </div>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>Job Type</h1>
            <Select onValueChange={handleChange} value={selectedJob}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Job Type</SelectLabel>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="analyst">Analyst</SelectItem>
                  <SelectItem value="engineer">Engineer</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>Company/Organization Name</h1>
            <Input placeholder="Enter company/organization name" />
          </div>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>Company/Organization Logo</h1>
            <Input type='file' name='image' accept='image/*' />
            
          </div>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>Website</h1>
            <Input placeholder="Enter website URL" />
          </div>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>Email</h1>
            <Input placeholder="Enter email" />
          </div>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>Address</h1>
            <Input placeholder="Enter address" />
          </div>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>Country</h1>
            <Input placeholder="Enter country" />
          </div>
          <div className='w-[300px] lg:w-[400px] m-2'>
            <h1>State</h1>
            <Input placeholder="Enter state" />
          </div>
         
        </div>
        <div className=' flex flex-row flex-wrap m-4 justify-center '>
          <Button className='w-[300px] lg:w-[400px]  bg-blue-600 hover:translate-x-4 duration-150  ' onClick={()=>{
            //  handleAddJob()
          }}>Add Job</Button>
        </div>
      </div>
    </div>
  );
}

export default NewJob;
