'use client'
import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href={'/Home'}>
            <Avatar className='h-8 w-24'>
              <AvatarImage src="file:///C:/Users/pratham%20angdalwar/Downloads/travel-high-resolution-logo.svg" />
          <AvatarFallback className=' text-orange-300  bg-slate-600 rounded-none'>Travlog</AvatarFallback>
            </Avatar>
          </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/Home" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link href="/Countryinfo" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Countries</Link>
            <Link href={`/topdest?query=${encodeURIComponent("World")}`} className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Destinations</Link>
            <Link href="/RoutePlan" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">PlanRoute</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            <Link href="/about" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">About</Link>
            {session ? (
            <div>
              <button
              className='sm:py-2 p-3 lg:py-3 px-3  rounded-xl hover:bg-white hover:text-black hover:border-2 hover:border-black bg-black   text-white'
              onClick={() => signOut()
              
              }>Sign out</button>
            </div>
          ) : (
            <div>
              <Link href="/sign-up" >
                <button
                className='sm:py-2 p-3 lg: px-3  rounded-xl hover:bg-white hover:text-black hover:border-2 hover:border-black bg-black   text-white '
                >SignUp</button>
              </Link>
            </div>
          )}
        

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
          
           
          {session ? (
            <div>
              <button
              className='sm:py-2 p-3 lg:py-3 px-3  rounded-xl hover:bg-white hover:text-black hover:border-2 hover:border-black bg-black   text-white'
              onClick={() => signOut()
              
              }>Sign out</button>
            </div>
          ) : (
            <div>
              <Link href="/sign-up" >
                <button
                className='sm:py-2 p-3 lg: px-3  rounded-xl hover:bg-white hover:text-black hover:border-2 hover:border-black bg-black   text-white '
                >Signin</button>
              </Link>
            </div>
          )}
        
          
          
          
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
