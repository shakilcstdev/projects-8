import React from 'react'

const LawyearFullView = ({singleLawyear}) => {
  return (
    <div className="flex flex-col md:flex-row p-8 rounded-xl border-2 border-gray-300 items-center gap-6">
        <div>
          <img
            className="w-[300px] h-[300px] object-cover  rounded-2xl object-top"
            src={singleLawyear.image_link}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
          <span className="text-[#176AE5] text-[16px] bg-[#176AE51A] py-1 px-2 rounded-xl">
            {singleLawyear.years_of_exp}+ Years Experience
          </span>
          </div>
          <h1 className=" text-[#0F0F0F] text-[28px] font-[700]  ">
            {singleLawyear.name}
          </h1>
          <div className="flex  gap-6">
            <p className=" font-[500] text-[16px] text-gray-500 ">
              {singleLawyear.type}
            </p>
            <p className=" font-[500] text-[16px] text-gray-500 ">
              License No : {singleLawyear.license_number}
            </p>
          </div>
          <p className="text-xl font-[500] text-gray-800 ">
            <span>Availability : </span>
            {singleLawyear.available_days.map((date , index) => (
              <span key={index} className="text-[#FFA000] text-[14px] bg-[#FFA0001A] py-1 px-2 rounded-xl m-2">
                {date}
              </span>
            ))}
          </p>
          <p className="text-[18px] font-[500] text-gray-700 ">Consultation Free : <span className='font-[700]'>{singleLawyear.consultation_fee} TK</span> </p>
        </div>
      </div>
  )
}

export default LawyearFullView