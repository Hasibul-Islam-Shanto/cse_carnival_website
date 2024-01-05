import React from 'react';
import Tab from '../components/Tab';
import { PrimaryButton } from '../components/Button';
import Banner from '../components/Banner';
import SponsoredBy from '../components/SponsoredBy';
import { DLSprintSponsor } from '../data/data';
import { DLSprintLeft, DLSprintRight } from '../data/vector';
import { Details, QuickDetails } from '../components/Details';

const DLSprint = () => {
  const dlspringDescription = [
    {
      title: "Platform",
      value: "Kaggle"
    },
    {
      title: "Registration Fee",
      value: "Free"
    },
    {
      title: "Phase 1",
      value: "15 January - 15 February"
    },
    {
      title: "Phase 2",
      value: "16 February"
    },
    {
      title: "Prize",
      value: "TBA"
    },
  ];
  const detailedDescription = [
    {
      title: "🚀 Exciting News! 🚀",
      value: "🌐 Calling all AI enthusiasts and deep learning wizards! 🤖✨<br/>We are thrilled to announce the launch of a groundbreaking Deep Learning Competition: **\"Bangladesh Road Object Detection for Autonomous Vehicles Challenge\"** on Kaggle! 🇧🇩🚗"
    },
    {
      title: "🔍 Challenge Overview:",
      value: "Gear up for a cutting-edge competition where your skills in object detection will shape the future of autonomous vehicles on the roads of Bangladesh. Identifying Bangladeshi Vehicles in diverse road conditions of Bangladesh , this challenge aims to push the boundaries of AI in enhancing road safety and advancing autonomous driving technology."
    },
    {
      title: "🏆 Prizes:",
      value: "Compete for incredible prizes, including cash rewards, Kaggle competition medals, and the chance to be recognized as a pioneer in the field of autonomous vehicle object detection.<br/><br/><br/>📅 Important Dates:"
    }
  ];
  const description = (
    <div className='flex flex-col px-4 gap-10'>
      <div className='flex flex-col gap-2 '>
        <QuickDetails className="bg-amber-600 border-orange-600" description={dlspringDescription[0]}/>
        <QuickDetails className="bg-slate-500 border-slate-500" description={dlspringDescription[1]}/>
        <QuickDetails className="bg-amber-100 border-amber-100" description={dlspringDescription[2]}/>
        <QuickDetails className="bg-amber-600 border-orange-600" description={dlspringDescription[3]}/>
        <QuickDetails className="bg-amber-600 border-orange-600" description={dlspringDescription[4]}/>
      </div>
      <Details description={detailedDescription[0]}/>
      <Details description={detailedDescription[1]}/>
      <Details description={detailedDescription[2]}/>       
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
    <div className=''>
      <div className='z-0 relative'>
        <DLSprintLeft />
        <DLSprintRight />
      </div>
      <div className='text-navbar z-10 relative px-28'>
        <Banner link="/image/banner/bannerDLSprint.jpg" />
        <h2 className="text-4xl font-bold md:my-6 py-5 md:mx-64 text-navbar-button text-center bg-navbar-button bg-opacity-10 rounded-2xl border border-navbar-button border-opacity-30">Deep Learning Sprint</h2>
        <Tab child1={description} child2={announcment} child3={download} />
        <div className='py-10 w-full flex justify-center'>
          <PrimaryButton text='Register' />
        </div>
        <SponsoredBy list={"list"} sponsors={DLSprintSponsor}/>
      </div>
    </div>
  );
};

export default DLSprint;
