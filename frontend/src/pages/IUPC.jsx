// IUPC.jsx
import React from 'react';
import Tab from '../components/Tab';
import { PrimaryButton } from '../components/Button';
import Banner from '../components/Banner';
import SponsoredBy from '../components/SponsoredBy';
import { IUPCSponsor } from '../data/data';
import { Details, QuickDetails } from '../components/Details';
import { IUPCLongDescription, IUPCShortDescription } from '../data/eventDetails';

const IUPC = () => {
  const description = (
    <div className='flex flex-col px-4 gap-10'>
      <div className='flex flex-col gap-2 '>
        <QuickDetails className="bg-amber-600 border-orange-600" description={IUPCShortDescription[0]}/>
        <QuickDetails className="bg-slate-500 border-slate-500" description={IUPCShortDescription[1]}/>
        <QuickDetails className="bg-amber-100 border-amber-100" description={IUPCShortDescription[2]}/>
        <QuickDetails className="bg-amber-600 border-orange-600" description={IUPCShortDescription[3]}/>
        <QuickDetails className="bg-amber-600 border-orange-600" description={IUPCShortDescription[4]}/>
      </div>
      {IUPCLongDescription.map((item) => (
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
      <Banner link="/image/banner/bannerIUPC.png" />
      <h2 className=" text-4xl font-bold md:my-6 py-5 md:mx-20  text-navbar-button text-center bg-navbar-button bg-opacity-10 rounded-2xl border border-navbar-button border-opacity-30">Inter University Programming Contest</h2>
      <Tab child1={description} child2={announcment} child3={download} />
      <div className='py-10 w-full flex justify-center'>
        <PrimaryButton text='Register' />
      </div>
      <SponsoredBy list={"list"} sponsors={IUPCSponsor}/>
    </div>
  );
};

export default IUPC;
