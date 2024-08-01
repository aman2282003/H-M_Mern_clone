import React from "react";

const Bcards = ({ item }) => {
  return (
    <div className=" h-[400px] flex items-center justify-center mt-2 ">
      <div className="">
        <figure className="flex justify-center items-center h-[350px] w-[220px]  ">
          <img
            src={item.image}
            alt="Clothes"
            className="h-full object-contain w-full"
          />
        </figure>
        <div className="p-2">
          <h2 className="text-black text-sm">
            {" "}
            {item.name.length > 12 ? `${item.name.slice(0, 16)}...` : item.name}
          </h2>
          <div className="text-black text-sm">
            <div className="">Rs.{item.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bcards;
