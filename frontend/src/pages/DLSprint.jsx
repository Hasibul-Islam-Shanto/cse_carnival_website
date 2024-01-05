import React from 'react';
import Tab from '../components/Tab';
import { PrimaryButton } from '../components/Button';
import Banner from '../components/Banner';
import SponsoredBy from '../components/SponsoredBy';
import { DLSprintSponsor } from '../data/data';
import { DLSprintLeft, DLSprintRight } from '../data/vector';
import { QuickDetails } from '../components/Details';

const DLSprint = () => {
  const description = (
    <div className='flex flex-col px-4 gap-10'>
      <div className='flex flex-col gap-2 [&>*:nth-child(2)]:bg-slate-500'>
        <QuickDetails />
        <QuickDetails />
        <QuickDetails />
        <QuickDetails />
        <QuickDetails />
        <div className="h-11 px-5 py-2.5 bg-amber-600 bg-opacity-10 rounded-3xl border border-orange-600 border-opacity-50 backdrop-blur-2xl justify-start items-center gap-5 inline-flex">
          <div className="text-indigo-950 text-lg font-bold font-['Merriweather']">Platform:</div>
          <div className="text-indigo-950 text-lg font-semibold">Kaggle</div>
        </div>
        <div className="h-11 px-5 py-2.5 bg-slate-500 bg-opacity-10 rounded-3xl border border-slate-500 border-opacity-50 backdrop-blur-2xl justify-start items-center gap-5 inline-flex">
          <div className="text-indigo-950 text-lg font-bold font-['Merriweather']">Registration Fee : Free</div>
          <div className="text-indigo-950 text-lg font-semibold">15 january -1 february</div>
        </div>
        <div className="h-11 px-5 py-2.5 bg-amber-100 bg-opacity-50 rounded-3xl border border-amber-100 border-opacity-50 backdrop-blur-2xl justify-start items-center gap-5 inline-flex">
          <div className="text-indigo-950 text-lg font-bold font-['Merriweather']">Phase 1:</div>
          <div className="text-indigo-950 text-lg font-semibold">15 Jan - 15 Feb</div>
        </div>
        <div className="h-11 px-5 py-2.5 bg-amber-600 bg-opacity-10 rounded-3xl border border-orange-600 border-opacity-50 backdrop-blur-2xl justify-start items-center gap-5 inline-flex">
          <div className="text-indigo-950 text-lg font-bold font-['Merriweather']">Phase 2:</div>
          <div className="text-indigo-950 text-lg font-semibold">16 Feb</div>
        </div>
        <div className="h-11 px-5 py-2.5 bg-amber-600 bg-opacity-10 rounded-3xl border border-orange-600 border-opacity-50 backdrop-blur-2xl justify-start items-center gap-5 inline-flex">
          <div className="text-indigo-950 text-lg font-bold font-['Merriweather']">Prize :</div>
          <div className="text-indigo-950 text-lg font-semibold">TBA</div>
        </div>
      </div>
      <div className="px-5 py-2.5 bg-amber-100 bg-opacity-10 rounded-3xl border border-amber-100 border-opacity-50 backdrop-blur-xl flex-col justify-center items-start gap-[15px] inline-flex">
        <div className="text-indigo-950 text-2xl font-medium">🚀 Exciting News! 🚀</div>
        <div className="text-indigo-950 text-[17px] font-normal">🌐 Calling all AI enthusiasts and deep learning wizards! 🤖✨<br/>We are thrilled to announce the launch of a groundbreaking Deep Learning Competition: **"Bangladesh Road Object Detection for Autonomous Vehicles Challenge"** on Kaggle! 🇧🇩🚗</div>
      </div>
      <div className="px-5 py-2.5 bg-amber-100 bg-opacity-10 rounded-3xl border border-amber-100 border-opacity-50 backdrop-blur-xl flex-col justify-center items-start gap-[15px] inline-flex">
        <div className="text-indigo-950 text-2xl font-medium">🔍 Challenge Overview:</div>
        <div className="text-indigo-950 text-[17px] font-normal">Gear up for a cutting-edge competition where your skills in object detection will shape the future of autonomous vehicles on the roads of Bangladesh. Identifying Bangladeshi Vehicles in diverse road conditions of Bangladesh , this challenge aims to push the boundaries of AI in enhancing road safety and advancing autonomous driving technology.</div>
      </div>
      <div className="px-5 py-2.5 bg-amber-100 bg-opacity-10 rounded-3xl border border-amber-100 border-opacity-50 backdrop-blur-xl flex-col justify-center items-start gap-[15px] inline-flex">
        <div className="text-indigo-950 text-2xl font-medium">🏆 Prizes:</div>
        <div className="text-indigo-950 text-[17px] font-normal">Compete for incredible prizes, including cash rewards, Kaggle competition medals, and the chance to be recognized as a pioneer in the field of autonomous vehicle object detection.<br/><br/><br/>📅 Important Dates:</div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero excepturi natus eum illum molestias ipsum delectus similique laudantium quas! Minus commodi maxime numquam nostrum sit sed velit atque nihil.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias at eveniet commodi excepturi voluptas, cum officiis aliquam hic suscipit saepe itaque in nesciunt laboriosam dignissimos odit quos quaerat consequatur necessitatibus.
      </div>
      <div>
        <div className='font-bold underline pb-4'>
          Event Highlights
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero excepturi natus eum illum molestias ipsum delectus similique laudantium quas! Minus commodi maxime numquam nostrum sit sed velit atque nihil.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias at eveniet commodi excepturi voluptas, cum officiis aliquam hic suscipit saepe itaque in nesciunt laboriosam dignissimos odit quos quaerat consequatur necessitatibus.
      </div>
      <div>
        <span className='font-semibold'>Duration: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero excepturi natus eum illum molestias ipsum delectus similique laudantium quas! Minus commodi maxime numquam nostrum sit sed velit atque nihil.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias at eveniet commodi excepturi voluptas, cum officiis aliquam hic suscipit saepe itaque in nesciunt laboriosam dignissimos odit quos quaerat consequatur necessitatibus.
      </div>
      <div>
      <span className='font-semibold'>Team Requirements: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero excepturi natus eum illum molestias ipsum delectus similique laudantium quas! Minus commodi maxime numquam nostrum sit sed velit atque nihil.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias at eveniet commodi excepturi voluptas, cum officiis aliquam hic suscipit saepe itaque in nesciunt laboriosam dignissimos odit quos quaerat consequatur necessitatibus.
      </div>
      <div>
      <span className='font-semibold'>Registration Fee:: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero excepturi natus eum illum molestias ipsum delectus similique laudantium quas! Minus commodi maxime numquam nostrum sit sed velit atque nihil.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias at eveniet commodi excepturi voluptas, cum officiis aliquam hic suscipit saepe itaque in nesciunt laboriosam dignissimos odit quos quaerat consequatur necessitatibus.
      </div>
      <div className='font-bold'>Schedule:</div>
      <div className='font-semibold'>
        <div>Registration Deadline:</div>
        <div>Final Round:</div>
        <div>Prize Giving Ceremony:</div>
      </div>
      <div>
        For any queries, contact: <br/>
        Hasibul Islam Shanto - mdhasibulislam895@gmail.com
      </div>
        

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
