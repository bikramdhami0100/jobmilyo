"use client"
import { Button } from '@/components/ui/button';
import { IconCalendarTime, IconCircleCheckFilled, IconEdit, IconEditCircle, IconEyeStar, IconPhoneCall, IconPhotoEdit, IconSignRightFilled, IconStar, IconStarFilled, IconStarOff, IconUpload } from '@tabler/icons-react';
import { Bookmark, Loader, PencilLine, Phone, Plus, Rocket, SendHorizonal, Star } from 'lucide-react';
import Image from 'next/image'
import React, { use, useEffect, useState } from 'react'
// import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import axios from "axios";
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


import html2canvas from 'html2canvas';
const FileSaver = require("file-saver");
import { Input } from '@/components/ui/input';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import { zIndex } from 'html2canvas/dist/types/css/property-descriptors/z-index';
function UserProfile() {
    const session = useSession()
    const router = useRouter();
    const [isDownloading, setIsDownloading] = useState(false);
    const [rating, setRating] = useState(4);
    const [inform, setInform] = useState<UserInfo>();
    const [signup, setSignUp] = useState<any>();
    const [userInformation, setuserInformation] = useState([]);
    var [allSkill, setAllSkill] = useState<string[]>([]);
    const [skill, setSkill] = useState<string>('');
    const [showUploadButton, setShowUploadButton] = useState(false);
    const handleIconEditClick = () => {
        setShowUploadButton(!showUploadButton);
        // setTimeout(() => {
        //      setShowUploadButton(false)
        // }, 100000);
    };

    const handleUploadSuccess = (result: any) => {
        console.log('Upload Success:', result);
        setShowUploadButton(false); // Optionally, hide the upload button after a successful upload
    };

    interface UserInfo {
        CurrentAddress: string,
        PermanentAddress: string,
        boardname: string,
        educationtype: string,
        expectedPositionLevel: string,
        faculity: string,
        fname: string,
        gender: string,
        gpaorpercentage: string,
        interestedCategory: string,
        interestedEmployementType: string,
        interestedFiels: string,
        level: string,
        lname: string,
        marksheet: string,
        mname: string,
        passedDate: string,
        phone: string,
        previouscompany: string,
        previousrole: string,
        uploadCV: string

    }


    const dataFromDatabase = async () => {
        const data = await fetch("/api/profiledata/", {
            method: "get"
        })
        const restult = await data.json();
        console.log(restult)
        if (restult) {
            setuserInformation(restult.data.userInfos);
            setSignUp(restult.data.user);
        }
    }
    useEffect(() => {
        dataFromDatabase()

    }, []);

    const downloadCV = async (imageURL: any, username: any) => {
        setIsDownloading(true);
        try {
            const response = await axios({
                url: imageURL,
                method: 'GET',
                responseType: 'blob', // important
            });
            FileSaver.saveAs(response.data, `${username}cv${Date.now()}.jpg`);
        } catch (error) {
            console.error('Error downloading the image:', error);
        }
        setIsDownloading(false);
    };
    console.log(userInformation);

    let userItem: any = {
        fullName: signup?.fullname || "bikram",
        email: signup?.email || session.data?.user?.email || "bikram@example.com",
        image: session.data?.user?.image || "/images/logo.png",
        rating: rating,
        salary: "$60/hr",
        workingIn: "ABC Corporation",
        work: "Graphic Designer",
        skills: ["JavaScript", "HTML", "CSS", "python"],
        basicInformation: [{
            age: 22,
            yearOfExperience: "4 years",
            phone: inform?.phone || "98000000000",
            ctc: "$ 40/hr",
            location: inform?.CurrentAddress || "mahendranagar",
            mail: signup?.email || session.data?.user?.email || "jobmilyo@gmail.com",
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
    const handleAddSkill = () => {
        if (skill.trim() && !allSkill.includes(skill)) {
            setAllSkill((prevSkills) => [...prevSkills, skill]);
            setSkill('');
        }
    };
    const handleSelect = (item: any, index: any) => {
        setSkill(item)
        allSkill.splice(index, 1);

    }
    useEffect(() => {

    }, [allSkill]);
    const skillUpdate = async() => {
      console.log("all ",allSkill)
      axios.post('/api/profiledata/skillupdate', allSkill)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    const CallingToUser = (phonenumber: any) => {
        return (
            <a href={`tel:${phonenumber}`} style={{ textDecoration: 'none', color: 'blue' }}>
                Call {phonenumber}
            </a>
        )

    }
    const userAge = (dob: any) => {
        const birthdateinyear = new Date(dob).getFullYear();
        const currentdateinyear = new Date().getFullYear();
        const age = currentdateinyear - birthdateinyear;
        return age;

    }
    const HandlerOtherUser=(item:any)=>{
        const userId=1
        router.push(`otheruser/${userId}`);
    }
    console.log(userInformation)
    return (
        <div>
            <div className='flex flex-row flex-wrap justify-center items-start '>
                {/*  first part of user profile*/}
                {
                    signup ? (
                        <div className='flex flex-col justify-center items-center gap-2 shadow-md border m-2 p-4 w-[100%] md:w-[19%] lg:w-[19%]'>
                            <div className='flex flex-col justify-center items-center gap-1'>
                                {
                                    <div className='flex flex-col justify-center items-center gap-2  p-4 w-[100%] md:w-[19%] lg:w-[19%]'>
                                        <div className='flex flex-col justify-center items-center'>
                                            {
                                                signup?.color.startsWith("#") ? (
                                                    <div className='w-[100px] flex justify-center items-center -mb-4 relative group'>
                                                        <div style={{ backgroundColor: signup?.color }} className='flex justify-center items-center w-[100px] h-[100px] rounded-full'>
                                                            <div className='text-center'>{signup.fullName.charAt(0).toUpperCase()}</div>
                                                        </div>
                                                        <IconEdit
                                                            className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'
                                                            onClick={handleIconEditClick}
                                                        />
                                                        {showUploadButton && (
                                                            <CldUploadButton
                                                                className='absolute top-8 bg-green-600 left-0 w-full text-left border-2 p-1 rounded-md'
                                                                uploadPreset="wyyzhuyo"
                                                                onSuccess={handleUploadSuccess}
                                                            />
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className='relative group'>
                                                        <Image src={signup?.color} alt={"profile image"} width={100} height={100} className='rounded-full' />
                                                        <IconEdit
                                                            className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'
                                                            onClick={handleIconEditClick}
                                                        />
                                                        {showUploadButton && (
                                                            <CldUploadButton
                                                                className='absolute  top-12 left-0 w-full text-left border-2 p-1 rounded-md'
                                                                uploadPreset="wyyzhuyo"
                                                                onSuccess={handleUploadSuccess}
                                                            />
                                                        )}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                }
                                <div className='cursor-pointer'>
                                    {
                                        rating <= 9 ? (
                                            <p className='flex gap-1'>
                                                {userItem.rating}
                                                <IconStarFilled onClick={() => setRating(rating + 1)} className={`${rating >= 1 ? "text-yellow-500 " : ""}`} />
                                            </p>
                                        ) : (
                                            <p className='flex gap-1'>
                                                {userItem.rating}
                                                <IconStarFilled onClick={() => setRating(rating)} className={`${rating >= 1 ? "text-yellow-500 " : ""}`} />
                                            </p>
                                        )
                                    }
                                </div>
                                <p className=' flex gap-1 '>{signup?.fullName} <IconCircleCheckFilled className=' text-blue-700' /> </p>

                                <p>{signup?.email}</p>
                                <div className='flex gap-3 cursor-pointer'>

                                    {/* <p>{userItem.salary}</p> */}
                                </div>
                                {/* <h1>{userItem.work}</h1> */}
                                <div className='flex'>
                                    <Input className='rounded-r-none' placeholder='Message' />
                                    <Button className='rounded-l-none gap-2 bg-green-600'>Send <SendHorizonal /></Button>
                                </div>
                            </div>
                            <hr />
                            <h1 className=' flex   justify-center items-center '>Skills
                                <Dialog >
                                    <DialogTrigger asChild>
                                        <Button variant="outline" className=' border-none hover:bg-auto'><IconEdit /></Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle className=' border-none shadow-none rounded-none decoration-black'>Add skills</DialogTitle>
                                            <DialogDescription>
                                                Make sure you have that skills. Click save when you're done.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className=" w-full flex flex-col justify-center items-start  ">

                                            <div className=" p-4  w-full flex ">

                                                <Input
                                                    type="text"
                                                    value={skill}
                                                    onChange={(e) => setSkill(e.target.value)}
                                                    placeholder="Enter a skill one by one "
                                                    className="p-2 border  rounded-md  mr-2"
                                                />
                                                <button
                                                    onClick={handleAddSkill}
                                                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                                                >
                                                    Add
                                                </button>


                                            </div>
                                            <ScrollArea className="h-[100px] w-full rounded-md border">
                                                <div className="p-4">
                                                    {
                                                        allSkill?.map((item: any, index: any) => {
                                                            return (
                                                                <div onClick={() => {
                                                                    handleSelect(item, index);
                                                                }} className=' border w-[90%] cursor-pointer rounded-md p-2 m-2 ' key={index}>
                                                                    {item}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </ScrollArea>
                                        </div>
                                        <DialogFooter>
                                            <Button onClick={() => {
                                                skillUpdate()
                                            }} type="submit">Save changes</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog></h1>
                            <div>
                                <div className='flex gap-2 flex-wrap'>
                                    {
                                        userItem.skills.map((item: any, index: any) => (
                                            <div key={index} className='border p-2 rounded-3xl w-[100px] text-center'>
                                                <p>{item}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <h1>Recents</h1>
                                <p>No data Available</p>
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col justify-center items-center gap-2 shadow-md border m-2 p-4 w-[100%] md:w-[19%] lg:w-[19%] animate-pulse'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='w-[200px] h-[200px] rounded-full bg-gray-300'></div>
                                <div className='h-4 w-3/4 bg-gray-300 mt-2 rounded'></div>
                                <div className='h-4 w-1/2 bg-gray-300 mt-2 rounded'></div>
                                <div className='flex gap-3 mt-2'>
                                    <div className='h-4 w-10 bg-gray-300 rounded'></div>
                                    <div className='h-4 w-16 bg-gray-300 rounded'></div>
                                </div>
                                <div className='h-4 w-1/4 bg-gray-300 mt-2 rounded'></div>
                                <div className='flex w-full mt-2'>
                                    <div className='h-10 w-3/4 bg-gray-300 rounded-r-none'></div>
                                    <div className='h-10 w-1/4 bg-gray-300 rounded-l-none'></div>
                                </div>
                            </div>
                            <hr />
                            <div className='h-4 w-1/4 bg-gray-300 mt-2 rounded'></div>
                            <div className='flex gap-2 flex-wrap mt-2'>
                                {
                                    Array(4).fill('').map((_, index) => (
                                        <div key={index} className='border p-2 rounded-3xl w-[100px] text-center bg-gray-300'></div>
                                    ))
                                }
                            </div>
                            <div className='mt-2'>
                                <div className='h-4 w-1/4 bg-gray-300 rounded'></div>
                                <div className='h-4 w-3/4 bg-gray-300 mt-2 rounded'></div>
                            </div>
                        </div>
                    )
                }

                {/* middle part */}
                {
                    signup ? (<div className=' flex flex-col  justify-between  items-start mt-2 gap-4 w-[100%] md:w-[60%] lg:w-[60%] shadow-md border  p-2'>
                        <div className=' flex flex-col  justify-center items-start border shadow-lg p-6 m-auto'>
                            <h1>Basic Information</h1>
                            <div className=' flex flex-wrap '>
                                {
                                    userInformation.map((item: any, index: any) => {
                                        // const date=new Date(dateofBirth);
                                        // console.log(date)
                                        return (<div key={index} className=' flex  gap-10 flex-wrap  justify-around items-center'>
                                            <div>
                                                <h1>Age</h1>
                                                <p>{userAge(item.dateofBirth)}</p>

                                            </div>
                                            <div>
                                                <h1>Years of Excellence</h1>
                                                {
                                                    item.previouscompany.map((item: any, index: any) => {
                                                        return (<div key={index}>{item}</div>)
                                                    })
                                                }

                                            </div>
                                            <div>
                                                <h1>Phone</h1>
                                                <p>{item.phone}</p>

                                            </div>
                                            <div>
                                                <h1>CTC</h1>
                                                <p>{item.previouscompany.map((item: any, index: any) => {
                                                    return (<div key={index}>{item}</div>)
                                                })}</p>

                                            </div>
                                            <div>
                                                <h1>Location</h1>
                                                <p>{item.CurrentAddress}</p>

                                            </div>
                                            <div>
                                                <h1>Mail</h1>
                                                <p>{signup.email}</p>

                                            </div>

                                            <Button onClick={() => {
                                                downloadCV(item.uploadCV, item.fname);
                                            }} className=' bg-blue-600'> {isDownloading&&<Loader className=' animate-spin'/>}Download CV</Button>
                                            <Button onClick={() => {
                                                CallingToUser(item.phone);
                                            }} className=' flex  transition-colors duration-500 bg-green-500'><IconPhoneCall /> Call</Button>

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
                    </div>) : (<div className=' flex flex-col  justify-between  items-start mt-2 gap-4 w-[100%] md:w-[60%] lg:w-[60%] shadow-md border  p-2'>
                        {/* Skeleton loading for Basic Information */}

                        <div className='border shadow-md p-4 mb-4  w-full'>
                            <div className='animate-pulse flex flex-col space-y-4'>

                                <div className='h-6 bg-gray-300 rounded'></div>
                                <div className='h-6 bg-gray-300 rounded'></div>
                                <div className='h-6 bg-gray-300 rounded'></div>
                                <div className='h-6 bg-gray-300 rounded'></div>
                                <div className='h-6 bg-gray-300 rounded'></div>
                            </div>
                        </div>

                        {/* Skeleton loading for TabsContent */}
                        <div className='shadow-xl border p-4 w-full '>
                            <div className='animate-pulse space-y-4'>
                                <div className='flex items-center justify-between'>
                                    <div className='h-6 w-1/2 bg-gray-300 rounded'></div>
                                    <div className='h-6 w-1/4 bg-gray-300 rounded'></div>
                                    <div className='h-6 w-1/4 bg-gray-300 rounded'></div>
                                </div>
                                <div className='h-6 bg-gray-300 rounded'></div>
                                <div className='h-6 bg-gray-300 rounded'></div>
                                <div className='h-6 bg-gray-300 rounded'></div>
                            </div>
                        </div>
                    </div>)
                }
                {/* last part */}
                {
                    signup ? (<div className='  mt-2 flex flex-col flex-wrap w-[100%] shadow-md border m-auto md:w-[19%] lg:w-[19%] justify-center items-start p-2'>
                        <div className=' flex justify-center items-center h-[200px] shadow-lg border p-6 w-full'>
                            <h1 className=' flex  gap-3'> Avertisement</h1>

                        </div>
                        <div className=' w-full shadow-md border mt-4 flex flex-col  justify-center items-start '>
                            <h1>Similar Profiles</h1>
                            <hr />
                            <ScrollArea className="h-72 w-full rounded-md border">
                           

                                {otherUsers.map((item, index) => (
                                    <div  onClick={()=>{
                                        HandlerOtherUser(item)
                                    }} key={index} className='flex flex-row justify-start items-center shadow-xl border  cursor-pointer p-2 w-full'>
                                        <Image
                                            alt='other images'
                                            height={100}
                                            width={100}
                                            src={item.image}
                                            className='rounded-full h-[80px] w-[80px] curso '
                                        />
                                        <div className='flex flex-col justify-center items-start ml-4  '>
                                            <h1>{item.name}</h1>
                                            <p>{item.work}</p>
                                            <p>{item.yearofexperience}</p>
                                        </div>
                                    </div>
                                ))}
                           
                            </ScrollArea>
                        </div>
                    </div>) : (<div className="mt-2 flex flex-col flex-wrap w-[100%] shadow-md border m-auto md:w-[19%] lg:w-[19%] justify-center items-start p-2">
                        <div className="flex justify-center items-center h-[200px] shadow-lg border p-6 w-full animate-pulse">
                            <div className="h-8 w-32 bg-gray-300 rounded"></div>
                        </div>
                        <div className="w-full shadow-md border mt-4 flex flex-col justify-center items-start animate-pulse">
                            <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div>
                            <hr className="w-full" />
                            <ScrollArea className="h-72 w-full rounded-md border">
                           
                                {[...Array(5)].map((_, index) => (
                                    <div key={index} className="flex flex-row justify-start items-center shadow-xl border p-2 w-full">
                                        <div className="h-[80px] w-[80px] bg-gray-300 rounded-full"></div>
                                        <div className="flex flex-col justify-center items-start ml-4">
                                            <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                                            <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
                                            <div className="h-4 w-16 bg-gray-300 rounded"></div>
                                        </div>
                                    </div>
                                ))}
                             </ScrollArea>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default UserProfile















