import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar";  // ঠিক করা হয়েছে

const Root = () => {
  return (
    <div className="mulish">
      <div className="md:max-w-7xl w-[94%] mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;