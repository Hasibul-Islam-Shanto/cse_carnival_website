// Home.js

import React from 'react';
import Events from '../components/Events';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import SponsoredBy from '../components/SponsoredBy';
import { sponsors } from '../data/data';
import { HomeLeft, HomeLeft2, HomeRight, HomeRight2 } from '../data/vector';

const Home = () => {
  return (
    <div className='px-28'>
      <div className=''>
        <HomeLeft />
        <HomeLeft2 />
        <HomeRight />
        <HomeRight2 />

      </div>
      <div className=''>
        <Banner link="/image/banner/bannerHome.png" />
        <Events />
        <AboutUs />
        <SponsoredBy sponsors={sponsors} />
      </div>
    </div>
  );
};

export default Home;