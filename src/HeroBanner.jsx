import React from 'react';
import heroBannerImg from '/src/images/logo2.jpg'; 

function HeroBanner() {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroBannerImg})`, height: 'calc(200vh - 190x)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Fiji Burger Takeaways</h1>
          <p className="text-2xl mb-8">Order your favorite burgers from any of our branches</p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-xl focus:outline-none">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
