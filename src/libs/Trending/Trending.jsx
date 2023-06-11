import React, { useEffect, useState } from "react";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { Rating } from "@smastrom/react-rating";

const Trending = () => {
  const axiosSecure = useAxiosSecure();
  const [trending, setTrending] = useState(null);
  useEffect(() => {
    axiosSecure
      .get("/courses/trending")
      .then((res) => setTrending(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mb-10">
      <div>
        <h2 className="font-bold text-3xl mb-4">Trending Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 border p-6 rounded-lg gap-4">
          {trending &&
            trending.slice(0, 5).map((course, index) => {
              return (
                <div key={index}>
                  <img
                    className="rounded-lg"
                    style={{ height: "187px", width: "272px" }}
                    src={course.thumbnailImage}
                    alt=""
                  />
                  <h2 className="font-semibold">{course.courseName}</h2>
                  <small>{course.teacherName}</small>
                  <div className="flex gap-1">
                    <small className="text-[#662e94] font-bold">4.6</small>
                    <Rating style={{ maxWidth: 80 }} value={4.6} readOnly />
                    <small className="text-slate-500">(100,100)</small>
                  </div>
                  <div className="flex justify-between">
                    <h2>${course.price}</h2>
                    <h2 className="me-4">
                      Available Seats: {course.availableSits}
                    </h2>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Trending;
