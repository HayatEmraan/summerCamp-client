import React from "react";
import img from "../../assets/test.jpg";
import { BsArrowRightShort } from "react-icons/bs";
const MyCourses = () => {
  return (
    <div>
      <h2 className="text-3xl font-cinzel text-center mt-8 mb-20">
        My Courses
      </h2>
      <div className="border p-12 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Courses</h2>
        <div className="border shadow-sm w-fit p-2 rounded w-[341px] relative">
          <img
            style={{ width: "340px", height: "187px" }}
            className="rounded"
            src={img}
            alt=""
          />
          <h2 className="bg-[#EAECF0] w-fit px-2 rounded my-2">Batch 1</h2>
          <h2 className="text-xl font-semibold mb-20">
            Mastering on React JS, Next Js & Prisma
          </h2>
          <div className="flex items-center w-11/12 bg-black text-white rounded-lg justify-center text-xl py-3 absolute bottom-0 left-0 right-0 mx-auto mb-3">
            <button>CONTINUE</button>
            <BsArrowRightShort size={25}></BsArrowRightShort>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
