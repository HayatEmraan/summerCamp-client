import React, { useContext, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import NoResults from "../Tabs/NoResults";
import { AuthContext } from "../../context/AuthContext";

const Courses = ({ selectCategory }) => {
  const [data, setData] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => {
        selectCategory
          ? setData(data.filter((fl) => selectCategory === fl.category))
          : setData(data);
      });
  }, [selectCategory]);
  const handleCart = (id) => { 
    if (!user) {
      return;
    }
    else {
      fetch(`http://localhost:3000/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        fetch(`http://localhost:3000/cart/${user.uid}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      });
    }
  }
  return (
    <div>
      <div className="border p-8 rounded-md">
        <div
          className={`${
            data && data.length > 0
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2"
              : ""
          }`}
        >
          {data && data.length > 0 ? (
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
                    <button onClick={()=> handleCart(item._id)}>Add to Cart</button>
                  </div>
                </div>
              );
            })
          ) : (
            <NoResults></NoResults>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
