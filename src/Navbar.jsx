import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex-between items-center">
        {/* Navigation Links */}
        <ul className="flex ml-auto space-x-8">
          <li><a href="#" className="text-white hover:text-gray-200">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-200">Contact</a></li>
          <li><a href="#" className="text-white hover:text-gray-200">About Us</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
