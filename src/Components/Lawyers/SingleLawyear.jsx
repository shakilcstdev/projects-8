import React from "react";
import { Link } from "react-router";

const SingleLawyear = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-10 p-4 rounded-xl border border-gray-300">
      <div>
        <img
          className="w-[160px] h-[160px] object-cover  rounded-2xl object-top"
          src={data.image_link}
          alt=""
        />
      </div>
      <div className=" col-span-2 flex flex-col justify-center ">
        <div className="flex gap-2">
          <span className="text-[#09982F] text-[12px] bg-[#09982F1A] py-1 px-2 rounded-xl">
            Available
          </span>
          <span className="text-[#176AE5] text-[12px] bg-[#176AE51A] py-1 px-2 rounded-xl">
            {data.years_of_exp}+ Years Experience
          </span>
        </div>
        <h1 className=" text-[#0F0F0F] text-[22px] font-[700]  ">{data.name}</h1>
        <p className=" font-[500] text-[16px] text-gray-500 " >{data.type}</p>
        <p className="text-gray-400 font-medium">License No : {data.license_number} </p>
          <Link to={`lawyear/${data.license_number}`}>
            <button className="rounded-3xl text-blue-600 border-2 md:w-[50%] py-[6px] px-3 mt-2 cursor-pointer font-[700] hover:bg-blue-600 hover:text-white  ">
              View Details
            </button>
          </Link>
      </div>
    </div>
  );
};

export default SingleLawyear;