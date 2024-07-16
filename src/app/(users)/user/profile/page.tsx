"use client"
import { Button } from '@/components/ui/button';
import { IconArrowBack, IconArrowBackUp, IconCalendarTime, IconCircleCheckFilled, IconEdit, IconEditCircle, IconEyeStar, IconPhoneCall, IconPhotoEdit, IconSignRightFilled, IconStar, IconStarFilled, IconStarOff, IconUpload } from '@tabler/icons-react';
import { ArrowLeft, ArrowRightLeft, Bookmark, Loader, PencilLine, Phone, Plus, Rocket, SendHorizonal, Share, Star } from 'lucide-react';
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
    DialogClose,
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
import {
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    FacebookShareCount,
    GabShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterIcon,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share";

import html2canvas from 'html2canvas';
const FileSaver = require("file-saver");
import { Input } from '@/components/ui/input';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import { zIndex } from 'html2canvas/dist/types/css/property-descriptors/z-index';
import { BackpackIcon, Share1Icon } from '@radix-ui/react-icons';
import SimilarProfile from '../usercomponents/userprofile/SimilarProfile';
function UserProfile() {
    const session = useSession()
    const router = useRouter();
    const [editProfile,setEditProfile]=useState<any>([
        {
            fullName:"",
            color:""
        }
    ]);
    const [editProfileLoader,setEditProfileLoader]=useState(false)
    const [skillloader, setSkillLoader] = useState(false)
    const [isDownloading, setIsDownloading] = useState(false);
    const [rating, setRating] = useState(4);
    const [shareUrl, setShareUrl] = useState<any>()
    const [signup, setSignUp] = useState<any>();
    const [userInformation, setuserInformation] = useState<any>([]);
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
        // console.log('Upload Success:', result);
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
        uploadCV: string,
        skills: string[]

    }

    // console.log("user information ", userInformation[0]?.skills)
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
        work: userInformation[0]?.interestedFiels || "Graphic Designer",
        skills: userInformation[0]?.skills || ["JavaScript", "HTML", "CSS", "python"],
        basicInformation: [{
            age: 22,
            yearOfExperience: "4 years",
            phone: userInformation[0]?.phone || "98000000000",
            ctc: "$ 40/hr",
            location: userInformation[0]?.CurrentAddress || "mahendranagar",
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
    const shareProfile = async () => {
        const data = await navigator.clipboard.writeText(window.location.href);
        const readdata = await navigator.clipboard.readText();
        console.log(readdata)
        setShareUrl(readdata)
    }
    console.log(shareUrl)
    const skillUpdate = async () => {
        setSkillLoader(true)
        // console.log("all ", allSkill)
        axios.post('/api/profiledata/skillupdate', allSkill)
            .then(function (response) {
                console.log(response.data);
                setSkillLoader(false)
                router.push("/user/profile")
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
    const HandlerOtherUser = (item: any) => {
        const userId = 1
        router.push(`/user/profile/${userId}`);
    }
    // console.log(userInformation)
    const HandleEditProfile = (e: any) => {
        const { name, value } = e.target;
        console.log(name, value)

    }
    return (
        <div>
            {/*  back button and share profile */}
            <div className=' flex items-center justify-between m-auto p-4'>
                <span onClick={() => {
                    router.back()
                }} className='  cursor-pointer flex justify-center items-center gap-1 text-sm'>  <ArrowLeft /> back</span>
                <Dialog>
                    <DialogTrigger onClick={shareProfile}>
                        <span
                            // onClick={shareProfile}
                            className="cursor-pointer flex justify-center items-center gap-1 text-sm"
                        >
                            <Share1Icon /> share profile
                        </span>
                    </DialogTrigger>
                    <DialogContent className="text-black bg-gray-300">
                        <DialogHeader>
                            <DialogTitle>share in your post</DialogTitle>
                            <DialogDescription className=' text-black '>
                                <div className=' text-start font-bold gap-2 m-1 '>
                                    share
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Input
                                        type="text"
                                        defaultValue={shareUrl}
                                        // readOnly
                                        placeholder={shareUrl}
                                        className="p-2 border  text-black rounded w-full"
                                    />
                                    <div className=' flex gap-2 items-center justify-center'>
                                        {
                                            shareUrl && <FacebookShareButton url={`${shareUrl}`}>
                                                <FacebookIcon size={40} round={true}></FacebookIcon>
                                            </FacebookShareButton>
                                        }
                                        {
                                            shareUrl && <LinkedinShareButton url={`${shareUrl}`}>
                                                <LinkedinIcon size={40} round={true} />
                                            </LinkedinShareButton>
                                        }
                                        {
                                            shareUrl && <TwitterShareButton url={`${shareUrl}`}>
                                                <Image alt='image' src={"/images/social/twitter.png"} width={40} height={4} className=' rounded-full'></Image>
                                            </TwitterShareButton>
                                        }
                                    </div>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>
            {/* main part */}
            <div className='flex bg-[] flex-row flex-wrap justify-center items-start '>
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
                                                        {/* <IconEdit
                                                            className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'
                                                            onClick={handleIconEditClick}
                                                        /> */}
                                                        {/* {showUploadButton && (
                                                            <CldUploadButton
                                                                className='absolute top-8 bg-green-600 left-0 w-full text-left border-2 p-1 rounded-md'
                                                                uploadPreset="wyyzhuyo"
                                                                onSuccess={handleUploadSuccess}
                                                            />
                                                        )} */}
                                                        <Dialog>
                                                            <DialogTrigger>  <IconEdit
                                                                className='absolute  right-2 top-2  mt-4 opacity-0 hover:visible group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'
                                                                onClick={handleIconEditClick}
                                                            /></DialogTrigger>
                                                            <DialogContent>
                                                                <DialogHeader>
                                                                    <DialogTitle>Edit profile</DialogTitle>
                                                                    <DialogDescription>
                                                                        <div className=' flex flex-col  m-auto  items-center'>
                                                                            <p className=' text-start self-start  ml-[10%]  my-1'>Full Name</p>
                                                                            <Input name='fullName' defaultValue={signup?.fullName} onChange={HandleEditProfile} type='text' className=' w-[80%]'></Input>

                                                                        </div>
                                                                        {/* <div className=' flex flex-col  m-auto  items-center'>
                                                                            <p className=' text-start self-start  ml-[10%]  my-1'>Email</p>
                                                                            <Input name='email' defaultValue={signup?.email} onChange={HandleEditProfile} type='text' className=' w-[80%]'></Input>

                                                                        </div> */}
                                                                        <div className=' flex flex-col  m-auto    mx-[10%]'>
                                                                            <p className=' text-start self-start   my-1'>Image</p>
                                                                            {/* <Input name='email' defaultValue={signup?.email} onChange={HandleEditProfile} type='text' className=' w-[80%]'></Input> */}
                                                                            {/* <Loader className=' self-center animate-spin'/> */}
                                                                            {/* <CldUploadButton
                                                                                className='  text-start bg-blue-700 p-2 rounded-lg '
                                                                                
                                                                                uploadPreset="wyyzhuyo"
                                                                                onSuccess={handleUploadSuccess}
                                                                            /> */}
                                                                              <CldUploadButton
                                                                className='absolute top-8 bg-green-600 left-0 w-full text-left border-2 p-1 rounded-md'
                                                                uploadPreset="wyyzhuyo"
                                                                onSuccess={handleUploadSuccess}
                                                            />
                                                                        </div>
                                                                    </DialogDescription>
                                                                </DialogHeader>
                                                            </DialogContent>
                                                        </Dialog>

                                                    </div>
                                                ) : (
                                                    <div className='relative group  m-auto w-[120px] h-[120px] p-3 overflow-hidden rounded-full  border '>
                                                        <Image src={signup?.color} alt={"profile image"} width={100} height={100} className='rounded-full absolute left-1 right-1 top-1  p-2 m-auto  object-fill overflow-visible cursor-pointer h-full w-full' />

                                                        {/* {showUploadButton && (
                                                            <CldUploadButton
                                                               className='absolute  top-12 left-0 w-full text-left border-2 p-1 rounded-md'
                                                                uploadPreset="wyyzhuyo"
                                                                onSuccess={handleUploadSuccess}
                                                            /> 
                                                        )} */}
                                                        <Dialog>
                                                            <DialogTrigger>  <IconEdit
                                                                className='absolute  right-2 top-2  mt-4 opacity-0 hover:visible group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'
                                                                onClick={handleIconEditClick}
                                                            /></DialogTrigger>
                                                            <DialogContent>
                                                                <DialogHeader>
                                                                    <DialogTitle>Edit profile</DialogTitle>
                                                                    <DialogDescription>
                                                                        This action cannot be undone. This will permanently delete your account
                                                                        and remove your data from our servers.
                                                                    </DialogDescription>
                                                                </DialogHeader>
                                                            </DialogContent>
                                                        </Dialog>

                                                    </div>
                                                )


                                            }
                                            <Dialog>
                                                <DialogTrigger>  <IconEdit
                                                    className='absolute  right-2 top-2  mt-4 opacity-0 hover:visible group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'
                                                    onClick={handleIconEditClick}
                                                /></DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Edit profile</DialogTitle>
                                                        <DialogDescription>
                                                            This action cannot be undone. This will permanently delete your account
                                                            and remove your data from our servers.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                </DialogContent>
                                            </Dialog>

                                        </div>
                                    </div>
                                }

                                <p className=' flex gap-1 '>{signup?.fullName} <IconCircleCheckFilled className=' text-blue-700' /> </p>
                                <div className='cursor-pointer flex gap-2'>
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
                                    {/* <p>{signup?.email}</p> */}
                                    <div className='flex gap-3 text-sm text-green-600 cursor-pointer'>

                                        <p>{userItem.salary}</p>
                                    </div>
                                </div>

                                <h1>{userItem.work}</h1>
                                <div className='flex'>
                                    <Input className='rounded-r-none' placeholder='Message' />
                                    <Button onClick={() => {

                                    }} className='rounded-l-none gap-2 bg-green-600'>Send <SendHorizonal /></Button>
                                </div>
                            </div>
                            <hr />
                            {/* add skill */}
                            <div className=' flex   justify-center items-center '>Skills
                                <Dialog  >
                                    <DialogTrigger asChild>
                                        <Button variant="outline" className=' border-none hover:bg-auto'><IconEdit /></Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px] bg-gray-200 text-black">
                                        <DialogHeader>
                                            <DialogTitle className=' border-none shadow-none rounded-none decoration-black'>Edit Skills</DialogTitle>
                                            <DialogDescription>

                                            </DialogDescription>
                                        </DialogHeader>
                                        <div>

                                        </div>
                                        <div className=" w-full flex flex-col justify-center items-start  ">
                                            <h1>Add Skills</h1>
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
                                            <ScrollArea className="h-[100px] w-full rounded-md border-[2px]">
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

                                            <Button disabled={skillloader} onClick={() => {
                                                skillUpdate()
                                            }} type="submit">
                                                <DialogClose>
                                                    {skillloader && <Loader className=' animate-spin  mr-2' />} Save changes

                                                </DialogClose>
                                            </Button>

                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                            {/* show skill */}
                            <div>
                                <div className='flex gap-2 flex-wrap items-center justify-center'>
                                    {
                                        userItem.skills.map((item: any, index: any) => (
                                            <div key={index} className='border flex items-center m-auto  justify-center p-2 rounded-3xl w-[90px] text-ellipsis   text-center'>
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
                                            }} className=' bg-blue-600'> {isDownloading && <Loader className=' animate-spin' />}Download CV</Button>
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
                    signup ? (<SimilarProfile interestedFiels={userInformation[0]?.interestedFiels} />) : (<div className="mt-2 flex flex-col flex-wrap w-[100%] shadow-md border m-auto md:w-[19%] lg:w-[19%] justify-center items-start p-2">
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
        </div >
    )
}

export default UserProfile















