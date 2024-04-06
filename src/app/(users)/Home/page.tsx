import React from 'react'
import { HeroSlider } from '../usercomponents/HeroSlider';
import SearchSection from '../usercomponents/SearchSection';
import TreandingJob from '../usercomponents/TreandingJob';
import { CompanySlider } from '../usercomponents/CompanySlider';
import SwiperSlider from '../usercomponents/SwiperSlider';

function Home() {
  return (
    <div>
      {/* <HeroSlider /> */}
       <SwiperSlider/>
      <SearchSection/>
      <TreandingJob/>
      <CompanySlider/>
    </div>
  )
}

export default Home;
