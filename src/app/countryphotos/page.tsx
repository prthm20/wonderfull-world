'use client';

import React, { useEffect, useState } from "react";
import { useSearchParams,useRouter } from "next/navigation";
import Image from "next/image";
import { PexelsQuery } from "../../components/ui/pexelsapi";
import Link from "next/link";

interface Photo {
  id: number;
  src: {
    medium: string;
  };
  photographer: string;
}

const Country = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const searchParams = useSearchParams();
  const query:any = searchParams.get('query') || '';

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        try {
          const data: any = await PexelsQuery(query);
          setPhotos(data.photos);
        } catch (error) {
          console.error("Error fetching photos:", error);
        }
      }
    };

    fetchData();
  }, [query]);
  const router = useRouter();
  const handleGoBack = () => {
    router.back(); // This function navigates back to the previous page
  };

  return (
    <main className="bg-slate-100 min-h-screen">
     <div>
  <h1 className="text-center text-4xl font-extrabold text-gray-800 opacity-90 py-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
    Images
  </h1>
</div>


      <div className="container mx-auto py-8">
        {photos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="p-2">
                <Image
                  src={photo.src.medium}
                  alt={photo.photographer}
                  height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            
                />
                <div className="mt-2 text-center">
              
                </div>
              </div>
            ))}
            <div className=" text-center">

            <button
             
              className="ml-4  mt-28 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleGoBack}
            >
              Go Back
            </button>
            
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-700 mt-10">
            No photos found for the query "{query}"
          </p>
        )}
      </div>
    </main>
  );
};

export default Country;
