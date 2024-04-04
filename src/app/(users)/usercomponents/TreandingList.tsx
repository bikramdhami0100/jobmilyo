import React from 'react'
import { DataType } from './TreandingJob'
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d_card";
import Image from 'next/image';
import { BadgeDollarSign, Hourglass, MapPinned } from 'lucide-react';
import { Button } from '@/components/ui/button';

function TreandingList({ data }: any) {
    
    const listdata: DataType[] = data;
    
    return (

        <div>
            <h1 className=' animate-pulse underline decoration-blue-600  font-extrabold text-4xl text-center'> Trending Jobs in <span className=' text-blue-600 '>Job</span> <span className=' text-red-600 '>मिल्यो ?</span></h1>
        <div className=' flex  flex-wrap  justify-center items-center mb-3'>
          
            {
                listdata.map((item, index) => {
                    return (
                        <div key={index} >
                            <CardContainer className="inter-var w-[300px] h-[320px]  flex p-3 m-auto  ">
                                <CardBody className=" p-2  shadow-lg border  m-auto gap-2 ">
                                    <CardItem
                                        translateZ="50"
                                        className=' font-extrabold'
                                    >
                                        {item.category}
                                    </CardItem>
                                    <Image
                                        src={item.image}
                                        height="100"
                                        width="100"
                                        className="h-[200px]  w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />

                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-3 dark:text-neutral-300 flex gap-2"
                                    >
                                     <MapPinned /> {item.location}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-3 dark:text-neutral-300 flex gap-2"
                                    >
                                     <BadgeDollarSign /> {item.salary}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-3 dark:text-neutral-300 flex gap-2"
                                    >
                                     <Hourglass /> {item.working_hour}
                                    </CardItem>
                                     <div className=' flex justify-between m-auto'>
                                         <Button className=' bg-green-600 h-[32px] '>Apply Now</Button>
                                         <Button className=' bg-blue-600 h-[32px] '>Details</Button>
                                     </div>
                                </CardBody>
                            </CardContainer>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default TreandingList
