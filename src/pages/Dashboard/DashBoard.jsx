import React, { useContext } from "react";
import logo from "../../assets/logo/logo-transparent.png";
import { AuthContext } from "../../context/AuthContext";
import { FaDiscourse } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdPayment, MdReviews } from "react-icons/md";
import MyCourses from "../My Courses/MyCourses";
import { CgProfile } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";
const DashBoard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-7">
        <aside className="h-[100vh] bg-[#FFFFFF] shadow-lg font-cinzel col-span-2 relative">
          <div>
            <img src={logo} alt="" />
            <div className="flex gap-2 items-center p-8 text-2xl bg-[#F9F9FA]">
              {user && (
                <div className="flex gap-2">
                  <img
                    className="w-7 h-6 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                  {user?.displayName}
                </div>
              )}
            </div>
          </div>
          <hr />
          <div className="p-8">
            <ul className="space-y-4">
              <Link to="/dashboard" className="flex items-center gap-4">
                <FaDiscourse size={28}></FaDiscourse>
                <span className="text-2xl">My Courses</span>
              </Link>
              <Link to="/dashboard/cart" className="flex items-center gap-4">
                <AiOutlineShoppingCart size={28}></AiOutlineShoppingCart>
                <span className="text-2xl">My Cart</span>
              </Link>
              <Link to="/dashboard/payment" className="flex items-center gap-4">
                <MdPayment size={28}></MdPayment>
                <span className="text-2xl">Payment History</span>
              </Link>
              <Link to="/dashboard/reviews" className="flex items-center gap-4">
                <MdReviews size={28}></MdReviews>
                <span className="text-2xl">Reviews</span>
              </Link>
            </ul>
          </div>
          <Link
            to="/dashboard/profile"
            className="flex items-center gap-4 bg-[#F9F9FA] p-8 absolute w-full bottom-0"
          >
            <CgProfile size={28}></CgProfile>
            <span className="text-2xl">My Profile</span>
          </Link>
        </aside>
        <div className="col-span-5 ms-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
