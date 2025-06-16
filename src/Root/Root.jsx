import React from "react";
// import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../components/Header/Navber";

const Root = () => {
  return (
    <div className="mulish">
      <div className=" md:max-w-7xl w-[94%] mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;