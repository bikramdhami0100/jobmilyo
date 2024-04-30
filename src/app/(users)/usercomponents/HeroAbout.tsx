"use client"
import React, { useRef, useState } from "react"

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
  const [typer,setTyper]=useState<any>("Home");
  const heroImages=["/images/jobslide1.jpg","/images/jobslide3.jpg"];
  const Myfun=(word:any)=>{
    let index:number=0;
  const interval=  setInterval(()=>{
         if(index<word.length){
           let newword=word[index]
       
             setTyper(newword)
              index++;
            
         }else{
            clearInterval(interval);
         }
    },2000)
  
    // clearInterval(interval)
    
}
Myfun(["About Us","Contact","Jobs","Documentation"]);
  
   
  return (
    <Carousel className=" w-[100%]  flex flex-col ">
      <div className=" gap-2 absolute flex  flex-col justify-around items-center m-auto top-[100px] z-10  right-[20vw] left-[20vw]">
                 <p className=" text-[44px] md:text-6xl lg:text-6xl  font-extrabold">About us</p>
                 <p className=" text-[20px] md:text-[26px] lg:text-[26px]">Home  &gt; <span className={`font-extrabold `}>{typer}</span></p>
      </div>
      <CarouselContent>
        {heroImages.map((item, index) => (
          <CarouselItem  key={index}>
            <div className=" ">
                    
            <Image alt="image" src={`${item}`} width={500} height={200} className=" m-auto w-full flex  object-right h-[300px]  "></Image>
            {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious  className=" absolute left-0 m-auto  text-blue-600"/>
      <CarouselNext className=" absolute right-0 m-auto  text-blue-600"/>
    </Carousel>
  )
}
