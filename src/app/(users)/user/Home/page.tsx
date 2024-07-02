import React from 'react'

import TreandingJob from '../usercomponents/TreandingJob'
import { CompanySlider } from '../usercomponents/CompanySlider'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function UserHome() {
  return (
    <div className=' w-full h-full'>

      <div>
        <div className=' flex  flex-col items-center justify-center'>
          <div className=" gap-2 absolute flex  flex-col justify-around items-center m-auto top-30 z-10  right-[20vw] left-[20vw]">
            <p className=" text-4xl md:text-6xl lg:text-6xl  font-extrabold">land the <span className=" text-blue-600">Job</span> you <span className=" text-red-600">Love</span></p>
            <p className=" text-[18px] md:text-[24px] lg:text-[24px]">Your Next <span>Opportunities</span> Awaits Here !!</p>
            <Button className=" text-center self-center bg-blue-600">Explore More...</Button>
          </div>
          <Image alt="image" style={{}} src={"/images/jobslide1.jpg"} width={500} height={200} className="  m-auto w-[98vw] object-fill brightness-110 contrast-125 h-[80vh]"></Image>

          {/* <div className="absolute top-0 left-0 w-full h-[91vh] bg-gradient-to-b from-transparent to-black opacity-50"></div> */}
        </div>
      </div>
      {/* tranding job and search section are in same box below */}
      <TreandingJob />
      <CompanySlider />
    </div>
  )
}

export default UserHome
