import React from 'react'
import { HeroSlider } from '../usercomponents/HeroSlider';
import SearchSection from '../usercomponents/SearchSection';
import TreandingJob from '../usercomponents/TreandingJob';

function Home() {
  return (
    <div>
      <HeroSlider />
      <SearchSection/>
      <TreandingJob/>
    </div>
  )
}

export default Home;
