import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import Link from 'next/link'
function Navbar() {
  return (
    <div>
         <nav>
        <ul className='flex px-40 py-5   text-lg font-bold'>
            <div className=' py-5 px-9'>
            <Avatar>
  <AvatarImage src="file:///C:/Users/pratham%20angdalwar/Downloads/travel-high-resolution-logo.svg" />
  <AvatarFallback>Travlog</AvatarFallback>
</Avatar>
            </div  >
            <div className=' flex px-60 text-slate-600 text-opacity-50'>
            <li className='py-5 px-5 hover:text-black'> <Link href={'/Home'}>Home</Link></li>
            <li className='py-5 px-5  hover:text-black'><Link href={'/Countryinfo'}>Countires</Link></li>
            <li className='py-5 px-5  hover:text-black'> <Link href={`/topdest?query=${encodeURIComponent("World")}`}>Destiantions</Link></li>
            <li className='py-5 px-5  hover:text-black'> <Link href={'/RoutePlan'}>PlanRoute</Link></li>
            <li className='py-5 px-5  hover:text-black'> <Link href={'/contact'}>Contact</Link></li>
            <li className='py-5 px-5  hover:text-black'><Link href={'/about'}>About</Link></li>

            <li className='py-5  px-10'>  <Link  className="px-6 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold" href={'/sign-up'}>Signup</Link></li>
          
            </div>
        </ul>
        <span>

            <div>

           
            </div>
        </span>
      </nav>
      
    </div>
  )
}

export default Navbar