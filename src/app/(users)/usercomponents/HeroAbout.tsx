"use client"
import React, {   } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroAbout() {
  const heroImages=["/images/herobg.png","/images/herofirst.jpg","/images/herosecond.jpg"];

 
  
   
  return (
    <Carousel className=" w-[100%]  flex flex-col ">
      <div className=" gap-2 absolute flex  flex-col justify-around items-center m-auto top-10 z-10  right-[20vw] left-[20vw]">
                 <p className=" text-xl md:text-6xl lg:text-6xl  font-extrabold">About us</p>
                 <p className=" text-[20px] md:text-[26px] lg:text-[26px]">Home  &gt; About us</p>
     
      </div>
      <CarouselContent>
        {heroImages.map((item, index) => (
          <CarouselItem  key={index}>
            <div className=" ">
                    
            <Image alt="image" src={`${item}`} width={500} height={200} className=" m-auto w-full flex object-right-top h-[200px]  md:h-[250px] lg:[250px] "></Image>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious  className=" absolute left-0 m-auto  text-blue-600"/>
      <CarouselNext className=" absolute right-0 m-auto  text-blue-600"/>
    </Carousel>
  )
}
