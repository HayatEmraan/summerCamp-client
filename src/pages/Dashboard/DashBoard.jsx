import React, { useContext } from "react";
import logo from "../../assets/logo/logo-transparent.png";
import { AuthContext } from "../../context/AuthContext";
import { FaDiscourse } from "react-icons/fa";
import { AiOutlineAppstoreAdd, AiOutlineShoppingCart } from "react-icons/ai";
import {
  MdFlightClass,
  MdOutlineClass,
  MdOutlineDashboardCustomize,
  MdPayment,
  MdReviews,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { BiUserVoice } from "react-icons/bi";
const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const isAdmin = false;
  const instructor = true;
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
              {isAdmin || instructor ? (
                isAdmin ? (
                  <>
                    <NavLink
                      to="/dashboard/admin"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active flex items-center gap-4"
                          : "pending flex items-center gap-4"
                      }
                    >
                      <MdOutlineDashboardCustomize
                        size={28}
                      ></MdOutlineDashboardCustomize>
                      <span className="text-2xl">Dashboard</span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/orders"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active flex items-center gap-4"
                          : "pending flex items-center gap-4"
                      }
                    >
                      <AiOutlineShoppingCart size={28}></AiOutlineShoppingCart>
                      <span className="text-2xl">All Orders</span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/users"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active flex items-center gap-4"
                          : "pending flex items-center gap-4"
                      }
                    >
                      <BiUserVoice size={28}></BiUserVoice>
                      <span className="text-2xl">All Users</span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/classes"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active flex items-center gap-4"
                          : "pending flex items-center gap-4"
                      }
                    >
                      <MdFlightClass size={28}></MdFlightClass>
                      <span className="text-2xl">Manage Classes</span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/courses/list"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active flex items-center gap-4"
                          : "pending flex items-center gap-4"
                      }
                    >
                      <MdReviews size={28}></MdReviews>
                      <span className="text-2xl">All Courses</span>
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/dashboard/addaclass"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active flex items-center gap-4"
                          : "pending flex items-center gap-4"
                      }
                    >
                      <AiOutlineAppstoreAdd size={28}></AiOutlineAppstoreAdd>
                      <span className="text-2xl">Add A Class</span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/myclass"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active flex items-center gap-4"
                          : "pending flex items-center gap-4"
                      }
                    >
                      <MdOutlineClass size={28}></MdOutlineClass>
                      <span className="text-2xl">My Classes</span>
                    </NavLink>
                  </>
                )
              ) : (
                <>
                  <NavLink
                    to="/dashboard/courses"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active flex items-center gap-4"
                        : "pending flex items-center gap-4"
                    }
                  >
                    <FaDiscourse size={28}></FaDiscourse>
                    <span className="text-2xl">My Courses</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/cart"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active flex items-center gap-4"
                        : "pending flex items-center gap-4"
                    }
                  >
                    <AiOutlineShoppingCart size={28}></AiOutlineShoppingCart>
                    <span className="text-2xl">My Cart</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/payment"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active flex items-center gap-4"
                        : "pending flex items-center gap-4"
                    }
                  >
                    <MdPayment size={28}></MdPayment>
                    <span className="text-2xl">Payment History</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/reviews"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active flex items-center gap-4"
                        : "pending flex items-center gap-4"
                    }
                  >
                    <MdReviews size={28}></MdReviews>
                    <span className="text-2xl">Reviews</span>
                  </NavLink>
                </>
              )}
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
