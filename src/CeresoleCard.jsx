import React, { useState, useEffect } from 'react';
import ceresoleImg1 from '/src/images/new2.jpg';
import ceresoleImg2 from '/src/images/new7.jpg';
import ceresoleImg3 from '/src/images/new3.jpg';

function CeresoleCard() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ceresoleImages = [ceresoleImg1, ceresoleImg2, ceresoleImg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ceresoleImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const increment = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ceresoleImages.length);
  };

  const decrement = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + ceresoleImages.length) % ceresoleImages.length);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Burgers</h2>
      <div className="relative">
        <img
          src={ceresoleImages[currentImageIndex]}
          alt="Ceresole Burger"
          className="mt-2 mb-4 rounded-lg"
          style={{ height: '600px', width: 'auto', maxWidth: '100%' }}
        />
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full focus:outline-none"
            onClick={decrement}
          >
            &lt;
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full focus:outline-none"
            onClick={increment}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default CeresoleCard;
