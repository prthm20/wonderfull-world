'use client'

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { PexelsQuery } from "../../components/ui/pexelsapi";
import Navbar from "../../components/ui/Navbar";
import { CountryQuery } from "../../components/ui/Countriees";

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

const Country = () => {
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

  return (
    <main className="bg-indigo-100 min-h-screen">
      <Navbar />
      <div className="text-blue-900 text-5xl font-bold font-serif text-center">
        {name}
      </div>
      <div>
        <div className="flex p-4 justify-evenly">
          <div className="flex bg-white p-4 rounded-md text-3xl font-mono font-bold text-center text-black m-5">
            <div className="mt-10">Flag :</div>
            <Image
              src={flag}
              alt="flag image"
              width={200}
              height={100}
              className="rounded-lg border ml-8 border-black shadow-sm shadow-slate-400 justify-center m-2"
            />
          </div>
          <div className="text-3xl bg-white p-4 rounded-md font-mono m-8 font-bold text-center text-black">
            Capital : {capital}
          </div>
        </div>
        <div className="flex p-4 justify-evenly">
          <div className="flex text-3xl bg-white p-4 rounded-md font-mono font-bold text-center text-black mt-8">
            <div>
              <div>Currency : {currency}</div>
              <div className="ml-8">{currencySymbol}</div>
            </div>
          </div>
          <div className="text-3xl bg-white p-4 rounded-md font-mono m-8 font-bold text-center text-black">
            Languages : {languages.map((language) => (
              <div key={language}>{language}</div>
            ))}
          </div>
        </div>
        <div className="flex p-4 justify-evenly">
          <div className="text-3xl bg-white p-4 rounded-md font-mono font-bold text-center text-black mt-8">
            Timezones : {timezones.map((zone) => (
              <div key={zone}>{zone}</div>
            ))}
          </div>
          <div className="text-3xl pl-12 bg-white p-4 rounded-md font-mono m-8 font-bold text-center text-black">
            Drive : {drive} hand Drive
          </div>
        </div>
        <div className="text-3xl bg-white p-4 rounded-md font-mono font-bold text-center text-black mt-8">
          Population : {population}
        </div>
      </div>
      <div>
        <h1 className="text-center mt-10 text-4xl font-extrabold text-gray-800 opacity-90 py-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
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
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
                <div className="mt-2 text-center"></div>
              </div>
            ))}
            <div className="text-center"></div>
          </div>
        ) : (
          <p className="text-center text-gray-700 mt-10">
            No photos found for the query "{query}"
          </p>
        )}
        <div className="text-center">
          <button
            className="text-center border w-100% text-black font-extrabold bg-violet-600 p-5 rounded-full border-stone-950 hover:bg-fuchsia-500"
            onClick={handleGoBack}
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
};

export default Country;
