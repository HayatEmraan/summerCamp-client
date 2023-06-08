import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const TabsData = () => {
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
        <h2 className="text-2xl font-semibold mb-3">Expand your career opportunities with Python</h2>
        <p className="w-3/4 mb-4">
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to
              </p>
              <Link to="/courses" className="btn btn-outline mb-4">Explore Courses</Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {data &&
            data.map((item, index) => {
              return (
                <div>
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
                  <h2>${item.price}</h2>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TabsData;
