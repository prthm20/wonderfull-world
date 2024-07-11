import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import Link from 'next/link'

function Navbar() {
  return (
    <div>
      <nav className="bg-white shadow">
        <ul className='flex flex-wrap justify-between items-center px-4 md:px-20 py-5 text-lg font-bold'>
          <div className='py-2 md:py-5'>
            <Avatar>
              <AvatarImage src="/path/to/your/image/travel-high-resolution-logo.svg" />
              <AvatarFallback>Travlog</AvatarFallback>
            </Avatar>
          </div>
          <div className='flex flex-col md:flex-row text-slate-600 text-opacity-50'>
            <li className='py-2 md:py-5 px-3 md:px-5 hover:text-black'>
              <Link href={'/Home'}>Home</Link>
            </li>
            <li className='py-2 md:py-5 px-3 md:px-5 hover:text-black'>
              <Link href={'/Countryinfo'}>Countries</Link>
            </li>
            <li className='py-2 md:py-5 px-3 md:px-5 hover:text-black'>
              <Link href={`/topdest?query=${encodeURIComponent("World")}`}>Destinations</Link>
            </li>
            <li className='py-2 md:py-5 px-3 md:px-5 hover:text-black'>
              <Link href={'/RoutePlan'}>Plan Route</Link>
            </li>
            <li className='py-2 md:py-5 px-3 md:px-5 hover:text-black'>
              <Link href={'/contact'}>Contact</Link>
            </li>
            <li className='py-2 md:py-5 px-3 md:px-5 hover:text-black'>
              <Link href={'/about'}>About</Link>
            </li>
            <li className='py-2 md:py-5 px-3 md:px-10'>
              <Link className="px-6 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold" href={'/sign-up'}>
                Signup
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
