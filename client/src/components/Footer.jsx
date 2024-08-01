import React from "react";
import Logo from "../assets/logo.png";
import { HiArrowRight } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="bg-[#E4E4E4] md:px-[18%] px-[2%] ">
        <div className="mx-auto max-w-screen-xl px-4 py-6 ">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="mt-8 lg:mt-0 w-full flex flex-wrap justify-between">
              <div className="w-full lg:w-1/4">
                <p className="font-medium text-gray-900">SHOP</p>
                <ul className="mt-2  space-y-1 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Ladies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Men
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Baby
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Kids
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      H&M HOME
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Sport
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Magazine
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
                <p className="font-medium text-gray-900">CORPORATE INFO</p>
                <ul className="mt-2  space-y-1 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Career at H&M
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      About H&M group
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Sustainability H&M Group
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Investor relations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Corporate governance
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
                <p className="font-medium text-gray-900">HELP</p>
                <ul className="mt-2  space-y-1 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Customer Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      My H&M
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Find a store
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Legal & Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Report a scam
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Cookie Notice
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Cookie Settings
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-1/4 mt-8 lg:mt-12">
                <p className="font-sm text-gray-900 ">
                  Sign up now and be the first to know about exclusive offers,
                  latest fashion news & style tips!
                </p>

                <p className="hover:underline flex items-center gap-1 mt-4">
                  Read More
                  <HiArrowRight />
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center mt-8">
            <div className="flex gap-5 m-2">
              <FaInstagram />
              <FaTiktok />
              <FaYoutube />
              <FaPinterest />
              <FaFacebookSquare />
            </div>
            <p className="text-xs m-3">
              The content of this site is copyright-protected and is the
              property of H & M Hennes & Mauritz AB.
            </p>
            <div>
              <img src={Logo} className="h-[30px] m-3"></img>
            </div>
            <p>INDIA | Rs.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
