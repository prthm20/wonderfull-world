import React from 'react'
import Navbar from '../../components/ui/Navbar'
import { InfiniteMovingCardsDemo } from '../../components/ui/Testimonials'
import Foter from '../../components/ui/Foter'
import { ThreeDCardDemo } from '../../components/ui/Category'
import { connect } from '../../dbconfig/dbconfig'
import Image from 'next/image'
import Link from 'next/link'
import { SessionProvider } from "next-auth/react";
 function pagee() {
  return (
    <div>
      <SessionProvider>

      <Navbar />
      </SessionProvider>
      <div className='p-4 sm:p-8 md:p-16 lg:p-28'>
        <Image 
          src="https://images.pexels.com/photos/3030268/pexels-photo-3030268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Beautiful landscape" 
          className='rounded-2xl' 
          width={1500} 
          height={1500} 
        />
      </div>
      <div className='text-center text-2xl font-bold font-sans opacity-70'>
        <h1>Categories</h1>
      </div>
      <div className='flex flex-wrap justify-center gap-3 p-2'>
        <ThreeDCardDemo 
          title="Religious" 
          sourc='https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          query='all religion all over world' 
        />
        <ThreeDCardDemo 
          title="Tourist" 
          sourc='https://images.pexels.com/photos/161183/thailand-monks-temple-tourism-161183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          query='Top tourist places' 
        />
        <ThreeDCardDemo 
          title="Nature" 
          sourc='https://images.pexels.com/photos/235731/pexels-photo-235731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          query='Nature' 
        />
        <ThreeDCardDemo 
          title="Wonders of world" 
          sourc='https://images.pexels.com/photos/10980106/pexels-photo-10980106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          query='wonders of world' 
        />
        <ThreeDCardDemo 
          title="Wonders of world" 
          sourc='https://images.pexels.com/photos/10980106/pexels-photo-10980106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          query='wonders of world' 
        />
        <ThreeDCardDemo 
          title="Wonders of world" 
          sourc='https://images.pexels.com/photos/10980106/pexels-photo-10980106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          query='wonders of world' 
        />
      </div>
      <div className='p-5'>
        <div className='text-center text-2xl font-bold font-sans opacity-70'>
          <h1>Popular Destinations</h1>
        </div>
        <InfiniteMovingCardsDemo />
      </div>
      <div>
        <Foter />
      </div>
    </div>
  )
}

export default pagee
