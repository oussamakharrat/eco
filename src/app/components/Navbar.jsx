// components/Navbar.js
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = (page) => {
    return `transition duration-300 transform hover:scale-105 ${currentPage === page ? 'text-yellow-400 border-b-2 border-yellow-400' : 'hover:text-green-300'}`;
  };

  return (
    <nav className="bg-green-900 text-white shadow-lg transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wider transition-transform duration-300 transform hover:scale-105 hover:text-yellow-400">
          Green Essentials
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className={getLinkClass('/')}>Home</Link>
          <Link href="/about" className={getLinkClass('/about')}>About</Link>
          <Link href="/services" className={getLinkClass('/services')}>Services</Link>
          <Link href="/gallery" className={getLinkClass('/gallery')}>Gallery</Link>
          <Link href="/contact" className={getLinkClass('/contact')}>Contact</Link>
        </div>
        <button
          className="md:hidden text-white focus:outline-none transition-transform duration-300 transform hover:scale-105"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition duration-300 bg-green-800 rounded-lg shadow-lg`}>
        <div className="flex flex-col space-y-2 py-4 px-4">
          <Link href="/" className={`block p-3 rounded-lg transition duration-300 hover:bg-green-700 hover:text-green-300 ${currentPage === '/' ? 'text-yellow-400' : ''}`}>
            Home
          </Link>
          <Link href="/about" className={`block p-3 rounded-lg transition duration-300 hover:bg-green-700 hover:text-green-300 ${currentPage === '/about' ? 'text-yellow-400' : ''}`}>
            About
          </Link>
          <Link href="/services" className={`block p-3 rounded-lg transition duration-300 hover:bg-green-700 hover:text-green-300 ${currentPage === '/services' ? 'text-yellow-400' : ''}`}>
            Services
          </Link>
          <Link href="/gallery" className={`block p-3 rounded-lg transition duration-300 hover:bg-green-700 hover:text-green-300 ${currentPage === '/gallery' ? 'text-yellow-400' : ''}`}>
            Gallery
          </Link>
          <Link href="/contact" className={`block p-3 rounded-lg transition duration-300 hover:bg-green-700 hover:text-green-300 ${currentPage === '/contact' ? 'text-yellow-400' : ''}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
