import { HoverEffect } from '@/app/components/ui/card-hover-effect'
import { CircleCheckBig, Facebook, Link2, Star, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export  interface ourTeamType{
    name:string,
    image:string,
    contribute:string,
     flink:string,
     tlink:string,
     llink:string,
     rating:number
}
function OurTeams() {
  
    const ourTeamData:ourTeamType[]=[
        {
            name: "Deepa joshi",
            image: "/images/teams/deepa.jpg",
            contribute: "UI/UX Designer",
            flink: "https://www.facebook.com/deepa",
            tlink: "https://www.twitter.com/deepa",
            llink: "https://www.linkedin.com/deepa",
            rating: 100
        },
        {
            name: "Kalpana bhandari",
            image: "/images/teams/kalpana.jpg",
            contribute: "Frontend Developer",
            flink: "https://www.facebook.com/bikram_dhami",
            tlink: "https://www.twitter.com/bikram_dhami",
            llink: "https://www.linkedin.com/bikram_dhami",
            rating: 100
        },
        {
            name: "Bikram Dhami",
            image: "/images/teams/bikram.jpg",
            contribute: "Backend Developer",
            flink: "https://www.facebook.com/bikram_dhami",
            tlink: "https://www.twitter.com/bikram_dhami",
            llink: "https://www.linkedin.com/bikram_dhami",
            rating: 70
        },
        
        {
            name: "Saraswati",
            image: "/images/teams/saru.jpg",
            contribute: "Graphical Designer",
            flink: "https://www.facebook.com/saraswati",
            tlink: "https://www.twitter.com/saraswati",
            llink: "https://www.linkedin.com/saraswati",
            rating: 200
        },
        {
            name: "Menuka Bhatt",
            image: "/images/teams/menuks.jpg",
            contribute: "Frontend Developers",
            flink: "https://www.facebook.com/menuka_kalpana",
            tlink: "https://www.twitter.com/menuka_kalpana",
            llink: "https://www.linkedin.com/menuka_kalpana",
            rating: 100
        },

    ]
    return (
        <div>
            <div>
                <h1>Meet our Team</h1>
                <div>
                    <p>

                        The "Meet Our Team" section highlights the talented individuals behind the Job Milyo website. Deepa, our UI/UX Designer, ensures an intuitive user experience. Menuka and Kalpana, our Frontend Developers, create responsive and visually appealing web pages. Saraswati, our Graphical Designer, adds creative flair with stunning graphics. Bikram Dhami, our Backend Developer, keeps everything running smoothly behind the scenes. Together, our team is dedicated to delivering an exceptional user experience for job seekers.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto px-8">
                {/* <HoverEffect items= {ourTeamData} /> */}
             </div>
                <div className=' flex  flex-row flex-wrap gap-4  justify-center items-center shadow-md border p-2'>
                      {
                       ourTeamData.map((item,index)=>{
                        return (<div className='  flex flex-col shadow-lg border  w-[300px]  justify-center items-center h-[300px] gap-1 '>
                             <div className='' >
                                   <Image src={item.image} alt='our team' width={100}  height={100} className=' rounded-full  h-[100px]  w-[100px] hover:focus:'/>
                             </div>
                              <div>
                                 <div className=' flex flex-row gap-2 justify-center items-center'>
                                    <p>{item.name}</p>
                                    <CircleCheckBig />
                                    </div>
                                 {/* rating setup */}
                                 <div className=' flex  gap-2 flex-row justify-center items-center'>
                                      <div className='flex '>
                                      <Star/> <Star/> <Star/><Star/> <Star/> 
                                      </div>
                                     {item.rating}
                                 </div>
                                 <p className=' self-center text-center'>{item.contribute}</p>
                              </div>
                               <div className=' flex flex-row gap-2 justify-center items-center mt-3  '>
                                 <Link href={item.flink} className='  rounded-full h-[40px] self-center p-[6px] m-auto w-[40px] text-center shadow-md border hover:shadow-2xl hover:border'><Facebook/></Link>
                                 <Link href={item.tlink} className='  rounded-full h-[40px] self-center p-[6px] m-auto w-[40px] text-center shadow-md border hover:shadow-2xl hover:border' ><Twitter/></Link>
                                 <Link href={item.llink} className='  rounded-full h-[40px] self-center p-[6px] m-auto w-[40px] text-center shadow-md border hover:shadow-2xl hover:border' ><Link2/></Link>
                               </div>
                        </div>)
                       })
                      }
                </div>
            </div>
        </div>
    )
}

export default OurTeams
