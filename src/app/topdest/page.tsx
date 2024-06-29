'use client'
import React, { useState, useEffect } from 'react';

interface Place {
  name: string;
  lat: number;
  lon: number;
  kind: string;
}

const TouristDestinations: React.FC = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const apiKey = '5ae2e3f221c38a28845f05b692ee9de4bcc20611cb8e811b1ffb66f8';
  const lon_min = 68.17665; // Minimum longitude for India
  const lat_min = 7.96553; // Minimum latitude for India
  const lon_max = 97.40256; // Maximum longitude for India
  const lat_max = 35.5087; // Maximum latitude for India

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(
          `https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${lon_min}&lat_min=${lat_min}&lon_max=${lon_max}&lat_max=${lat_max}&kinds=cultural,natural&rate=3&limit=30&apikey=${apiKey}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const placesData: Place[] = data.features.map((place: any) => ({
          name: place.properties.name,
          
        }));
        setPlaces(placesData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [lon_min, lat_min, lon_max, lat_max, apiKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Top 30 Tourist Destinations in India</h1>
      <ul>
        {places.map((place, index) => (
          <li key={index}>
            <h2>{place.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TouristDestinations;
