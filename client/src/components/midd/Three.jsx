import React, { useState } from "react";
import { useEffect } from "react";
import { FaHeart } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "../card/Cards";
export const Three = () => {
  const [item, setitem] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/products?category=Ladies"
        );
        setitem(response.data.Mydata);
      } catch (error) {
        console.log("error", error);
      }
    };
    getItem();
  }, []);

  var settings = {
    dots: true,
    infinite: false,

    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
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

  return (
    <>
      <div className="flex items-center gap-2">
        <p className="font-bold text-2xl">Women's trending bestsellers</p>
        <p></p>
        <FaHeart className="text-xl" />
      </div>
      <div>
        <Slider {...settings}>
          {item.map((item) => (
            <Cards item={item} key={item._id} />
          ))}
        </Slider>
      </div>
    </>
  );
};
