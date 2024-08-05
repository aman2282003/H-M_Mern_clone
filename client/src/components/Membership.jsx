import React from "react";
import memberImage from "../assets/members.png";
import dikila from "../assets/dikila.avif";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { Hiworks } from "./Hiworks";
import { Faq } from "./Faq";
export const Membership = () => {
  const divStyle = {
    backgroundImage: `url(${memberImage})`,
    backgroundSize: "cover", // Ensures the image covers the div
    backgroundPosition: "center", // Centers the image
    width: "100%", // Adjust width as needed
    height: "520px", // Adjust height as neede
  };
  const divStyle2 = {
    backgroundImage: `url(${dikila})`,
    backgroundSize: "cover", // Ensures the image covers the div
    backgroundPosition: "center", // Centers the image
    height: "820px", // Adjust height as neede
  };

  const benefits = [
    "10% off one purchase when you join",
    "Collect points when you shop Rs.50 = 1 point",
    "Bonus vouchers 200 points = Rs 300.00 voucher",
    "Offers and discounts",
    "Free delivery when you shop for Rs.1999 or more",
    "Free returns",
    "10% off on one purchase on your Birthday",
    "Special member prices",
    "Pre-Access to sale",
    "Invitations to events",
    "Benefits from collaborating partners",
    "Exciting contests",
    "Free delivery",
    "Surprise Plus offers",
    "Unique access to special collections",
    "Exclusive experiences",
    "15% off on one purchase on your Birthday",
  ];

  return (
    <>
      <div className="" style={divStyle}></div>
      <div className="flex">
        <div className="w-[60%] px-[12%] py-[3%] bg-white">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className=" text-2xl font-bold text-red-600">
                  All your benefits
                </th>
                <th className="text-sm  text-gray-900 text-center flex flex-col items-center">
                  <IoPersonOutline />
                  0-799 points
                </th>
                <th className="text-sm  text-red-500    ">
                  <MdOutlinePersonAddAlt />
                  800 points
                </th>
              </tr>
            </thead>
            <tbody>
              {benefits.map((benefit, index) => (
                <tr key={index} className="">
                  <td className="py-1 text-sm">{benefit}</td>
                  <td className="text-center">
                    <span className="block w-3 h-3 bg-gray-400 rounded-full mx-auto"></span>
                  </td>
                  <td className="text-center">
                    <span className="block w-3 h-3 bg-red-500 rounded-full mx-auto"></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-[40%] " style={divStyle2}></div>
      </div>
      <Hiworks />
      <Faq />
    </>
  );
};
