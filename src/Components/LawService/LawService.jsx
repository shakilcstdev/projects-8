import React from "react";
import avater from "../../assets/success-doctor.png";
import star from "../../assets/success-review.png";
import law from "../../assets/success-patients.png";
import stuff from "../../assets/success-staffs.png";
import ServiceCard from "./ServiceCard";

const LawService = () => {
  return (
    <div>
      <div className=" flex flex-col gap-4">
        <h1 className="text-center font-[700] text-3xl md:text-[34px] text-[#0F0F0F]  ">
          We Provide Best Law Services
        </h1>
        <p className="text-[#555555] font-[400] text-[16px] text-center ">
          Our platform connects you with verified, experienced Lawyers across
          various specialities — all at your convenience.
        </p>
        <div className=" grid md:grid-cols-4 grid-cols-2 gap-6 mt-8">
          <ServiceCard
            img={avater}
            count={199}
            text={"Total Lawyer"}
          ></ServiceCard>
          <ServiceCard
            img={star}
            count={467}
            text={"Total Reviews"}
          ></ServiceCard>
          <ServiceCard
            img={law}
            count={1900}
            text={"Cases Initiated"}
          ></ServiceCard>
          <ServiceCard
            img={stuff}
            count={300}
            text={"Total Stuffs"}
          ></ServiceCard>
        </div>
      </div>
    </div>
  );
};

export default LawService;