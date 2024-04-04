import * as React from "react"

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

export function HeroSlider() {
  
  return (
    <Carousel className=" w-[100%] m-auto   flex flex-col">
      <div className=" gap-2 absolute flex  flex-col justify-around items-center m-auto top-10 z-10  right-[20vw] left-[20vw]">
                 <p className=" text-xl md:text-6xl lg:text-6xl  font-extrabold">land the <span className=" text-blue-600">Job</span> you <span className=" text-red-600">Love</span></p>
                 <p className=" text-[10px] md:text-[24px] lg:text-[24px]">Your Next <span>Opportunities</span> Awaits Here !!</p>
                 <Button className=" bg-blue-600">Explore More...</Button>
      </div>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem  key={index}>
            <div className=" ">
                    
            <Image alt="image" src={"/images/herobg.png"} width={500} height={200} className=" m-auto w-full flex object-cover h-[200px]  md:h-[250px] lg:[250px] "></Image>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious  className=" absolute left-0 m-auto  text-blue-600"/>
      <CarouselNext className=" absolute right-0 m-auto  text-blue-600"/>
    </Carousel>
  )
}
