// SponsoredBy.js

import React from 'react';

const SponsoredBy = () => {
  return (
    <div className="container mx-auto px-20 pb-8 pt-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-title">SPONSORED BY</h2>

      <div className="flex justify-center items-center space-x-8">
        <img src="/Event 1.jpg" alt="Sponsor 1" className="w-32 h-32" />
        <img src="/Event 1.jpg" alt="Sponsor 1" className="w-32 h-32" />
        <img src="/Event 1.jpg" alt="Sponsor 1" className="w-32 h-32" />
        <img src="/Event 2.jpg" alt="Sponsor 2" className="w-32 h-32" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default SponsoredBy;
