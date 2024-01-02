// BodySection.js

import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
    return (
        <div className="container mx-auto px-20 pb-8 pt-4 bg-body">
            {/* <div className="flex justify-center mb-4 h-80">
                <img src="/banner.jpg" alt="banner" className="" />
            </div> */}
            <h2 className="text-3xl font-bold text-center mb-6 text-title">Events</h2>

            {/* First Item */}
            <div className="flex items-center mb-8">
                <div className="flex-shrink-0">
                    <img src="/Event 1.jpg" alt="Event 1" className="" />
                </div>
                <div className="ml-8 ">
                    <h3 className="text-2xl font-bold md:mb-2 text-navbar">IUPC</h3>
                    <p className='text-navbar'>Description for Event 1. Lorem ijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj j j j j j j j j j j j j psum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex mt-8 space-x-6">
                        <Link to={''}>
                        <button className="bg-navbar-button-hover text-navbar-link px-4 py-1 rounded-md ">
                            Register
                        </button>
                        </Link>
                        <Link to={'/iupc'}>
                            <button className="bg-navbar shadow-2xl text-navbar-link px-4 py-1 rounded-md ">
                                View Event
                            </button>
                        </Link>

                    </div>
                </div>
            </div>

            {/* Second Item */}
            <div className="flex items-center justify-end mb-8">
                <div className="mr-8">
                    <h3 className="font-bold text-2xl md:mb-2 text-navbar">Hackathon</h3>
                    <p className='text-navbar'>Description for Event 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex mt-8 space-x-6">
                    <Link to={''}>
                        <button className="bg-navbar-button-hover text-navbar-link px-4 py-1 rounded-md ">
                            Register
                        </button>
                        </Link>
                        <Link to={'/hackathon'}>
                            <button className="bg-navbar shadow-2xl text-navbar-link px-4 py-1 rounded-md ">
                                View Event
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <img src="/Event 2.jpg" alt="Event 2" className="" />
                </div>
            </div>

            {/* Third Item */}
            <div className="flex items-center mb-8">
                <div className="flex-shrink-0">
                    <img src="/Event 1.jpg" alt="Event 3" className="" />
                </div>
                <div className="ml-8 ">
                    <h3 className="text-2xl font-bold md:mb-2 text-navbar">DL Sprint</h3>
                    <p className='text-navbar'>Description for Event 4. Lorem ijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj j j j j j j j j j j j j psum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex mt-8 space-x-6">
                    <Link to={''}>
                        <button className="bg-navbar-button-hover text-navbar-link px-4 py-1 rounded-md ">
                            Register
                        </button>
                        </Link>
                        <Link to={'/dlsprint'}>
                            <button className="bg-navbar shadow-2xl text-navbar-link px-4 py-1 rounded-md ">
                                View Event
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Forth Item */}
            <div className="flex items-center justify-end mb-8">
                <div className="mr-8">
                    <h3 className="font-bold text-2xl md:mb-2 text-navbar">Code Battle</h3>
                    <p className='text-navbar'>Description for Event 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex mt-8 space-x-6">
                    <Link to={''}>
                        <button className="bg-navbar-button-hover text-navbar-link px-4 py-1 rounded-md ">
                            Register
                        </button>
                        </Link>
                        <Link to={'/codebattle'}>
                            <button className="bg-navbar shadow-2xl text-navbar-link px-4 py-1 rounded-md ">
                                View Event
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <img src="/Event 2.jpg" alt="Event 4" className="" />
                </div>
            </div>
        </div>


    );
};

export default Events;
