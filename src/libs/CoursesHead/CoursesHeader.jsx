import React from "react";
import Courses from "./Courses";
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
const CoursesHeader = () => {
  return (
    <div className="mx-auto container my-12">
      <div className="flex justify-between items-center">
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-1">
            <h2>Price</h2>
            <div>
              <MdOutlineKeyboardArrowUp></MdOutlineKeyboardArrowUp>
              <MdOutlineKeyboardArrowDown className="-mt-[6px]"></MdOutlineKeyboardArrowDown>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <h2>Popularity</h2>
            <div>
              <MdOutlineKeyboardArrowUp></MdOutlineKeyboardArrowUp>
              <MdOutlineKeyboardArrowDown className="-mt-[6px]"></MdOutlineKeyboardArrowDown>
            </div>
          </div>
          <div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Category
              </option>
              <option>Bangla</option>
              <option>Hindi</option>
              <option>Tamil</option>
              <option>Arabic</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
      </div>
      <div className="my-6">
        <Courses></Courses>
      </div>
    </div>
  );
};

export default CoursesHeader;
