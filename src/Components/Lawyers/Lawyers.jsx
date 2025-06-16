import React, { Suspense, useState, useEffect } from "react";
import SingleLawyear from "./SingleLawyear";

const Lawyers = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const displayedLawyers = showAll ? data : data.slice(0, 6);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <div>
        <div className=" flex flex-col gap-4">
          <h1 className="text-center font-[700] text-3xl md:text-[34px] text-[#0F0F0F]  ">
            Our Best Lawyers
          </h1>
          <p className="text-[#555555] font-[400] text-[16px] text-center md:w-[70%] mx-auto">
            Our platform connects you with verified, experienced Lawyers across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
          <div className=" grid md:grid-cols-2 gap-12 mt-8">
            <Suspense fallback={<span>Loading...</span>}>
              {displayedLawyers.map((item) => (
                <SingleLawyear key={item.license_number} data={item} />
              ))}
            </Suspense>
          </div>
          {!showAll && data.length > 6 && (
            <button
              onClick={() => setShowAll(true)}
              className="mx-auto mt-8 font-[500] text-[16px] px-8 py-2 bg-[#0EA106] hover:bg-white hover:text-[#0EA106] text-white rounded-3xl border border-[#0EA106] cursor-pointer"
            >
              View All Lawyers
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lawyers;