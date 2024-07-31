import React from "react";
import Pic from "../../assets/red_skirt.avif";
export const Seven = () => {
  return (
    <div className="relative py-5">
      <img
        className="h-[370px] md:h-[660px] w-full"
        src={Pic}
        alt="Dreamy dress"
      />
      <div className="absolute inset-0 flex flex-col  justify-end items-center text-white p-4">
        <p>New arrivals</p>
        <p className="md:text-3xl font-bold mb-2 ">A red moment</p>

        <button className=" w-[130px] text-sm  m-2 mb-5 shadow text-gray-800 bg-white font-bold py-1  hidden md:block">
          Shop now
        </button>
      </div>
    </div>
  );
};
