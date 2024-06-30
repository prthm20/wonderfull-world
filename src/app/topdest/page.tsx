'use client'
import React, { useState, useEffect, ChangeEvent } from 'react';
import run from '../Dest/page';
import { useRouter, useSearchParams } from 'next/navigation';
import { PexelsQuery } from '@/components/ui/pexelsapi';
import Image from 'next/image';
import turn from '../Dest/page2'
import Navbar from '@/components/ui/Navbar';

interface TouristDestinationsProps {
  query: string;
}
interface Photo {
  id: number;
  src: {
    medium: string;
    original: string;
  };
  photographer: string;
}

const TouristDestinations: React.FC<TouristDestinationsProps> = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [destinations, setDestinations] = useState("");
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const query: string = searchParams.get('query') || '';

  useEffect(() => {
    const fetchData = async (query: string) => {
      if (query) {
        try {
          const data = await run(query);
          setDestinations(data);
        } catch (error) {
          console.error("Error fetching destinations:", error);
        }
      }
    };

    fetchData(query);
  }, [query]);

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await PexelsQuery(searchQuery);
    setPhotos(data.photos);
    const textdata = await turn(searchQuery);
    setDestinations(textdata);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar></Navbar>
      <div className="max-w-lg mx-auto mt-8 p-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 pb-4">Explore Travel Destinations</h1>
        <form onSubmit={handleSearchSubmit} className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for travel destinations..."
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 text-white font-bold bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring-2 focus:ring-blue-300"
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
          <p className="text-center text-gray-700 mt-10"></p>
        )}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6"></h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          {destinations ? (
            <p className="text-gray-700">{destinations}</p>
          ) : (
            <p className="text-gray-700">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TouristDestinations;
