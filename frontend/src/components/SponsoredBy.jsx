// SponsoredBy.js

import React from 'react';
import EventItem from './EventItem';

const SponsoredBy = () => {
  const events = [
    {
        name: "Re:cruit",
        description: "Description for Event 1. Lorem ijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj j j j j j j j j j j j j psum dolor sit amet, consectetur adipiscing elit.",
        image: "/Recruit.png",
    },
    {
        name: "Dynamic Solution Innovators",
        description: "Description for Event 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/DSI.png",
    }
  ]

  return (
    <div className="container mx-auto px-20 pb-8 pt-8 font-semibold">
      <h2 className="text-3xl font-bold text-center mb-6 text-title">SPONSORED BY</h2>

      {/* <div className="flex justify-center items-center space-x-8">
        <img src="/Event 1.jpg" alt="Sponsor 1" className="w-32 h-32" />
        <img src="/Event 1.jpg" alt="Sponsor 1" className="w-32 h-32" />
        <img src="/Event 1.jpg" alt="Sponsor 1" className="w-32 h-32" />
        <img src="/Event 2.jpg" alt="Sponsor 2" className="w-32 h-32" /> */}
        {/* Add more images as needed */}
      {/* </div> */}
        <EventItem event={events[0]} />
        <EventItem event={events[1]} />
      {/* <div className="flex odd:flex-row-reverse odd:justify-end items-center mb-8">
                <div className="flex-shrink-0">
                    <img src="/Event 1.jpg" alt="Event 1" className="" />
                </div>
                <div className="even:ml-8 odd:mr-8">
                    <h3 className="text-2xl font-bold md:mb-2 text-navbar">Re:cruit</h3>
                    <p className='text-navbar'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio iure quas ullam recusandae ex cum, ipsa aperiam reprehenderit cumque, quae eum ipsum. Distinctio expedita quis quos provident cum ea!</p>
                </div>
            </div> */}
    </div>
  );
};

export default SponsoredBy;
