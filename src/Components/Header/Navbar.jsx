import React from "react";
import { Link } from "react-router";
import NavMenu from "./NavMenu";
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between my-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavMenu></NavMenu>
            </ul>
          </div>
          <Link to="/" className=" text-xl">
            <div className="flex justify-center items-center">
              <div className="h-[80%]">
                <img className="" src={logo} alt="" />
              </div>
              <h1 className="font-[800] text-[32px] text-[#0F0F0FCC] ">Law.BD</h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex  justify-center items-center gap-4">
            <NavMenu></NavMenu>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/contactus' className=" font-[500] text-[16px] px-[10px] py-[5px] bg-[#0EA106] hover:bg-white hover:text-[#0EA106] text-white rounded-3xl border border-[#0EA106] cursor-pointer">Contact Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;