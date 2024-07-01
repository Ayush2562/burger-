import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-4xl font-bold">Fiji Burger</a>
        <ul className="flex space-x-8">
          <li><a href="#" className="text-white hover:text-gray-200">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-200">About Us</a></li>
          <li><a href="#" className="text-white hover:text-gray-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
