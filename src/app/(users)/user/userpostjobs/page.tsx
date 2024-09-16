"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserPostJobLists() {
  interface JobsType {
    address: String,
    category: String,
    company: String,
    company_logo: String,
    country: String,
    createdAt: Date,
    description: String
    email: String,
    experience: String
    industry: String,
    interestedEmploymentTypes: String,
    jobtitle: String,
    jobupload: Date,
    last_date: Date,
    no_of_office: Number,
    no_of_workingemployee: Number,
    no_vacancy: Number,
    number_of_post: Number,
    qualification: String,
    rating: Number,
    salary: String,
    site: String,
    specialization_req: String,
    state: String,
    updatedAt: Date,
    user: String,
    website_url: String,
    __v: Number,
    _id: String,
  }
  const [jobslist, setJobList] = useState<any>();
  const HandlerUserPostedJob = async () => {
    const userposted = (await axios.get("/api/userpostjobs")).data;
    setJobList(userposted.data);
  }
  console.log(jobslist, "joblist data is here")
  useEffect(() => {
    HandlerUserPostedJob();
  }, [])
  return (
    <div>
      {
        // jobslist?.map((item: JobsType, index: number) => {
        //   return (
        //     <div>

        //     </div>
        //   )
        // })
      }
    </div>
  )
}

export default UserPostJobLists