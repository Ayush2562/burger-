import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import BurgerCard from './BurgerCard';
import CeresoleCard from './CeresoleCard';
import Footer from './Footer'; 
import chickenImg from '/src/images/chicken new.jpg';
import veggieImg from '/src/images/veggie new.jpg';

function App() {
  const [chickenCount, setChickenCount] = useState(0);
  const [veggieCount, setVeggieCount] = useState(0);
  const [ceresoleCount, setCeresoleCount] = useState(0);
  const chickenCost = 10.50;
  const veggieCost = 8.50;

  const calculateTotalCost = () => {
    return (chickenCount * chickenCost) + (veggieCount * veggieCost) + (ceresoleCount * 12.00);
  };

  const handleResetCounts = () => {
    setChickenCount(0);
    setVeggieCount(0);
    setCeresoleCount(0);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative">
      <HeroBanner />
      <Navbar />
      <div className="container mx-auto p-4 flex-grow">
        <CeresoleCard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BurgerCard
            title="Chicken Burger"
            cost={chickenCost}
            count={chickenCount}
            setCount={setChickenCount}
            image={chickenImg}
          />
          <BurgerCard
            title="Vegetarian Burger"
            cost={veggieCost}
            count={veggieCount}
            setCount={setVeggieCount}
            image={veggieImg}
          />
        </div>
        <div className="mt-8 flex justify-end items-center space-x-4">
          <p className="text-xl font-semibold">Total Cost: ${calculateTotalCost().toFixed(2)}</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
            onClick={handleResetCounts}
          >
            Reset Counts
          </button>
        </div>
      </div>
      <div className="justify">
        <div className="float-right bottom-4 right-4 md:bottom-8 md:right-8 bg-white p-4 max-w-sm rounded-lg shadow-md w-80 m-4">
          <div className="order-details">
            <h2 className="text-xl font-semibold mb-4 text-center">Your Order Details</h2>
            <ul className="divide-y divide-gray-200">
              <li className="flex justify-between py-2">
                <span>Chicken Burger x {chickenCount}</span>
                <span>${(chickenCount * chickenCost).toFixed(2)}</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Veggie Burger x {veggieCount}</span>
                <span>${(veggieCount * veggieCost).toFixed(2)}</span>
              </li>
              <li className="flex justify-between py-2 font-semibold">
                <span>Total</span>
                <span>${calculateTotalCost().toFixed(2)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
