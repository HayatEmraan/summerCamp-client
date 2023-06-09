import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link, useSearchParams } from "react-router-dom";
import NoResults from "./NoResults";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import "./slide.css";

const TabsData = () => {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("category");
  useEffect(() => {
    fetch("http://localhost:3000/main")
      .then((res) => res.json())
      .then((data) => {
        searchQuery && searchQuery !== "All"
          ? setData(data.filter((fl) => searchQuery === fl.category))
          : setData(data);
      });
  }, [searchQuery]);

  return (
    <div>
      <div className="border p-8 rounded-md">
        <h2 className="text-2xl font-semibold mb-3">
          Expand your career opportunities with English
        </h2>
        <p className="w-3/4 mb-4">
          Enroll in one of English Academy's diverse language courses and master
          the implementation of this incredibly useful language. Choose from a
          wide selection of courses that cater to various interests and
          aspirations, allowing you to excel in your chosen field.
        </p>
        <Link to="/courses" className="btn btn-outline mb-4">
          Explore Courses
        </Link>
        <div>
          {data && data.length > 0 ? (
            <Swiper
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                768: {
                  width: 768,
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
              }}
            >
              {data.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
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
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <NoResults></NoResults>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabsData;
