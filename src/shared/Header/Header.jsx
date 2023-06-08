import React from "react";
import logo from "../../assets/logo/logo-transparent.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="shadow z-10">
      <div className="mx-auto container">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img className="w-1/2" src={logo} alt="" />
          </Link>
          <div>
            <ul className="font-cinzel flex gap-12">
              <Link to="/">Home</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/instructors">Instructors</Link>
              <Link to="/about">About</Link>
            </ul>
          </div>
          <div className="space-x-12 font-inter">
            <Link
              to="/signin"
              className="border py-2 px-4 rounded-lg hover:bg-[#FFE699] border-[#ffc000]"
            >
              Sign In
            </Link>
            {/* <Link to="/signup" className="border py-2 px-4 rounded-lg hover:bg-[#FFE699] border-[#ffc000]">Sign Up</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
