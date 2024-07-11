'use client'
import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import {
  IconBrandGithub,
  IconBrandGoogle,
  Icon3dCubeSphere,
  IconBrandX,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconPhoneCall,
  IconLocation
} from "@tabler/icons-react";

const Foter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="md:flex justify-between items-center">
          {/* Left section */}
          <div className="mb-6 md:mb-0">
            <h5 className="font-bold text-lg mb-2">Quick Links</h5>
            <ul className="list-none">
              <li className="mb-1">
              <Link href={'/Home'}>Home</Link>
              </li>
              <li className="mb-1">
              <Link href={'/Countryinfo'}>Countires</Link>
              </li>
              <li className="mb-1">
              <Link href={'/about'}>About</Link>
              </li>
              <li className="mb-1">
              <Link href={'/contact'}>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Right section */}
          <div>
            <h5 className="font-bold text-lg mb-2">Contact Information</h5>
            <p className="mb-2">Pune,India</p>
            <p className="mb-2">aprathamm@gmail.com</p>
            <p className="mb-2">Phone: +91 7387198268</p>

            {/* Social icons */}
            <div className="flex space-x-4 mt-4">
              
              <Link href={"https://x.com/PrathamAngdlwar"}>< IconBrandX/></Link>
             
              
              <Link href={"https://www.instagram.com/prthm2004/"}><IconBrandInstagram/></Link>
              
               <Link href={"https://github.com/prthm20"}><IconBrandGithub/></Link>
             
            </div>
          </div> 
        </div>
      </div>
    </footer>
  );
};

export default Foter;
