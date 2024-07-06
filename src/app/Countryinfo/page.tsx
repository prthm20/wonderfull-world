'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/ui/Navbar'
import { ComboboxDemo } from '../../components/ui/combobox'

function Page() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')
    
    const router = useRouter()

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>|any) => {
        e.preventDefault()
        const query = selectedCountry || searchQuery
        router.push(`/countries/?query=${encodeURIComponent(query)}`)
        console.log(query)
    }

    const handleSelectCountry = (country: string) => {
        setSelectedCountry(country)
    }

    return (
        <div className='min-h-screen bg-indigo-100'>
  <Navbar />
  <div className='flex flex-col items-center justify-center p-10'>
    <div className='w-full max-w-md p-10 mb-10 mt-10 bg-white rounded-lg shadow-lg'>
      <ComboboxDemo onSelectCountry={handleSelectCountry} />
    </div>
    <div className='mt-10 pt-2'>
      <button
        type="submit"
        className="text-center mt-6 text-white font-extrabold bg-fuchsia-500 p-5 rounded-full border-2 border-fuchsia-500 shadow-lg transform transition duration-300 ease-in-out hover:bg-violet-300 hover:text-black hover:scale-105 hover:border-violet-300"
        onClick={handleSearchSubmit}
      >
        Search
      </button>
    </div>
  </div>
</div>

    )
}

export default Page