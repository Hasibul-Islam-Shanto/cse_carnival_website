// Navbar.js

import React from 'react';
import { PrimaryButton } from './Button';


const Navbar = () => {
  return (
    <nav className="bg-navbar p-1 fixed w-full top-0 z-10">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center px-20">
        {/* Logo */}
        <div className="text-white font-bold text-lg md:mr-5">
          <img
            src={'/logo 1.png'}
            alt="Your Logo"
            className="h-20"
          />
        </div>
      {/* TODO underline current page */}
        {/* Navigation Links */}
        <div className="flex-grow flex flex-row md:justify-between mr-8 px-20">
          <a href="/" className="text-navbar-link hover:border-b pb-1 px-1">
            Home
          </a>
          <a href="/iupc" className="text-navbar-link hover:border-b pb-1 px-1">
            IUPC
          </a>
          <a href="/hackathon" className="text-navbar-link hover:border-b pb-1 px-1">
            Hackathon
          </a>
          <a href="/dlsprint" className="text-navbar-link hover:border-b pb-1 px-1">
            DL Sprint
          </a>
          <a href="/codebattle" className="text-navbar-link hover:border-b pb-1 px-1">
            Code Battle
          </a>
          <a href="/" className="text-navbar-link hover:border-b pb-1 px-1">
            Contact us
          </a>
        </div>

        {/* Register Button */}
        <PrimaryButton text="Register" />
        {/* <button className="bg-navbar-button text-navbar-link px-4 py-2 rounded-md hover:bg-navbar-button-hover shadow-md">
          Register
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;