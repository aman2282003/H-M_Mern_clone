import React from "react";
import mob1 from "../assets/mob1.avif";
import mob2 from "../assets/mob2.avif";
import mob3 from "../assets/mob3.avif";
export const Hiworks = () => {
  return (
    <>
      <div className="bg-[#F1EBDF] ">
        <div className=" py-4 px-5 md:p-8">
          <h1 className="text-2xl md:text-2xl font-bold text-red-600 mb-4 md:mb-6">
            How it works
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className=" p-4 md:p-6 rounded-lg ">
              <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-red-600">
                Sign-up
              </h2>
              <p className="mb-4 text-sm md:text-base">
                All you have to do is sign up — it's free! The membership is
                completely digital. Explore all the perks at hm.com or in the
                H&M app.
              </p>
              <button className="bg-black text-white px-4 py-2 rounded">
                JOIN NOW
              </button>
            </div>

            <div className=" p-4 md:p-6 rounded-lg ">
              <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-red-600">
                Collect points
              </h2>
              <p className="mb-4 text-sm md:text-base">
                Collect points when you shop Rs.50 = 1 point and by making
                conscious choices.
              </p>
              <a href="#" className=" underline mb-4 block">
                How to collect points
              </a>
              <img src={mob1} alt="Collect points" className="w-full rounded" />
            </div>

            <div className=" p-4 md:p-6 rounded-lg ">
              <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-red-600">
                Redeem rewards
              </h2>
              <p className="mb-4 text-sm md:text-base">
                Our way of giving back — get bonus vouchers and other offers
                through some of our collaborating partners.
              </p>
              <img src={mob2} alt="Redeem rewards" className="w-full rounded" />
            </div>

            <div className=" p-4 md:p-6 rounded-lg ">
              <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-red-600">
                Become a Plus member
              </h2>
              <p className="mb-4 text-sm md:text-base">
                Reaching 800 points makes you a Plus member and gives you access
                to even better perks and offers.
              </p>
              <img
                src={mob3}
                alt="Become a Plus member"
                className="w-full rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
