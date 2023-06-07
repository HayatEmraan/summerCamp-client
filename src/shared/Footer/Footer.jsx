import React from "react";
import payments from "../../assets/payment/support.png";
import { BiMap } from "react-icons/bi";
import {} from "react-icons/io";
import logo from "../../assets/logo/logo-transparent.png";
import { FaAppStore, FaPhone, FaWindows } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { CgMail } from "react-icons/cg";
const Footer = () => {
  return (
    <div className="footer-wave">
      <div className="container lg:mx-auto mx-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between py-20 text-lg">
        <div>
          <img className="bg-transparent w-2/4" src={logo} alt="" />
          <div className="ms-6">
            <h2 className="mb-2 text-slate-700">
              Online Live Skill Development <br /> Platform
            </h2>
            <h2 className="font-semibold text-xl">Download App</h2>
            <div className="flex text-5xl gap-1 my-2">
              <FaAppStore className="border px-1 bg-black text-white rounded-md"></FaAppStore>
              <FaWindows className="border px-1  rounded-md"></FaWindows>
            </div>
            <h2>Follow Us</h2>
            <div className="flex text-5xl gap-1">
              <AiFillFacebook className="p-1 border rounded-lg"></AiFillFacebook>
              <AiFillTwitterCircle className="p-1 border rounded-lg"></AiFillTwitterCircle>
              <AiFillInstagram className="p-1 border rounded-lg"></AiFillInstagram>
              <AiFillLinkedin className="p-1 border rounded-lg"></AiFillLinkedin>
              <AiFillYoutube className="p-1 border rounded-lg"></AiFillYoutube>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="font-semibold text-xl">Quick Link</h2>
          <h2>Upcoming Live Batch</h2>
          <h2>Free Live Class</h2>
          <h2>Live Workshop</h2>
          <h2>Blog</h2>
        </div>
        <div className="space-y-1">
          <h2 className="font-semibold text-xl">Contacts</h2>
          <div className="flex items-center gap-2">
            <FaPhone></FaPhone>
            <h2>+880 1119-37215</h2>
          </div>

          <div className="flex items-center gap-2">
            <CgMail size={27}></CgMail>
            <h2>support@empty.com</h2>
          </div>
          <div className="flex items-center gap-2">
            <BiMap size={27}></BiMap>
            <h2>Dhaka, Gazipur, India</h2>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="font-semibold text-xl">Company</h2>
          <h2>About Us</h2>
          <h2>Terms & Conditions</h2>
          <h2>Privacy Policy</h2>
          <h2>FAQ</h2>
        </div>
      </div>
      <div className="mx-auto container mb-3">
        <img src={payments} alt="" />
      </div>
      <p className="text-center text-slate-500">©Online English Academy 2023</p>
    </div>
  );
};

export default Footer;
