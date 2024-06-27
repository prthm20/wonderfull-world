'use client'
import React from 'react';

const Foter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="md:flex justify-between items-center">
          {/* Left section */}
          <div className="mb-6 md:mb-0">
            <h5 className="font-bold text-lg mb-2">Quick Links</h5>
            <ul className="list-none">
              <li className="mb-1">
                <a href="#" className="hover:text-gray-300">Home</a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-300">Countries</a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-300">About</a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-300">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Right section */}
          <div>
            <h5 className="font-bold text-lg mb-2">Contact Information</h5>
            <p className="mb-2">123 Street Name, City</p>
            <p className="mb-2">Email: contact@example.com</p>
            <p className="mb-2">Phone: +1234567890</p>

            {/* Social icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.976 3.854 9.071 8.75 9.923v-7.002H7.856V12h2.894V9.77c0-2.864 1.711-4.448 4.327-4.448 1.252 0 2.624.224 2.624.224v2.893h-1.478c-1.457 0-1.913.9-1.913 1.828V12h3.258l-.523 3.92h-2.735v7.003C18.146 21.072 22 16.977 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.976 3.854 9.071 8.75 9.923v-7.002H7.856V12h2.894V9.77c0-2.864 1.711-4.448 4.327-4.448 1.252 0 2.624.224 2.624.224v2.893h-1.478c-1.457 0-1.913.9-1.913 1.828V12h3.258l-.523 3.92h-2.735v7.003C18.146 21.072 22 16.977 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.976 3.854 9.071 8.75 9.923v-7.002H7.856V12h2.894V9.77c0-2.864 1.711-4.448 4.327-4.448 1.252 0 2.624.224 2.624.224v2.893h-1.478c-1.457 0-1.913.9-1.913 1.828V12h3.258l-.523 3.92h-2.735v7.003C18.146 21.072 22 16.977 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foter;
