"use client"
import { Button } from '@/components/ui/button';
import { IconCalendarTime } from '@tabler/icons-react';
import { Bookmark, Phone, Rocket, SendHorizonal, Star } from 'lucide-react';
import Image from 'next/image'
import React, { use, useEffect, useState } from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import { Input } from '@/components/ui/input';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
function UserProfile() {
    interface Mysignup{
        fullname:string,
        
        dob:string,
        email:string,
        
    }
    interface UserInfo{
        CurrentAddress:string,
        PermanentAddress:string,
         boardname:string,
        educationtype:string,
        expectedPositionLevel:string,
        faculity:string,
        fname:string,
        gender:string,
        gpaorpercentage:string,
        interestedCategory:string,
        interestedEmployementType:string,
        interestedFiels:string,
        level:string,
        lname:string,
        marksheet:string,
        mname:string,
        passedDate:string,
        phone:string,
        previouscompany:string,
        previousrole:string,
        uploadCV:string
        
    }
    
    const session = useSession();
    const [rating,setRating]=useState(0);
    const [inform,setInform]=useState<UserInfo>();
    const [signup,setSignUp]=useState<Mysignup|undefined>();
    const userData=useSelector((state:any)=>{
       
         return state.signupinfo.Users[1]
    });

  useEffect(()=>{
    if (userData!==undefined) {

        const data=JSON.parse(userData);
        setInform(data);
        console.log(data);
       
        const newdata=JSON.parse(data.signUpUser.user);
         setSignUp(newdata);
        console.log(newdata);
       }
  },[]);
   console.log(inform);
   console.log(signup);
   

    interface UserProfileType {
        name: string;
        email: string;
        image: string;
        rating: number;
        salary: string;
        workingIn: string;
        work: string;
        skills: string[];
        basicInformation: [{
            age: number;
            yearOfExperience: string;
            phone: string;
            ctc: string;
            location: string;
            mail: string;
            cv: string;

        }];
        experience: string[];
        education: string[];
        certification: string[];
    }  



    let  userItem: UserProfileType = {
        name: signup?.fullname|| session.data?.user?.name || "bikram Dhami",
        email: signup?.email|| session.data?.user?.email || "bikram@example.com",
        image: session.data?.user?.image || "/images/logo.png",
        rating: rating,
        salary: "$60/hr",
        workingIn: "ABC Corporation",
        work: "Graphic Designer",
        skills: ["JavaScript", "HTML", "CSS", "python"],
        basicInformation: [{
            age: 22,
            yearOfExperience: "4 years",
            phone:inform?.phone|| "98000000000",
            ctc: "$ 40/hr",
            location:inform?.CurrentAddress|| "mahendranagar",
            mail:signup?.email|| session.data?.user?.email || "jobmilyo@gmail.com",
            cv: "",
        }],
        experience: ["Software Engineer at XYZ Corp", "Internship at ABC Inc"],
        education: ["Bachelor's Degree in Computer Science"],
        certification: ["AWS Certified Developer"]
    };
    interface OtherUserType {
        name: string,
        image: string,
        work: string,
        yearofexperience: string,

    }
    const otherUsers: OtherUserType[] = [
        {
            name: "John",
            image: "https://images.unsplash.com/photo-1599837487527-e009248aa71b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "Graphic Designer",
            yearofexperience: "5 years"
        },
        {
            name: "Alice",
            image: "https://images.unsplash.com/photo-1599837487527-e009248aa71b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "Graphic Designer",
            yearofexperience: "3 years"
        },
        {
            name: "Bob",
            image: "https://images.unsplash.com/photo-1599837487527-e009248aa71b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "Graphic Designer",
            yearofexperience: "7 years"
        },
        {
            name: "Emily",
            image: "https://images.unsplash.com/photo-1599837487527-e009248aa71b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "Graphic Designer",
            yearofexperience: "2 years"
        },
        {
            name: "Michael",
            image: "https://images.unsplash.com/photo-1599837487527-e009248aa71b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "Graphic Designer",
            yearofexperience: "6 years"
        }
    ];
const UserDataFetch= async()=>{
   const data=await fetch("/api/fetchuserdata",{
    method:"post",
    headers:{
        "content-type":"application/json"
    },
    body:null
   });
   const result=await data.json();
   if (result.ok) {
        console.log(result)
   }
    }

 useEffect(()=>{
   UserDataFetch()
 },[])
    return (
        <div>
            <div className='flex flex-row flex-wrap justify-center items-start '>
                {/*  first part of user profile*/}
                <div className=' flex flex-col  justify-center items-center  gap-2 shadow-md border m-2 p-4 w-[100%] md:w-[19%] lg:w-[19%] '>

                    <div className=' flex flex-col justify-center items-center'>
                       {
                         signup?<div className='w-[200px] h-[200px] rounded-full  bg-blue-600  '>
                              
                         </div>: <Image alt='images' src={userItem.image} height={100} width={100} className='w-[200px] h-[200px] rounded-full  ' />
                       }

                        <p>{userItem.name}</p>
                        <p>{userItem.email}</p>
                        <div className=' flex gap-3 cursor-pointer '>
                        <div className=' cursor-pointer'>
                        {
                            rating<=9?   <p className=' flex gap-1'> {userItem.rating} <Star onClick={()=>{
                                    setRating(rating+1);
                                  }} className={`${rating>=1?"text-yellow-500 ":""}`} /></p>:
                                  <p className=' flex gap-1'> {userItem.rating} <Star onClick={()=>{
                                    setRating(rating);
                                  }} className={`${rating>=1?"text-yellow-500 ":""}`} /></p>
                        }
                        </div>
                            <p> {userItem.salary}</p>
                        </div>
                        <h1>{userItem.work} </h1>
                        <div className=' flex '>
                            <Input className=' rounded-r-none' placeholder='Message ' />
                            <Button className=' rounded-l-none gap-2 bg-green-600 '>Send <SendHorizonal /> </Button>
                        </div>
                    </div>
                    <hr />
                    <h1>Skills</h1>
                    <div>
                        <div className=' flex gap-2 flex-wrap'>
                            {
                                userItem.skills.map((item, index) => {
                                    return (
                                        <div key={index} className=' border p-2 rounded-3xl w-[100px]  text-center'>
                                            <p>{item}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <h1>Recents</h1>
                        <p>No data Available</p>
                    </div>
                </div>
                {/* middle part */}
                <div className=' flex flex-col  justify-between  items-start mt-2 gap-4 w-[100%] md:w-[60%] lg:w-[60%] shadow-md border  p-2'>
                    <div className=' flex flex-col  justify-center items-start border shadow-lg p-6 m-auto'>
                        <h1>Basic Information</h1>
                        <div className=' flex flex-wrap '>
                            {
                                userItem.basicInformation.map((item, index) => {
                                    return (<div key={index} className=' flex  gap-10 flex-wrap  justify-around items-center'>
                                        <div>
                                            <h1>Age</h1>
                                            <p>{item.age}</p>

                                        </div>
                                        <div>
                                            <h1>Years of Excellence</h1>
                                            <p>{item.yearOfExperience}</p>

                                        </div>
                                        <div>
                                            <h1>Phone</h1>
                                            <p>{item.phone}</p>

                                        </div>
                                        <div>
                                            <h1>CTC</h1>
                                            <p>{item.ctc}</p>

                                        </div>
                                        <div>
                                            <h1>Location</h1>
                                            <p>{item.location}</p>

                                        </div>
                                        <div>
                                            <h1>Mail</h1>
                                            <p>{item.mail}</p>

                                        </div>

                                        <Button className=' bg-blue-600'>Download CV</Button>
                                        <Button className=' flex  transition-colors duration-500 bg-green-500'><Phone /> Call</Button>

                                    </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <div className=' shadow-xl border w-full'>
                        {/* tabs is used */}
                        <Tabs defaultValue="Experience" className="">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="Experience">Experience</TabsTrigger>
                                <TabsTrigger value="Education">Education</TabsTrigger>
                                <TabsTrigger value="Certification">Certification</TabsTrigger>
                            </TabsList>
                            <TabsContent value="Experience">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Experience</CardTitle>
                                        <CardDescription>
                                            <hr />
                                            <div className='flex flex-col justify-center items-start h-[500px] overflow-y-scroll overflow-x-hidden w-full gap-2 m-auto p-2'>
                                                {otherUsers.map((item, index) => (
                                                    <div key={index} className='flex flex-row justify-between  items-center shadow-xl border  p-1 w-full'>
                                                        <div className=' flex justify-center items-center'>
                                                            <Image
                                                                alt='other images'
                                                                height={100}
                                                                width={100}
                                                                src={item.image}
                                                                className='rounded-full h-[80px] w-[80px] '
                                                            />
                                                            <div className='flex flex-col justify-center items-start ml-4  '>
                                                                <h1>{item.name}</h1>
                                                                <p>{item.work}</p>
                                                                <p>{item.yearofexperience}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                             <h1 className=' underline'>View Project</h1>
                                                        </div>

                                                    </div>
                                                ))}
                                            </div>
                                        </CardDescription>
                                    </CardHeader>

                                </Card>
                            </TabsContent>
                            <TabsContent value="Education">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Education</CardTitle>
                                       
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                       
                                    </CardContent>
                                   
                                </Card>
                            </TabsContent>
                            <TabsContent value="Certification">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Certification</CardTitle>
                                    </CardHeader>
                                     <CardContent>

                                     </CardContent>
                                    
                                </Card>
                            </TabsContent>
                        </Tabs>

                    </div>
                </div>
                {/* last part */}
                <div className=' mt-2 flex flex-col flex-wrap w-[100%] shadow-md border m-auto md:w-[19%] lg:w-[19%] justify-center items-start p-2'>
                    <div className=' flex justify-center items-center h-[200px] shadow-lg border p-6 w-full'>
                        <h1 className=' flex  gap-3'> Avertisement</h1>

                    </div>
                    <div className=' w-full shadow-md border mt-4 flex flex-col  justify-center items-start '>
                        <h1>Similar Profiles</h1>
                        <hr />
                        <div className='flex flex-col justify-center items-start h-[500px] overflow-y-scroll overflow-x-hidden w-full gap-2 m-auto p-2'>
                            {otherUsers.map((item, index) => (
                                <div key={index} className='flex flex-row justify-start items-center shadow-xl border  p-2 w-full'>
                                    <Image
                                        alt='other images'
                                        height={100}
                                        width={100}
                                        src={item.image}
                                        className='rounded-full h-[80px] w-[80px] '
                                    />
                                    <div className='flex flex-col justify-center items-start ml-4  '>
                                        <h1>{item.name}</h1>
                                        <p>{item.work}</p>
                                        <p>{item.yearofexperience}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
