'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/ui/Navbar'
import { ComboboxDemo } from '../../components/ui/combobox'
import { SessionProvider } from "next-auth/react";

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

    return (<>
            <SessionProvider>
            <Navbar />
            </SessionProvider>
        <div className='max-w-lg mx-auto mt-8 px-4 sm:px-6 lg:px-8'>

            <div className='flex flex-col items-center justify-center p-4 sm:p-10'>
                <div className='w-full max-w-xs sm:max-w-md p-4 sm:p-10 mb-5 sm:mb-10 mt-5 sm:mt-10 bg-white rounded-lg shadow-lg'>
                    <ComboboxDemo onSelectCountry={handleSelectCountry} />
                </div>
                <div className='mt-5 sm:mt-10'>
                    <button
                        type="submit"
                        className="w-full  bg-gradient-to-r  shadow-lg hover:bg-gradient-to-l transition-all duration-300  bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleSearchSubmit}
                        >
                        Search
                    </button>
                </div>
            </div>
        </div>
                        </>
    )
}

export default Page
