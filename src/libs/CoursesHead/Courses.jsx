import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Courses = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/main")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div>
      <div className="border p-8 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
          {data &&
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border p-4 shadow-md rounded-md relative overflow-hidden"
                >
                  <img
                    style={{ height: "187px", width: "272px" }}
                    src={item.thumbnailImage}
                    alt=""
                  />
                  <h2 className="font-semibold">{item.title}</h2>
                  <small>{item.teacherName}</small>
                  <div className="flex gap-1">
                    <small className="text-[#662e94] font-bold">4.6</small>
                    <Rating style={{ maxWidth: 80 }} value={4.6} readOnly />
                    <small className="text-slate-500">(100,100)</small>
                  </div>
                  <div className="flex justify-between mb-5">
                    <h2>${item.price}</h2>
                    <h2>Available Seats: {item.availableSits}</h2>
                  </div>
                  <div className="w-full text-center bg-purple-600 text-white rounded-lg text-2xl absolute bottom-0 left-0">
                    <button>Add to Cart</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
