import { useQuery } from "@tanstack/react-query";
import React from "react";
const About = () => {
  const { data, error, refetch } = useQuery({
    queryKey: ["team"],
    queryFn: () =>
      fetch("http://localhost:3000/team")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        })
        .catch((err) => console.log(err)),
  });
  return (
    <div className="bg-black pt-24">
      <h2 className="text-6xl text-center mb-24 text-[#D0ABFF]">
        Meet Our Team_
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 container mx-auto gap-8 text-white justify-items-center text-center">
        {data &&
          data.map((item) => {
            return (
              <div key={item._id} className="team-bg">
                <img
                  className="w-[187px] h-[284px] z-10 object-cover"
                  src={item.profileImage}
                  alt=""
                />
                <div className="mt-1">
                  <h1 className="font-semibold text-xl">{item.fullName}</h1>
                  <small>{item.designation}</small>
                </div>
              </div>
            );
          })}
      </div>
      <div className="mx-auto container mt-12 text-center text-slate-500 pb-12">
        <h2>
          Disclaimer : -{" "}
          <span>
            The data collected from the Programming Hero website is intended for
            personal learning purposes only. We do not claim ownership of the
            collected data, and it remains the property of the Programming Hero
            website and its respective owners. The data is provided as-is, and
            while we strive for accuracy, we cannot guarantee its completeness
            or correctness. By using the collected data, you agree to use it at
            your own risk and understand that we disclaim any liability for
            damages or losses arising from its use. You are responsible for
            ensuring compliance with all applicable laws and intellectual
            property rights. Any modifications to this disclaimer will be
            effective immediately upon posting.
          </span>
        </h2>
      </div>
    </div>
  );
};

export default About;
