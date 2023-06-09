import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import NoResults from "../Tabs/NoResults";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useCart } from "../../Hooks/useCart";
import { useNavigate } from "react-router-dom";

const Courses = ({ selectCategory, sort }) => {
  const axiosSecure = useAxiosSecure();
  const { refetch } = useCart();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:3000/courses?sort=${sort}`)
      .then((res) => res.json())
      .then((data) => {
        selectCategory
          ? setData(data.filter((fl) => selectCategory === fl.category))
          : setData(data);
      });
  }, [selectCategory, sort]);
  const handleCart = (id) => {
    if (!user) {
      toast.error("Please Login First!");
      return navigate("/signin");
    }
    axiosSecure
      .post("/order", {
        oid: id._id,
        email: user?.email,
        price: id.price,
        status: "pending",
        category: id.category,
        name: id.title,
      })
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Successfully Added!", {
            position: "top-right",
          });
          refetch();
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!", {
          position: "top-right",
        });
      });
  };

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
                    <button onClick={() => handleCart(item)}>
                      Add to Cart
                    </button>
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
