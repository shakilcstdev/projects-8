import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ img, count, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.5,      
  });

  return (
    <div ref={ref} className="bg-gray-200 rounded-xl p-6">
      <div>
        <img src={img} alt="" />
      </div>
      <h1 className="text-[38px] font-[700] text-[#0F0F0F] ">
        {inView ? <CountUp end={count} duration={2} /> : null}+
      </h1>
      <p className="text-[#555555] font-[400] text-[16px]">{text}</p>
    </div>
  );
};

export default ServiceCard;