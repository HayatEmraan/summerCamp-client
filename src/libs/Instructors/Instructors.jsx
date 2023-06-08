import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const InstructorsHeader = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/half")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div>
      <div className="border p-8 rounded-md mb-12">
        <h2 className="text-2xl font-semibold mb-3">Meet Our Instructors_</h2>
        <p className="w-3/4 mb-4">
          Our instructors are language experts with a wealth of knowledge in
          English language and literature. With their strong academic
          backgrounds and years of teaching experience, they bring a deep
          understanding of language nuances and effective teaching methodologies
          to ensure your success in mastering English.
        </p>
        <Link to="/instructors" className="btn btn-outline mb-4">
          Explore Instructors
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {data &&
            data.slice(1, 6).map((item, index) => {
              return (
                <div key={index} className="border p-2 rounded-md">
                  <img className="rounded-md"
                    style={{ height: "187px", width: "272px" }}
                    src={item.image}
                    alt=""
                  />
                  <h2 className="font-semibold">{item.name}</h2>
                  <small>{item.education}</small>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default InstructorsHeader;
