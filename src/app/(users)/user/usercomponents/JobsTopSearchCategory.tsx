import Image from 'next/image'
import React from 'react'

function JobsTopSearchCategory() {
    const JobsItems=[
        {
            name:"WEB DEVELOPMENT",
            image:"/images/jobsimages/webdevelopment.jpg",

        },
        {
            name:"QUALITY ASSURANCE ENGINEER",
            image:"/images/jobsimages/qualityassuranceengineer.jpg",
            
        },
        {
            name:"SOFTWARE INTEGRATION ENGINEER",
            image:"/images/jobsimages/softwareintegrationengineer.jpg",

        },
        {
            name:"DATA SCIENCE",
            image:"/images/jobsimages/datascience.jpg",
            
        },
        {
            name:"CONTENT CREATORS",
            image:"/images/jobsimages/contactcreators.jpg",

        },
        {
            name:"PROJECT MANAGEMENT",
            image:"/images/jobsimages/programmanagement.jpg",
            
        },
        {
            name:"VIDEO EDITING",
            image:"/images/jobsimages/videoediting.jpg",

        },
        {
            name:"DIGITAL MARKETING",
            image:"/images/jobsimages/digitalmarketing.jpg",
            
        }
    ]
  return (

    <div>
        <div className=' '> <h1 className=' text-center text-4xl underline font-bold '> Top Search Category</h1></div>
        <div className=' flex flex-wrap gap-10 justify-center items-center my-10 w-[90%] m-auto'>
             {
                JobsItems.map((item,index)=>{
                    return(<div className=' border w-[200px]  shadow-sm  hover:shadow-lg ring-2 ring-gray-400 rounded-md' key={index}>
                           <Image className=' w-[200px] h-[200px] ' alt='image' src={item.image} width={200} height={100}></Image>
                            
                    </div>)
                })
             }
        </div>
        <div className={` cursor-pointer h-[2px]  flex justify-center items-center  w-[100%] mb-10 bg-gray-400`}>
             <div className=' w-[25%] h-[30px] bg-gray-400 rounded-full text-center '> <div className=' text-sm text-center p-1'>Show more &darr;</div></div>
        </div>
    </div>
  )
}

export default JobsTopSearchCategory