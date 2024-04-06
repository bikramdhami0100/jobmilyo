import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import { GlobeDemo } from '../usercomponents/GlobeDemo'
import { Button } from '@/components/ui/button'
function Contact() {
  return (
    <div>
      <div>
      
        <div className=' w-[98%] flex  flex-row flex-wrap m-auto justify-around items-center  p-4 h-full'>
        <div className=' w-screen absolute -z-10'>
            {/* <GlobeDemo/> */}
        </div>
          {/* message section */}
          <div className=' flex flex-col justify-center items-center border w-full md:w-[40%] lg:w-[40%] h-full' >
            <h1>Contact <span className=' text-blue-600'>Us</span></h1>
            <div className=' flex flex-col  gap-2 p-2  w-[70%] '>
              <Input placeholder='Name'></Input>
              <Input placeholder='Email'></Input>
              <Textarea rows={8} placeholder='Message'></Textarea>
              <Button className=" bg-transparent text-black-600  font-extrabold text-2xl hover:bg-blue-600">Submit</Button>
            </div>
          </div>
          {/* image section */}
          <div>
            <Image src={"/images/contactone.png"} alt="contact image" width={400} height={400} className=' w-[100%] h-[100%] ' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
