import React, { useEffect, useState } from "react";

const Instructors = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/half")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="container mx-auto mb-12 mt-4 border p-12 rounded-lg">
      <h2 className="text-6xl text-center mb-24 text-[#D0ABFF]">
        Meet Our Instructors_
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} className="border shadow-md p-4 rounded-md">
                <img
                  style={{ width: "260px", height: "178px" }}
                  className="rounded-md"
                  src={item.image}
                  alt=""
                />
                <h1 className="text-2xl font-inter my-2">{item.name}</h1>
                <h1>{item.education}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Instructors;
