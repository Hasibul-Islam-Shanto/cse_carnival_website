// CodeBattle.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import SponsoredBy from '../components/SponsoredBy';
import Footer from '../components/Footer';

const CodeBattle = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      //body
      <SponsoredBy/>
      <Footer/>
    </div>
  );
};

export default CodeBattle;
