import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/logo-transparent.png";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";
import { useCart } from "../../Hooks/useCart";
import { CiLogout } from "react-icons/ci";
import {
  MdOutlineDashboardCustomize,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
const Header = () => {
  const { user, logOut } = useAuth();
  const { cart } = useCart();
  const [isActive, setActive] = useState(false);
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
              <div className="flex items-center gap-2 cursor-pointer relative">
                <Link
                  to="/dashboard/cart"
                  className=" text-2xl gap-0 me-4 relative"
                >
                  <AiOutlineShoppingCart></AiOutlineShoppingCart>
                  <small className="absolute -top-3 left-3 bg-red-600 rounded-full py-0 text-sm px-1 text-white">
                    {(cart && cart?.length) || 0}
                  </small>
                </Link>
                <div
                  className="flex gap-2 items-center"
                  onClick={() => setActive(!isActive)}
                >
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

                  {isActive ? (
                    <MdOutlineKeyboardArrowUp></MdOutlineKeyboardArrowUp>
                  ) : (
                    <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
                  )}
                </div>
                {isActive && (
                  <div className="absolute -bottom-32 right-0 border p-1 shadow-md rounded-md px-2 opacity-100 bg-[#FFFFFF]">
                    <div>
                      <div className="mt-2 hover:bg-[#FFE699]">
                        <Link
                          to="/dashboard"
                          className="border border-[#ffc000] uppercase font-semibold px-8 py-2 rounded-md flex items-center gap-3"
                        >
                          <MdOutlineDashboardCustomize
                            size={20}
                          ></MdOutlineDashboardCustomize>
                          Dashboard
                        </Link>
                      </div>
                      <div
                        onClick={logOut}
                        className="uppercase flex mt-4 items-center gap-2"
                      >
                        <CiLogout size={20}></CiLogout>
                        LogOut
                      </div>
                    </div>
                  </div>
                )}
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
