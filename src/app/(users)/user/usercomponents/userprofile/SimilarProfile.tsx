"use client"
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { IconEdit } from '@tabler/icons-react';
import axios from 'axios';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function SimilarProfile({ interestedFiels }: any) {
    console.log(interestedFiels)
    const [allUserData, setAllUserData] = useState<any>([]);

    interface OtherUserType {
        name: string,
        image: string,
        work: string,
        yearofexperience: string,

    }
    const router = useRouter()
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
    const HandlerOtherUser = (item: any) => {
        const userId = 1
        router.push(`/user/profile/${item}`);
    }
    const AllUserDataFetch = async () => {
        const send = (await axios.post("/api/alluser/", { interestedFiels: interestedFiels })).data;
        setAllUserData(send.data);
        console.log(send)
    }
    useEffect(() => {
        AllUserDataFetch();
    }, [])
    return allUserData&& (

        <div className='  mt-2  flex flex-col flex-wrap w-[100%] shadow-md border m-auto md:w-[19%] lg:w-[19%] justify-center items-start p-2 h-full'>
            <div className=' flex justify-center items-center h-[200px] shadow-lg border p-6 w-full'>
                <h1 className=' flex  gap-3'> Avertisement</h1>

            </div>
            <div className=' w-full shadow-md border mt-4 flex flex-col  justify-center items-start '>
                <h1>Similar Profiles</h1>
                <hr />
                <ScrollArea className="h-full  w-full rounded-md border">


                    {allUserData?.map((item: any, index: any) => (
                        <div onClick={() => {
                            HandlerOtherUser(item?.userId?._id)
                        }} key={index} className='flex flex-row justify-start border my-4  cursor-pointer w-full py-2 px-1'>
                            {/* {
                                item?.userId?.color.startsWith("#") ? (
                                    <div className='w-[80px] h-[80px] flex justify-center items-center  relative group'>
                                        <div style={{ backgroundColor: item.userId?.color }} className='flex justify-center items-center w-[80px] h-[80px]  rounded-full'>
                                            <div className='text-center'>{item?.userId?.fullName.charAt(0).toUpperCase()}</div>
                                        </div>

                                    </div>
                                ) : (
                                    <div className='w-[80px] h-[80px]   overflow-hidden rounded-full border '>
                                        <Image src={item?.userId?.color} alt={"profile image"} width={100} height={100} className='  object-fill p-2  cursor-pointer w-full h-full' />

                                </div>
                                )
                            } */}
                            {
    item?.userId?.color.startsWith("#") ? (
        <div className='w-[80px] h-[80px] flex justify-center items-center relative group'>
            <div style={{ backgroundColor: item.userId?.color }} className='flex justify-center items-center w-[80px] h-[80px] rounded-full'>
                <div className='text-center text-white'>{item?.userId?.fullName.charAt(0).toUpperCase()}</div>
            </div>
        </div>
    ) : (
        <div className='w-[80px] h-[80px] overflow-hidden rounded-full border'>
            <img
                src={item?.userId?.color}
                alt={"profile image"}
                width={80}
                height={80}
                className='object-cover cursor-pointer w-full h-full rounded-full'
            />
        </div>
    )
}

                            <div className='flex flex-col justify-center items-start ml-4  '>
                                <h1>{item?.userId?.fullName}</h1>
                                <p>{item.interestedFiels}</p>
                                {/* <p>{item.previouscompany?.map((item: any, index: any) => {
                                    <p>{item}</p>
                                })}</p> */}
                            </div>
                        </div>
                    ))}

                </ScrollArea>
            </div>
        </div>

    )
}

export default SimilarProfile