import React from "react";
import heroImg from '../../assets/banner-img-1.png'
const Hero = () => {
  return (
    <div className=" ">
      <div
        className="hero h-[400px] rounded-xl my-6 overflow-hidden"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="md:w-[70%]">
            <h1 className="mb-5 text-2xl md:text-4xl font-bold">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
            <p className="mb-5">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;