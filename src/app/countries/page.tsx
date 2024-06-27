'use client'
import React, { ChangeEvent, useState ,useEffect} from 'react'
import Country from '../countryphotos/page'
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
function page() {
    const[searchQuery,setsearchquery]=useState('');
    const router=useRouter()
    
    
    const handleSearchChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        
    setsearchquery(e.target.value)
    }
    const handleSearchSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    
       e.preventDefault();
       router.push(`/countryphotos?query=${encodeURIComponent(searchQuery)}`);
     
       console.log(searchQuery)
    
    }
    return (
        <>
       <Navbar></Navbar>
        <div className="max-w-lg mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore Travel Destinations</h1>
        
        <form onSubmit={handleSearchSubmit} className="mb-8">
          <div className="flex items-center bg-white rounded-lg shadow-md p-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for travel destinations..."
              className="flex-grow px-4 py-2 border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-neutral-700"
            />
            <button
              type="submit"
              className="ml-4 px-6 py-2  bg-neutral-700 text-white font-semibold rounded-r-lg hover:bg-gray-900"
            >
              Search
            </button>
          </div>
        </form>
      

    </div>
    </>
  )
}

export default page
