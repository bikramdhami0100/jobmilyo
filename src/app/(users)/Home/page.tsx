import React from 'react'

import SearchSection from '../usercomponents/SearchSection';
import TreandingJob from '../usercomponents/TreandingJob';
import { CompanySlider } from '../usercomponents/CompanySlider';
import SwiperSlider from '../usercomponents/SwiperSlider';

function Home() {
  
  return (
    <div>
      
       <SwiperSlider/>
      <SearchSection/>
      <TreandingJob/>
      <CompanySlider/>
    </div>
  )
}

export default Home;
