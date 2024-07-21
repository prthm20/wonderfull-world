'use client'
import React, { useState, useEffect, ChangeEvent, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../../components/ui/Navbar';
import run from '../../Apis/Dest/page';
import turn from '../../Apis/Dest/page2';
import { PexelsQuery } from '../../Apis/pexelsapi';
import { SessionProvider } from "next-auth/react";


interface Photo {
  id: number;
  src: {
    medium: string;
    original: string;
  };
  photographer: string;
}

const Page = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [destinations, setDestinations] = useState("");
  const searchParams = useSearchParams();
  const [Recommendations, setRecommendations] = useState<string[] | undefined>([]);
  const query: string = searchParams.get('query') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        try {
          const Recommendation: any = await run(query);
          console.log(Recommendation);
          const arr = Recommendation.places;
          setRecommendations(arr);
        } catch (error) {
          console.error("Error fetching recommendations:", error);
        }
      }
    };

    fetchData();
  },[query]);

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await PexelsQuery(searchQuery);
    setPhotos(data.photos);
    const textdata = await turn(searchQuery);
    setDestinations(textdata);
  };
  const handleRecSubmit = async (place:string) => {
    setSearchQuery(place)
    const data = await PexelsQuery(place);
    setPhotos(data.photos);
    
   
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <SessionProvider>

      <Navbar />
      </SessionProvider>
      <div className="max-w-lg mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 pb-4">Explore Travel Destinations</h1>
        <form onSubmit={handleSearchSubmit} className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for travel destinations..."
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-4 sm:mt-0 w-full sm:w-auto px-4 py-2 text-white font-bold bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring-2 focus:ring-blue-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="container mx-auto py-8">
        {photos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="relative group">
                <Image
                  src={photo.src.original}
                  alt={photo.photographer}
                  height={500}
                  width={500}
                  className="object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-br-lg">
                  {photo.photographer}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-700 mt-10">No photos found</p>
        )}
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Travel Destinations</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
        {Recommendations ? (
            <div>
              <div className='text-center text-3xl p-3'>
                Suggestions
              </div>

              <div className="text-gray-700 flex-wrap lg:grid lg:grid-cols-3  justify-center sm:grid-cols-2 sm:grid sm:justify-evenly">
                {Recommendations.map((place, index) => (
                  <button key={index} 
                  onClick={()=>{
                    handleRecSubmit(place)
                  }

                  }
                  className="p-1 text-left border m-2 rounded-md border-black">
                    {place}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-gray-700 text-center">Loading recommendations...</div>
          )}
        </div>
      </div>
    </div>
  );
};


const TouristDestinations = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page/>
  </Suspense>
);



export default TouristDestinations;
