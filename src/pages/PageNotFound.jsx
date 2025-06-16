import React from 'react';
import { Link } from 'react-router';
import notFoundImage from '../assets/404.png';
import Navbar from '../components/Header/Navber';
// import Navbar from '../Components/Header/Navber';

const PageNotFound = () => {
  return (
    <>
      <div className="md:max-w-7xl w-[94%] mx-auto">
        <Navbar />
      </div>
      <div className="md:max-w-7xl w-[94%] mx-auto min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="text-center px-4">
          <div className="mb-8">
            <img
              src={notFoundImage}
              alt="404 Not Found"
              className="max-w-[400px] w-full mx-auto"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-[800] text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 md:w-[60%] mx-auto">
            Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="flex gap-4 justify-center">
            <Link 
              to="/"
              className="px-6 py-3 bg-[#0EA106] hover:bg-white hover:text-[#0EA106] text-white rounded-3xl border border-[#0EA106] font-[500] transition-all duration-300"
            >
              Back to Home
            </Link>
            <Link 
              to="/blogs"
              className="px-6 py-3 bg-white text-[#176AE5] hover:bg-[#176AE5] hover:text-white rounded-3xl border border-[#176AE5] font-[500] transition-all duration-300"
            >
              Read Our Blog
            </Link>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-[#0EA106]">
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a 
              href="mailto:rijoanmaruf@gmail.com" 
              className="text-[#0EA106] hover:underline"
            >
              rijoanmaruf@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;