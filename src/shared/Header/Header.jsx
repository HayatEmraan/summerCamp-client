import React, { useContext } from "react";
import logo from "../../assets/logo/logo-transparent.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  const { user } = useContext(AuthContext);
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
            {user ? (
              <div className="flex items-center gap-2">
                <Link to="/dashboard/cart" className=" text-2xl gap-0 me-4 relative">
                  <AiOutlineShoppingCart></AiOutlineShoppingCart>
                  <small className="absolute -top-3 left-3 bg-red-600 rounded-full py-0 text-sm px-1 text-white">
                    {/* {(data && data?.length) || 0} */} 0
                  </small>
                </Link>
                {user ? (
                  <img
                    className="w-7 h-6 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  ""
                )}
                {user?.displayName}
              </div>
            ) : (
              <Link
                to="/signin"
                className="border py-2 px-4 rounded-lg hover:bg-[#FFE699] border-[#ffc000]"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
