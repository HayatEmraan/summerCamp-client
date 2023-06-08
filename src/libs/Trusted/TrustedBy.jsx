import React from "react";
import box from "../../assets/support/box-dark.svg";
import eventbrite from "../../assets/support/eventbrite-dark.svg";
import nasdaq from "../../assets/support/nasdaq-dark.svg";
import netapp from "../../assets/support/netapp-dark.svg";
import volkswagen from "../../assets/support/volkswagen-dark.svg";
import tcs from "../../assets/support/tcs-dark.svg";
const TrustedBy = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-inter text-2xl font-semibold mb-1">Trusted by over 13,400 great teams</h2>
        <p>
          Leading companies use the same courses to help employees keep their
          skills fresh.
        </p>
      </div>
      <div className="flex justify-between my-6">
        <img src={nasdaq} alt="" />
        <img src={volkswagen} alt="" />
        <img src={box} alt="" />
        <img src={netapp} alt="" />
        <img src={eventbrite} alt="" />
        <img src={tcs} alt="" />
      </div>
    </div>
  );
};

export default TrustedBy;
