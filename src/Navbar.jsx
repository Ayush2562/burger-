import React from 'react';

function Navbar() {
  return (
    <div className="border-t border-gray-300">
      <div className="container mx-auto py-2 flex justify-center space-x-8">
        <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
        <a href="#menu" className="text-gray-700 hover:text-gray-900">Menu</a>
        <a href="#about" className="text-gray-700 hover:text-gray-900">About Us</a>
        <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
