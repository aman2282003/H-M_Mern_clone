import React from "react";
import Pic from "../../assets/boy2.avif";
export const Five = () => {
  return (
    <div className="relative ">
      <img
        className="h-[370px] md:h-[660px] w-full"
        src={Pic}
        alt="Dreamy dress"
      />
      <div className="absolute inset-0 flex flex-col  justify-end items-center text-white p-4">
        <p className="md:text-2xl font-bold mb-2 ">The Jeans edit</p>
        <div className="flex">
          <button className=" w-[130px] text-sm  m-2 shadow text-gray-800 bg-white font-bold py-2 px-4  hidden md:block">
            Shop boys
          </button>
          <button className=" w-[130px] text-sm  m-2 shadow text-gray-800 bg-white font-bold py-2 px-4  hidden md:block">
            Shop girls
          </button>
        </div>
      </div>
    </div>
  );
};
