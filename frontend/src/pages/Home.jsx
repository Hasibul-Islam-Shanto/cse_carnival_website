// Home.js

import React from 'react';
import Events from '../components/Events';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import SponsoredBy from '../components/SponsoredBy';
import { sponsors } from '../data/data';

const Home = () => {
  return (
    <div>
        <Banner link="/image/banner/bannerHome.png"/>
        <Events/>
        <AboutUs/>
        <SponsoredBy sponsors={sponsors}/>
    </div>
  );
};

export default Home;