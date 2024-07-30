import React from "react";
import { One } from "./midd/One";
export const Midd = () => {
  return (
    <div className="md:px-[18%] px-[5%] mt-6">
      <div className="md:flex justify-between text-sm mb-5 mx-16 hidden">
        <p>Free shipping above ₹1999</p>
        <p>Estimated delivery time: 2-7 days</p>
        <p>Free & flexible 15 days return</p>
      </div>
      <div>
        <One />
      </div>
    </div>
  );
};
