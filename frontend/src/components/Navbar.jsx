import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-navbar p-1">
      <div className="container mx-auto flex justify-between items-center px-20">
        
        {/* Logo */}
        <div className="text-white font-bold text-lg md:mr-5">
          <img src={'/logo 1.png'} alt="Your Logo" className="h-20" />
        </div>

        {/* Navigation Links */}
        <div className="flex-grow flex flex-row md:justify-between mx-8 px-20">
          {navLinks.map((link, index) => (
            <NavLink key={index} label={link.label} />
          ))}
        </div>

        {/* Register Button */}
        <button className="bg-navbar-button text-navbar-link px-4 py-2 rounded-md hover:bg-navbar-button-hover">
          Register
        </button>
      </div>
    </nav>
  );
};

const NavLink = ({ label }) => {
  return (
    <a href="#" className="text-navbar-link border-2 border-transparent hover:border-b-2 hover:border-b-white pb-1 px-1 transition duration-300">
      {label}
    </a>
  );
};

const navLinks = [
  { label: 'Home' },
  { label: 'IUPC' },
  { label: 'Hackathon' },
  { label: 'Contact us' },
];

export default Navbar;
