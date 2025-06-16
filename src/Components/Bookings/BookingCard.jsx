import React from "react";
import { toast } from "react-toastify";

const BookingCard = ({ lawyear, setAllBookingLawyear, allBookingLawyear }) => {
  const handleCancelButton = (license_number) => {
    // Update the UI by removing this lawyer
    const updatedBookingList = allBookingLawyear.filter(
      (item) => item.license_number !== license_number
    );
    setAllBookingLawyear(updatedBookingList);
    
    // Update localStorage
    const storedLayears = localStorage.getItem("lawyearList");
    if (storedLayears) {
      const storedLawyeasData = JSON.parse(storedLayears);
      const updatedStoredList = storedLawyeasData.filter(id => id !== license_number);
      localStorage.setItem('lawyearList', JSON.stringify(updatedStoredList));
      toast.success(`Appointment with ${lawyear.name} has been cancelled.`);
    }
  };
  
  return (
    <div className="flex flex-col border-2 border-gray-300 gap-2 p-4 md:p-6 rounded-xl">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-0">
        <div>
          <h2 className="text-[#0F0F0F] text-[18px] font-[700]">
            {lawyear.name}
          </h2>
          <p className="text-[16px] font-[600] text-gray-500">
            {lawyear.type}
          </p>
        </div>
        <div className="text-[16px] font-[600] text-gray-500 bg-gray-100 p-2 rounded-md md:bg-transparent md:p-0">
          Appointment Fee: <span className="text-[#0EA106]">{lawyear.consultation_fee} Taka</span>
        </div>
      </div>
      
      <div className="mt-2 flex items-center gap-2">
        <div className="bg-[#176AE51A] py-1 px-3 rounded-full">
          <span className="text-[#176AE5] text-sm">License: {lawyear.license_number}</span>
        </div>
        <div className="bg-[#09982F1A] py-1 px-3 rounded-full">
          <span className="text-[#09982F] text-sm">{lawyear.years_of_exp}+ Years</span>
        </div>
      </div>
      
      <hr className="border-t border-dashed border-gray-500 w-full my-4" />
      
      <button 
        onClick={() => handleCancelButton(lawyear.license_number)} 
        className="mt-2 w-full font-[500] text-[16px] px-[10px] py-2 bg-white hover:bg-[#FF0000] hover:text-white text-[#FF0000] rounded-3xl border-2 border-[#FF0000] cursor-pointer transition-colors duration-300"
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default BookingCard;