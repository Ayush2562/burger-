import React from 'react';

function BurgerCard({ title, cost, count, setCount, image }) {
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <img src={image} alt={title} className="mt-2 mb-4 rounded-lg" style={{ maxWidth: '100%', height: 'auto' }} />
      <p className="text-gray-600 mb-4">Cost per Burger: ${cost.toFixed(2)}</p>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
          onClick={decrement}
        >
          -
        </button>
        <span className="text-xl font-semibold">{count}</span>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default BurgerCard;
