import React from "react";
import { ScaleLoader } from "react-spinners";

const DomLoader = () => {
  return (
    <div>
      <div
        className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
      >
        <ScaleLoader size={100} color="red" />
      </div>
    </div>
  );
};

export default DomLoader;
