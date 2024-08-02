import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heartSvg from "../../assets/heart.svg";
import redHeartSvg from "../../assets/red-heart.svg"; // Import the red heart SVG

const Bcards = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${item._id}`); // Ensure item._id is correctly formatted
  };

  const handleHeartClick = (e) => {
    e.stopPropagation(); // Prevent triggering the navigate function
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className="relative h-[350px] flex items-end justify-end cursor-pointer"
      onClick={handleClick}
    >
      <div>
        <figure className=" h-[300px] w-[220px]">
          <img src={item.image} alt="Clothes" className="h-full w-full" />
          <div className="absolute flex items-end justify-end inset-0">
            <img
              src={isFavorite ? redHeartSvg : heartSvg}
              alt="Heart"
              className="h-6 w-6 "
              onClick={handleHeartClick}
            />
          </div>
        </figure>
        <div>
          <h2 className="text-black text-sm">
            {item.name.length > 12 ? `${item.name.slice(0, 16)}...` : item.name}
          </h2>
          <div className="text-black text-sm">
            <div>Rs.{item.price}.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bcards;
