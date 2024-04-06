"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from  "./index.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function SwiperSlider() {
    const heroImages=["/images/herofirst.jpg","/images/herosecond.jpg","/images/herothree.jpg"];
  return (
   <div className=' w-[98vw] h-[300px] flex justify-center items-center m-auto mt-0 '>
     <div className=" gap-2 absolute flex  flex-col justify-around items-center m-auto top-30 z-10  right-[20vw] left-[20vw]">
                 <p className=" text-xl md:text-6xl lg:text-6xl  font-extrabold">land the <span className=" text-blue-600">Job</span> you <span className=" text-red-600">Love</span></p>
                 <p className=" text-[10px] md:text-[24px] lg:text-[24px]">Your Next <span>Opportunities</span> Awaits Here !!</p>
        <Button className=" bg-blue-600">Explore More...</Button>
      </div>

      

      
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        style={style}
        modules={[Autoplay, Pagination, Navigation]}
        className={style?"one":"may"}
      >
        
             {heroImages.map((item, index) => (
                <SwiperSlide  key={index}>
                  <div className=" ">
                          
                  <Image alt="image" src={`${item}`} width={500} height={200} className=" m-auto w-[98vw] flex object-fill h-[300px] shadow-xl border  rounded-sm"></Image>
                  </div>
                </SwiperSlide>
              ))}
        
        
      </Swiper>
   </div>
  );
}
