'use client'
import React, { useState, useEffect } from 'react';
import run from '../Dest/page';
import { useSearchParams } from 'next/navigation';

interface TouristDestinationsProps {
  query: string;
}

const TouristDestinations: React.FC<TouristDestinationsProps> = () => {
  const [destinations, setDestinations] = useState("");
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

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Top 30 Tourist Destinations in India and their links</h1>
        
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
