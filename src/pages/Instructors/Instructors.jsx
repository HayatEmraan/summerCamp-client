import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Instructors = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://summer-camp-sv.vercel.app/half")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleCategory = (category) => {
    let queryParams = {};
    if (searchParams) {
      queryParams = queryString.parse(searchParams.toString());
    }
    const createQuery = {
      ...queryParams,
      category: category,
    };
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: createQuery,
      },
      { skipNull: true }
    );
    navigate(url);
  };
  return (
    <div className="container mx-auto mb-12 mt-4 border p-12 rounded-lg">
      <h2 className="text-6xl text-center mb-24 text-[#D0ABFF]">
        Meet Our Instructors_
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data &&
          data.map((item, index) => {
            return (
              <Link
                to={`/instructor/${item.name.split(" ")[0]}_${
                  item.name.split(" ")[1]
                }`}
                key={index}
                className="border shadow-md p-4 rounded-md group"
              >
                <img
                  style={{ width: "260px", height: "178px" }}
                  className="rounded-md group-hover:scale-110 transition duration-500 ease-in-out"
                  src={item.image}
                  alt=""
                />
                <h1 className="text-2xl font-inter my-2 hover:underline">
                  {item.name}
                </h1>
                <h1>{item.education}</h1>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Instructors;
