import Foter from '../../components/ui/Foter';
import Navbar from '../../components/ui/Navbar';
import {connect} from '../../dbconfig/dbconfig'
import UserModel from '../../model/User'
import React from 'react';
import { SessionProvider } from "next-auth/react";

async function AboutUsPage ()  {



  return (
    <>
   <div>
    <SessionProvider>

    <Navbar></Navbar>
    </SessionProvider>
   </div>
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto py-16 px-6 sm:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">About Travlog</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Welcome to travlog  We are passionate about exploring the world and bringing you detailed information about all the amazing travel destinations and countries to visit.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our mission is to inspire and empower travelers like you to discover new places, cultures, and experiences. Whether you are planning your next vacation or seeking travel inspiration, we are here to guide you every step of the way.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At our core, we believe in the transformative power of travel. It opens our minds, broadens our horizons, and connects us to the world in meaningful ways. We curate detailed travel guides, tips, and recommendations to ensure you have the best possible travel experience.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Thank you for joining us on this journey. We look forward to being your trusted companion in exploring the wonders of our beautiful planet.
          </p>
        </div>
      </div>
    </div>
    <div>
      <Foter></Foter>
    </div>
    </>
  );
};

export default AboutUsPage;
