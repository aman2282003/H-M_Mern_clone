import React from "react";
import timage from "../../assets/tricolor.png";
export const Two = () => {
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
        <p className="font-bold">The T-shirt shop starting ₹399</p>
        <p className="text-sm">
          From bold graphics to basics: new trending tees for a fashionable
          update
        </p>
        <div className="flex">
          <div className="bg-white hover:bg-gray-200 m-2 w-[90px] font-bold pl-2 hidden md:block">
            Ladies
          </div>
          <div className="bg-white hover:bg-gray-200 m-2 w-[60px] font-bold pl-2 hidden md:block">
            Men
          </div>
          <div className="bg-white hover:bg-gray-200 m-2 w-[150px] font-bold pl-2 hidden md:block">
            Kids & Baby
          </div>
        </div>
      </div>
    </>
  );
};
