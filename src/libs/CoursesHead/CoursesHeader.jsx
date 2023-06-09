import React, { useState } from "react";
import Courses from "./Courses";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
const CoursesHeader = () => {
  const [selectCategory, setSelectCategory] = useState(null);
  const handleCategory = (e) => {
    setSelectCategory(e.target.value);
  };
  const [sort, setSort] = useState(false);
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
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setSort(!sort)}
          >
            <h2>Price</h2>
            <div>
              {sort ? (
                <MdOutlineKeyboardArrowUp className="text-red-700"></MdOutlineKeyboardArrowUp>
              ) : (
                <MdOutlineKeyboardArrowUp></MdOutlineKeyboardArrowUp>
              )}
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
            <select
              className="select select-bordered w-full max-w-xs"
              defaultValue={"DEFAULT"}
              name="categoryBtn"
              onChange={handleCategory}
            >
              <option disabled value="DEFAULT">
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
        <Courses selectCategory={selectCategory} sort={sort}></Courses>
      </div>
    </div>
  );
};

export default CoursesHeader;
