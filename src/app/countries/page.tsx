'use client';

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { PexelsQuery } from "../../Apis/pexelsapi";
import Navbar from "../../components/ui/Navbar";
import { CountryQuery } from "../../components/ui/Countriees";
import TouristDestinations from "../topdest/page";

interface Photo {
  id: number;
  src: {
    medium: string;
    original: string;
  };
  photographer: string;
}

interface CountryDetails {
  name: { common: string };
  currencies: { [key: string]: { name: string; symbol: string } };
  languages: { [key: string]: string };
  capital: string[];
  population: number;
  car: { side: string };
  timezones: string[];
  flags: { png: string };
}

const Page: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [name, setName] = useState("");
  const [flag, setFlag] = useState("");
  const [capital, setCapital] = useState("");
  const [currency, setCurrency] = useState("");
  const [currencySymbol, setCurrencySymbol] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [population, setPopulation] = useState<number>();
  const [drive, setDriveSide] = useState("");
  const [timezones, setTimezones] = useState<string[]>([]);

  const searchParams = useSearchParams();
  const query: string = searchParams.get('query') || '';

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        try {
          const data = await PexelsQuery(query);
          setPhotos(data.photos);
        } catch (error) {
          console.error("Error fetching photos:", error);
        }
      }
    };

    const fetchCountry = async () => {
      if (query) {
        try {
          const country: CountryDetails[] = await CountryQuery(query);
          console.log(country);
          setName(country[0].name.common);

          const currencyData = country[0].currencies[Object.keys(country[0].currencies)[0]];
          setCurrency(currencyData.name);
          setCurrencySymbol(currencyData.symbol);

          const languageValues = Object.values(country[0].languages);
          setLanguages(languageValues);

          setCapital(country[0].capital[0]);
          setPopulation(country[0].population);
          setDriveSide(country[0].car.side);
          setTimezones(country[0].timezones);
          setFlag(country[0].flags.png);
        } catch (error) {
          console.error("Error fetching country details:", error);
        }
      }
    };

    fetchData();
    fetchCountry();
  }, [query]);

  const router = useRouter();
  const handleGoBack = () => {
    router.back(); // This function navigates back to the previous page
  };

  const destinationsFolder = () => {
    router.push(`/topdest?query=${encodeURIComponent(query)}`);
  };

  return (
    <main className="bg-indigo-100 min-h-screen">
      <Navbar />
      <div className="text-blue-900 text-5xl font-bold font-serif text-center mt-10 drop-shadow-lg">
        {name}
      </div>
      <div className="mt-8">
        <div className="flex flex-wrap justify-evenly items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 m-5">
            <div className="text-3xl font-bold mb-4">Flag :</div>
            <Image
              src={flag}
              alt="flag image"
              width={200}
              height={100}
              className="rounded-lg border border-black shadow-sm"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 text-3xl font-bold m-5">
            Capital : {capital}
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 text-3xl font-bold m-5">
            <div>Currency : {currency}</div>
            <div className="mt-2">{currencySymbol}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 text-3xl font-bold m-5">
            Languages : {languages.map((language) => (
              <div key={language} className="mt-2">{language}</div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 text-3xl font-bold m-5">
            Timezones : {timezones.map((zone) => (
              <div key={zone} className="mt-2">{zone}</div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 text-3xl font-bold m-5">
            Drive : {drive} hand Drive
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 text-3xl font-bold text-center m-5">
          Population : {population}
        </div>
      </div>
      <div>
        <h1 className="text-center mt-10 text-4xl font-extrabold text-gray-800 opacity-90 py-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text drop-shadow-lg">
          Images
        </h1>
      </div>
      <div className="container mx-auto py-8">
        {photos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="p-2">
                <Image
                  src={photo.src.original}
                  alt={photo.photographer}
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
                />
                <div className="mt-2 text-center text-gray-700">{photo.photographer}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-700 mt-10">
            No photos found.
          </p>
        )}
        <div className="text-center mt-6 h-10 mr-11">
          <button
            className="border w-full text-white font-extrabold bg-black py-3 px-6 rounded-md hover:bg-slate-600 transition-colors duration-300 transform hover:scale-105"
            onClick={handleGoBack}
          >
            Go Back
          </button>
        </div>
      </div>
      <div className="text-center mt-6">
        <button
          className="border w-full text-white font-extrabold bg-black py-3 px-6 rounded-md hover:bg-slate-600 transform transition-transform duration-300 hover:scale-105"
          onClick={destinationsFolder}
        >
          View Top Destinations
        </button>
      </div>
    </main>
  );
};

const Country = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page/>
  </Suspense>
);

export default Country;
