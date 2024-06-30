import React from 'react';

function HeroBanner() {
  const heroBannerImg = 'src/images/logo.jpg'; // Path relative to the public directory

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroBannerImg})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold text-center z-10">Welcome to Fiji Burger Takeaways</h1>
      </div>
    </div>
  );
}

export default HeroBanner;
