import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-24 lg:h-28">
          <div className="flex items-center">
            <img
              src="https://i.imgur.com/XqHQNxb.png"
              alt="Elvis for Congress"
              className="h-20 w-auto md:h-24 lg:h-28"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
            <a href="#platform" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
              Platform
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
            <a
              href="#donate"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-semibold"
            >
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
            >
              About
            </a>
            <a
              href="#platform"
              className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
            >
              Platform
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
            >
              Contact
            </a>
            <a
              href="#donate"
              className="block px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md font-semibold text-center"
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;