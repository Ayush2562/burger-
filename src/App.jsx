import React, { useState } from 'react';
import BurgerCard from './BurgerCard';
import chickenImg from '/src/images/chicken1.jpg'; 
import veggieImg from '/src/images/veggie1.jpg';


function App() {
  const [chickenCount, setChickenCount] = useState(0);
  const [veggieCount, setVeggieCount] = useState(0);

  const chickenCost = 10.50;
  const veggieCost = 8.00;

  const calculateTotalCost = () => {
    return (chickenCount * chickenCost) + (veggieCount * veggieCost);
  };

  const handleResetCounts = () => {
    setChickenCount(0);
    setVeggieCount(0);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      console.log('Calculate total cost');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4" onKeyDown={handleKeyDown}>
      <h1 className="text-4xl font-semibold mb-4">Fiji Burger Takeaways</h1>

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

      <div className="mt-8">
        <p className="text-xl font-semibold">Total Cost: ${calculateTotalCost().toFixed(2)}</p>
        <div className="mt-4 space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
            onClick={handleResetCounts}
          >
            Reset Counts
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg focus:outline-none"
            onClick={() => console.log('Calculate total cost')} 
          >
            Calculate Total Cost
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;