"use client"
import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CompanySlider() {
   interface companyType {
    name:string,
    image:string,
    companylink:string
   }
  const heroImages=[ "/images/companycontainer.jpg", "/images/herofirst.jpg","/images/herosecond.jpg","/images/herothree.jpg"];
 
   const dataCompany:companyType[]=[
       {
        name:"esewa",
        image:"/images/company2.png",
         companylink:"https://esewa.com.np/#/home"

       },
       {
        name:"neem infosys",
        image:"/images/company3.png",
         companylink:"https://esewa.com.np/#/home"
         
       },
       {
        name:"Verisk",
        image:"/images/verisk.png",
         companylink:"https://esewa.com.np/#/home"
         
       }
      
   ]
   
  return (
    <Carousel className=" w-[98vw]  flex flex-col m-auto ">
      <div className=" gap-2 absolute flex  flex-col justify-around items-center m-auto top-10 z-10  right-[20vw] left-[20vw]">
                 <p className=" text-4xl  font-extrabold text-blue-600">Companies</p>
               <div className=" flex justify-around items-center gap-8 mt-4">
                   {
                    dataCompany.map((item,index)=>{
                        return(<div>
                               <div>
                                   <Image alt="company image" src={item.image} width={100} height={60} className="mt-4"  />
                             
                               </div>
                               
                        </div>)
                    })
                   }
           
               </div>
                
      </div>
      <CarouselContent>
        {heroImages.map((item, index) => (
          <CarouselItem  key={index}>
            <div className=" ">
                    
            <Image alt="image" src={`${item}`} width={500} height={200} className="w-[100%] flex object-right h-[300px]"></Image>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious  className=" absolute left-0 m-auto  text-blue-600"/>
      <CarouselNext className=" absolute right-0 m-auto  text-blue-600"/>
    </Carousel>
  )
}
