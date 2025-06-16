import React from 'react';
import { Link } from 'react-router';
import notFoundImage from '../../assets/404.png';

const NoLawyerFound = ({ licenseId }) => {
  return (
    <div className="md:max-w-7xl w-[94%] mx-auto min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <img
            src={notFoundImage}
            alt="Lawyer Not Found"
            className="max-w-[300px] w-full mx-auto"
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-[800] text-gray-900 mb-4">
          No Lawyer Found
        </h1>
        
        <p className="text-gray-600 text-lg mb-4">
          We couldn't find any lawyer with the license number:
        </p>
        
        <div className="bg-[#FF00001A] text-red-600 py-2 px-4 rounded-lg inline-block font-mono mb-8">
          {licenseId}
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link 
            to="/"
            className="px-6 py-3 bg-[#0EA106] hover:bg-white hover:text-[#0EA106] text-white rounded-3xl border border-[#0EA106] font-[500] transition-all duration-300 w-full md:w-auto"
          >
            View All Lawyers
          </Link>
          <Link 
            to="/blogs"
            className="px-6 py-3 bg-white text-[#176AE5] hover:bg-[#176AE5] hover:text-white rounded-3xl border border-[#176AE5] font-[500] transition-all duration-300 w-full md:w-auto"
          >
            Read Legal Blogs
          </Link>
        </div>

        <div className="mt-8 text-gray-600">
          Need assistance? Contact our support:
          <a 
            href="mailto:rijoanmaruf@gmail.com" 
            className="text-[#0EA106] hover:underline ml-2"
          >
            rijoanmaruf@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoLawyerFound; 