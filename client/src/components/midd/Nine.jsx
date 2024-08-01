import React from "react";
import timage from "../../assets/furniture.jpeg";
export const Nine = () => {
  const divStyle = {
    backgroundImage: `url(${timage})`,
    backgroundSize: "cover", // Ensures the image covers the div
    backgroundPosition: "center", // Centers the image
    width: "100%", // Adjust width as needed
    height: "150px", // Adjust height as neede
  };
  return (
    <>
      <div
        className="px-6 my-5 flex flex-col items-center justify-center"
        style={divStyle}
      >
        <p className="font-bold text-white">Home: New Arrivals</p>
        <p className="text-sm text-white">Selection of most loved pieces</p>

        <div className="hover:bg-gray-200 bg-white m-2 w-[140px] text-center font-bold pl-2 hidden md:block">
          Shop Now
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
};
