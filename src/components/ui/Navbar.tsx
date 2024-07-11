'use client'
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src="file:///C:/Users/pratham%20angdalwar/Downloads/travel-high-resolution-logo.svg" />
              <AvatarFallback>Travlog</AvatarFallback>
            </Avatar>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/Home" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link href="/Countryinfo" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Countries</Link>
            <Link href={`/topdest?query=${encodeURIComponent("World")}`} className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Destinations</Link>
            <Link href="/RoutePlan" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">PlanRoute</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            <Link href="/about" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link href="/sign-up" className="px-6 py-2 rounded-xl bg-black text-white text-xs font-bold">Signup</Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-200 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/Home" className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/Countryinfo" className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-base font-medium">Countries</Link>
            <Link href={`/topdest?query=${encodeURIComponent("World")}`} className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-base font-medium">Destinations</Link>
            <Link href="/RoutePlan" className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-base font-medium">PlanRoute</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <Link href="/about" className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/sign-up" className="block px-6 py-2 rounded-xl bg-black text-white text-xs font-bold">Signup</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
