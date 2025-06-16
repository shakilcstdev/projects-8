import React from "react";
import { NavLink } from "react-router";
import './Nav.css'

const NavMenu = () => {
  return (
    <>
      <li className="text-[#0F0F0FB3] text-[18px] font-[400] hover:text-[#0EA106] p-2">
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className="text-[#0F0F0FB3] text-[18px] font-[400] p-2 ">
        <NavLink to='/bookings'>My-Bookings</NavLink>
      </li>
      <li className="text-[#0F0F0FB3] text-[18px] font-[400] p-2 ">
        <NavLink to='/blogs'>Blogs</NavLink>
      </li>
      <li className="text-[#0F0F0FB3] text-[18px] font-[400] p-2 ">
        <NavLink to='/contact'>Contact Us</NavLink>
      </li>
    </>
  );
};

export default NavMenu;