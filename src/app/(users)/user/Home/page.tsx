import React from 'react'
import SwiperSlider from '../usercomponents/SwiperSlider'
import SearchSection from '../usercomponents/SearchSection'
import TreandingJob from '../usercomponents/TreandingJob'
import { CompanySlider } from '../usercomponents/CompanySlider'

function UserHome() {
  return (
    <div>
     <SwiperSlider/>
      <SearchSection/>
      <TreandingJob/>
      <CompanySlider/>
    </div>
  )
}

export default UserHome
