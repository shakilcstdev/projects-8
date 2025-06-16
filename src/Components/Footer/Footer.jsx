import React from "react"; 
import { Link, NavLink } from "react-router";
import logofooter from "../../assets/logo-footer.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center rounded p-10 bg-[#1d1d1d] text-white mt-[80px]">
        <Link to="/" className=" text-xl">
          <div className="flex justify-center items-center">
            <div className="h-[80%]">
              <img className="" src={logofooter} alt="" />
            </div>
            <h1 className="font-[800] text-[32px] text-white">Law.BD</h1>
          </div>
        </Link>

        <nav className="grid grid-flow-col gap-4">
          <NavLink to="/" className="">
            Home
          </NavLink>
          <NavLink to="bookings" className="">
            My-Bookings
          </NavLink>
          <NavLink to="blogs" className="">
            Blogs
          </NavLink>
          <NavLink to="contact" className="">
            Contact
          </NavLink>
        </nav>

        <nav>
          <div className="flex gap-4">
            <a href="13:57
You sent
https://www.facebook.com/share/19WmakrLJU/">
              <FaFacebook size={20} />
            </a>
            <a href="https://github.com/shakilcstdev">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shakildv/">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/rijoanmaruf/">
              <FaInstagram size={20} />
            </a>
          </div>
        </nav>

        <hr className="border-t border-dashed border-gray-500 w-full " />

        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved .
          </p>
          <p className="font-semibold text-gray-300">
            Developed by{" "}
            <a className="underline" href="https://rijoan.com">
              Md Shakil Ahamed
            </a>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;