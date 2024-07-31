import React from "react";
import Pic from "../../assets/star.avif";
export const Eight = () => {
  return (
    <div className="relative ">
      <img
        className="h-[370px] md:h-[660px] w-full"
        src={Pic}
        alt="Dreamy dress"
      />
      <div className="absolute inset-0 flex flex-col  justify-end items-center text-white p-4">
        <p className="font-xsm">The new designer drops Augest 12</p>

        <button className=" w-[160px] text-sm  m-2 p-1 shadow text-gray-800 bg-white font-bold py-1  hidden md:block">
          View collection
        </button>
      </div>
    </div>
  );
};
