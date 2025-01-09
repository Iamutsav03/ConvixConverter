import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-2xl font-semibold">
          <span>Your Logo</span> {/* Replace with your actual logo */}
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#faq" className="hover:text-gray-300">
            FAQ
          </a>
          <a href="#share" className="hover:text-gray-300">
            Share
          </a>
          <a href="#about" className="hover:text-gray-300">
            About Us
          </a>
        </div>

        {/* Get Started Button */}
        <div>
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
