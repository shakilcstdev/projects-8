import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router";
import BookingCard from "./BookingCard";
import BookingChart from "./BookingChart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllBookings = () => {
  const [allBookingLawyear, setAllBookingLawyear] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const allData = useLoaderData();

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    const localStorageLawyear = localStorage.getItem("lawyearList");
    if (localStorageLawyear && allData) {
      const localData = JSON.parse(localStorageLawyear);
      const lawyearList = allData.filter((lawyear) =>
        localData.includes(lawyear.license_number)
      );
      setAllBookingLawyear(lawyearList);
    }

    return () => clearTimeout(loadingTimer);
  }, [allData]);

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="my-12">
        {/* Chart display section */}
        {allBookingLawyear.length > 0 && (
          <BookingChart bookings={allBookingLawyear} />
        )}

        {allBookingLawyear.length > 0 ? (
          <>
            <h1 className="text-center font-[700] text-3xl md:text-[34px] text-[#0F0F0F]">
              My Today Appointments
            </h1>
            <p className="text-[#555555] font-[400] text-[16px] text-center mb-12 mt-4">
              Our platform connects you with verified, experienced Lawyers across
              various specialties — all at your convenience.
            </p>
            
            <div className="flex flex-col gap-12">
              {allBookingLawyear.map((lawyear, index) => (
                <BookingCard
                  key={index}
                  lawyear={lawyear}
                  setAllBookingLawyear={setAllBookingLawyear}
                  allBookingLawyear={allBookingLawyear}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16 px-4 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <div className="mb-6">
              <svg 
                className="w-20 h-20 mx-auto text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.5" 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              No Appointments Scheduled
            </h3>
            
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              You don't have any appointments scheduled for today. 
              Book an appointment with one of our experienced lawyers to get expert legal advice.
            </p>
            
            <Link 
              to="/"
              className="px-6 py-3 bg-[#0EA106] hover:bg-white hover:text-[#0EA106] text-white rounded-3xl border border-[#0EA106] font-[500] transition-all duration-300 inline-block"
            >
              Find a Lawyer
            </Link>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AllBookings;