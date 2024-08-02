import React from "react";
import { useNavigate } from "react-router-dom";
const Cards = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${item._id}`); // Ensure item._id is correctly formatted
  };

  return (
    <div
      onClick={handleClick}
      className=" h-[200px] flex items-center justify-center mt-2 "
    >
      <div>
        <figure className="flex justify-center items-center h-[150px] w-[200px] bg-blue">
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
            <div className="">Rs.{item.price}.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
