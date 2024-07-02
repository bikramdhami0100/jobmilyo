import Image from 'next/image'
import React from 'react'
import JobsTopSearchCategory from '../usercomponents/JobsTopSearchCategory'
import LatestJobOpenings from '../usercomponents/LatestJobOpenings'

function Jobs() {
  return (
    <div className=' border  m-2'>
      <div>
         <Image alt='image' src={"/images/jobsimages/hiring.jpg"} width={400} height={400}  className=' w-[90vw] m-auto my-5 h-[70vh]'></Image>
      </div>
      {/* top search category */}
        <div>
          <JobsTopSearchCategory/>
        </div>
      {/* latest job openings */}
      <div>
         <LatestJobOpenings/>
      </div>
    </div>
  )
}

export default Jobs
