import React from 'react';
import Tab from '../components/Tab';
import { PrimaryButton } from '../components/Button';
import Banner from '../components/Banner';
import SponsoredBy from '../components/SponsoredBy';
import { HackathonSponsor } from '../data/data';
import { HomeLeft } from '../data/vector';
import { Details, QuickDetails } from '../components/Details';
import { hackathonLongDescription, hackathonShortDescription } from '../data/eventDetails';

const Hackathon = () => {
  const description = (
    <div className='flex flex-col px-4 gap-10'>
      <div className='flex flex-col gap-2 '>
        <QuickDetails className="bg-amber-600 border-orange-600" description={hackathonShortDescription[0]}/>
        <QuickDetails className="bg-slate-500 border-slate-500" description={hackathonShortDescription[1]}/>
        <QuickDetails className="bg-amber-100 border-amber-100" description={hackathonShortDescription[2]}/>
        <QuickDetails className="bg-amber-600 border-orange-600" description={hackathonShortDescription[3]}/>
        <QuickDetails className="bg-amber-600 border-orange-600" description={hackathonShortDescription[4]}/>
      </div>
      {hackathonLongDescription.map((item) => (
        <Details key={item.title} description={item} />
      ))}
    </div>
  );
  const announcment = (
    <div>
      Announcements
    </div>
  );
  const download = (
    <div>
      Download Link
    </div>
  )
  return (
    <div className=' text-navbar px-28'>
      {/* <HomeLeft/> */}
      <Banner link="/image/banner/bannerHackathon.jpg"/>
      <h2 className="text-4xl font-bold md:my-6 py-5 md:mx-64 text-navbar-button text-center bg-navbar-button bg-opacity-10 rounded-2xl border border-navbar-button border-opacity-30">Hackathon</h2>
      <Tab child1={description} child2={announcment} child3={download} />
      <div className='py-10 w-full flex justify-center'>
        <PrimaryButton text='Register' />
      </div>
      <SponsoredBy list={"list"} sponsors={HackathonSponsor} />
    </div>
  );
};

export default Hackathon;
