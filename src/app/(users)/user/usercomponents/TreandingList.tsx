

"use client"
import React from 'react'
import { DataType } from './TreandingJob'
import { CardBody, CardContainer, CardItem } from "../../../components/ui/3d_card";
import Image from 'next/image';
import { BadgeDollarSign, Hourglass, LucideDollarSign, MapPinned, SquareLibrary } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

function TreandingList({ data }: any) {
    const { theme }: any = useTheme()
    const listdata: DataType[] = data;
    console.log(theme)
    const router = useRouter();
    return (

        <div>

            <div className={`  flex  cursor-pointer  flex-wrap  justify-center items-center  gap-4 my-10 `}>

                {
                    listdata.map((item, index) => {
                        return (
                            <div key={index} className={`relative  h-[350px] border ring-2 ring-inset ring-gray-400 hover:shadow-xl  mx-4 my-4 ${theme == "light" ? "bg-[#e6e9ec] hover:bg-gray-300 " : ""} p-4 w-[300px] shadow-md  `}>

                                <h1 className=' text-3xl text-center font-bold'>{item.category}</h1>
                                 {/* e6e9ec */}
                                <div className=' h-[2px] bg-gray-600 w-full mb-2'></div>
                                <Image alt='thumbinal' width={100} height={100} src={item.image} className='  w-[100px] h-[100px]  object-fill m-auto h' ></Image>
                                <span className=' flex  gap-2 my-2'> <MapPinned /> {item.location}</span>
                                <span className=' flex  gap-2 my-2'><BadgeDollarSign />{item.salary}</span>
                                <span className=' flex  gap-2 my-2'><Hourglass /> {item.working_hour}</span>
                                <div className=' flex justify-between m-auto'>
                                    <Button className=' bg-[#73bc87] h-[32px] absolute bottom-4 left-4 '>Apply Now</Button>
                                    <Button className=' bg-[#1983d1] h-[32px] absolute bottom-4 right-4 ' onClick={() => {
                                        router.push("/user/jobdetail/1");
                                    }}>Details</Button>
                                </div>
                                <span></span>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TreandingList
