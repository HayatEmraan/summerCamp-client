import React from 'react';
import banner from "../../assets/banner/banner.jpg";
const Banner = () => {
    return (
      <div className="flex bg-[#F8F9FB] justify-between z-0">
        <div className="shadow p-6 h-fit mt-16 ms-12">
          <h2 className="text-3xl font-semibold">Learning for all</h2>
          <p>This sale ends today. Log in to see your <br /> savings.</p>
        </div>
        <img style={{height: '400px'}} src={banner} alt="" />
      </div>
    );
};

export default Banner;