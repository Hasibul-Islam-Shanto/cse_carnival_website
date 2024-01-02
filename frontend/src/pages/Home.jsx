// Home.js

import React from 'react';
import Navbar from '../components/Navbar';
import Events from '../components/Events';
import AboutUs from '../components/AboutUs';
import SponsoredBy from '../components/SponsoredBy';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Events/>
        <AboutUs/>
        <SponsoredBy/>
        <Footer/>
    </div>
  );
};

export default Home;