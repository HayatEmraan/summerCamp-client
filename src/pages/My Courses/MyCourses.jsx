import React, { useEffect, useState } from "react";
import img from "../../assets/test.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import NoResults from "../../libs/Tabs/NoResults";
import DomLoader from "../../libs/Loader/DomLoader";
import { toast } from "react-hot-toast";
const MyCourses = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosSecure
      .get(`/courses/data?email=${user?.email}`)
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch((err) => toast.error("Something went wrong. Please try again!"));
  }, []);
  let listOf = [];
  courses?.map((course) => course.courses?.map((c) => listOf.push(c)));
  return (
    <div>
      <h2 className="text-3xl font-cinzel text-center mt-8 mb-20">
        My Courses
      </h2>
      {loading ? (
        <DomLoader></DomLoader>
      ) : (
        <>
          <h2
            className={`${
              listOf.length > 0 ? "text-2xl font-semibold mb-4" : "hidden"
            }`}
          >
            Courses
          </h2>
          <div
            className={`${
              listOf.length > 0 &&
              "grid grid-cols-1 md:grid-cols-2 gap-4 border p-3 rounded-md"
            }`}
          >
            {listOf && listOf.length > 0 ? (
              listOf.map((course, index) => {
                return (
                  <div className="p-12" key={index}>
                    <div className="border shadow-sm w-fit p-2 rounded w-[341px] relative">
                      <img
                        style={{ width: "340px", height: "187px" }}
                        className="rounded mx-auto"
                        src={course.image}
                        alt=""
                      />
                      <h2 className="bg-[#EAECF0] w-fit px-2 rounded my-2">
                        Batch 1
                      </h2>
                      <h2 className="text-xl font-semibold mb-20">
                        {course.name}
                      </h2>
                      <div className="flex items-center w-11/12 bg-black text-white rounded-lg justify-center text-xl py-3 absolute bottom-0 left-0 right-0 mx-auto mb-3">
                        <button>CONTINUE</button>
                        <BsArrowRightShort size={25}></BsArrowRightShort>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <NoResults></NoResults>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MyCourses;
