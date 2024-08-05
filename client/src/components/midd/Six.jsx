import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Bcards from "../card/Bcards";
import Arrow from "./Arrow"; // Import the Arrow component

export const Six = () => {
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState("Ladies");

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get(
          `https://h-m-mern-clone.onrender.com/products?category=${category}`
        );
        setItem(response.data.Mydata);
      } catch (error) {
        console.log("error", error);
      }
    };
    getItem();
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <Arrow direction="right" />, // Custom right arrow
    prevArrow: <Arrow direction="left" />, // Custom left arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const buttonStyles = (btnCategory) => {
    return category === btnCategory
      ? "text-white bg-[#E50010] border border-black m-3 font-bold rounded-2xl py-2 px-3"
      : "border border-black m-3 font-bold rounded-2xl py-2 px-3";
  };

  return (
    <>
      <p className="font-bold text-2xl mt-2 ">New Arrivals</p>
      <div>
        <button
          onClick={() => handleCategoryChange("Ladies")}
          className={buttonStyles("Ladies")}
        >
          Ladies
        </button>
        <button
          onClick={() => handleCategoryChange("Men")}
          className={buttonStyles("Men")}
        >
          Men
        </button>
        <button
          onClick={() => handleCategoryChange("Baby")}
          className={buttonStyles("Baby")}
        >
          Baby
        </button>
        <button
          onClick={() => handleCategoryChange("Kids")}
          className={buttonStyles("Kids")}
        >
          Kids
        </button>
        <button
          onClick={() => handleCategoryChange("HandM_Home")}
          className={buttonStyles("HandM_Home")}
        >
          H&M HOME
        </button>
        <button
          onClick={() => handleCategoryChange("Sport")}
          className={buttonStyles("Sport")}
        >
          Sport
        </button>
      </div>
      <div className="my-6 relative">
        {" "}
        {/* Ensure this container is relatively positioned */}
        <Slider {...settings}>
          {item.map((item) => (
            <Bcards item={item} key={item._id} />
          ))}
        </Slider>
      </div>
    </>
  );
};
