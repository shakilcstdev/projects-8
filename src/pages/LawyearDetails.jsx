import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import LawyearProfileHero from "../Components/Lawyers/LawyearProfileHero";
import LawyearFullView from "../Components/LawService/LawyearFullView";
import NoLawyerFound from "../Components/Lawyers/NoLawyerFound";
import { addToStoreDB } from "../utility/addToDB";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LawyearDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  
  // Add error handling for data validation
  if (!Array.isArray(data)) {
    return (
      <div className="text-center py-8">Error: Failed to load lawyer data</div>
    );
  }

  const singleLawyear = data.find((lawyear) => lawyear.license_number === id);

  const handleBookAppinment = (id) => {
    const storeState = addToStoreDB(id);
    if(!storeState){
      toast.error(`Your Appointment with ${singleLawyear.name} is already schedule for Today.`)
      return;
    }
    else{
      toast.success(`Appointment with ${singleLawyear.name} booked successfully!`);
      setTimeout(() => {
        navigate('/bookings');
      }, 500);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }



  if (!singleLawyear) {
    return <NoLawyerFound licenseId={id} />;
  }

  return (
    <div>
      <LawyearProfileHero></LawyearProfileHero>
      <LawyearFullView singleLawyear={singleLawyear}></LawyearFullView>

      <div className=" my-12 p-8 rounded-xl border-2 border-gray-300 ">
        <div>
          <h1 className="text-center text-[22px] font-[600] ">
            Book an Appointment
          </h1>
          <hr className="border-t border-dashed border-gray-500 w-full my-4" />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <p className="text-[18px] font-[600] text-gray-600 ">
              Availability
            </p>
            <span className="text-[#09982F] text-[14px] bg-[#09982F1A] py-1 px-2 rounded-xl m-2">
              Lawyer Available Today
            </span>
          </div>
          <hr className="border-t border-dashed border-gray-500 w-full my-4" />
          <p className="text-[#FFA000] text-[15px] bg-[#FFA0001A] py-1 px-2 rounded-xl m-2">
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>
        </div>
        <button
          onClick={() => handleBookAppinment(singleLawyear.license_number)}
          className="mt-4 w-full font-[500] text-[16px] px-[10px] py-[5px] bg-[#0EA106] hover:bg-white hover:text-[#0EA106] text-white rounded-3xl border border-[#0EA106] cursor-pointer"
        >
          Book Appointment Now
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LawyearDetails;