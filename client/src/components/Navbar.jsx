import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiAdjustments, HiArrowRight } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [fitem, setFitem] = useState(0);
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const [showSignIn, setShowSignIn] = useState(false);
  const [showBag, setShowBag] = useState(false);
  const [cartprice, setCartPrice] = useState(0);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const Nav1 = () => (
    <ul className="hidden md:flex space-x-4 text-md">
      <li>Customer service</li>
      <li>Newsletter</li>
      <li>Find a store</li>
      <HiAdjustments className="h-[25px]" />
    </ul>
  );

  const Nav2 = () => (
    <div className="hidden md:block">
      <img src={logo} className="h-[40px] w-[50px] mx-auto mt-4" alt="Logo" />
    </div>
  );

  const Nav3 = ({ fitem }) => (
    <div className="space-x-4 text-md flex sign_in">
      <div
        className="flex items-center text-md space-x-2 relative"
        onMouseEnter={() => setShowSignIn(true)}
        onMouseLeave={() => setShowSignIn(false)}
      >
        <IoIosContact className="w-6 h-6" />
        <p className="hidden md:flex ">Sign in</p>
        {showSignIn && (
          <div className="hidden md:block z-10 absolute top-full left-0 w-[240px] text-sm bg-white border p-2 shadow-md">
            <button className="bg-black text-white w-full p-2 mb-5">
              Sign in
            </button>
            <p>My Account</p>
            <p>H&M Membership</p>
            <p className="text-gray-500">Not a Member yet! Join there</p>
          </div>
        )}
      </div>

      <div className="flex items-center text-md space-x-2 relative">
        <CiHeart className="w-6 h-6" />
        <p className="hidden md:flex">Favourites</p>
      </div>

      <div
        className="flex items-center text-md space-x-2 relative bag"
        onMouseEnter={() => setShowBag(true)}
        onMouseLeave={() => setShowBag(false)}
      >
        <IoBagOutline className="w-6 h-6" />
        <p className="hidden md:flex">Shopping bag ({fitem})</p>
        {showBag && (
          <div className="hidden md:block p-3 z-10 absolute top-full left-[-100px] w-[300px] text-sm bg-white border shadow-md">
            <p className="bold my-2">{"Your shopping bag is empty"}</p>
            <hr />
            <div className="flex justify-between my-2">
              <p>Order Value</p>
              <p>Rs. {cartprice}</p>
            </div>
            <hr />
            <div className="flex justify-between bold my-2">
              <p>Total</p>
              <p>Rs. {cartprice}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className="flex justify-between items-center px-5 py-3">
        <div
          className={`bx bx-menu ${
            isMenuActive ? "bx-x" : ""
          } block md:hidden text-2xl`}
          id="menu-icon"
          onClick={onDrawerOpen}
        ></div>
        <div className="flex items-center space-x-4 md:hidden">
          <img src={logo} className="h-[40px] w-[50px]" alt="Logo" />
        </div>
        <div className="w-[31%] hidden md:block">
          <Nav1 />
        </div>
        <div className="w-[37%]">
          <Nav2 />
        </div>
        <div className="w-[32%] flex justify-end">
          <Nav3 fitem={fitem} />
        </div>
      </div>
      <div
        className={`navbar ${
          isMenuActive ? "block" : "hidden"
        } absolute top-full left-0 w-full py-4 px-3`}
      ></div>
      <Drawer placement="left" onClose={onDrawerClose} isOpen={isDrawerOpen}>
        <DrawerOverlay />
        <DrawerContent className="flex">
          <DrawerBody className="pl-5 bg-white w-[90%] shadow-right">
            <div className="flex justify-between items-center">
              <div className="flex p-2 items-center">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="https://image.hm.com/content/dam/abtestdepartmentimages/Ladies1.png?imwidth=150"
                />
                <p className="ml-3">Ladies</p>
              </div>
              <div className="p-2 text-xl">
                <HiArrowRight />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex p-2 items-center">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="https://image.hm.com/content/dam/abtestdepartmentimages/Men1.png?imwidth=150"
                />
                <p className="ml-3">Men</p>
              </div>
              <div className="p-2 text-xl">
                <HiArrowRight />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex p-2 items-center">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="https://image.hm.com/content/dam/abtestdepartmentimages/Baby1.png?imwidth=150"
                />
                <p className="ml-3">Baby</p>
              </div>
              <div className="p-2 text-xl">
                <HiArrowRight />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex p-2 items-center">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="https://image.hm.com/content/dam/abtestdepartmentimages/Kids1.png?imwidth=150"
                />
                <p className="ml-3">Kids</p>
              </div>
              <div className="p-2 text-xl">
                <HiArrowRight />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex p-2 items-center">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="https://image.hm.com/content/dam/abtestdepartmentimages/Home1.png?imwidth=150"
                />
                <p className="ml-3">H&M Home</p>
              </div>
              <div className="p-2 text-xl">
                <HiArrowRight />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex p-2 items-center">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="https://image.hm.com/content/dam/abtestdepartmentimages/Sport1.png?imwidth=150"
                />
                <p className="ml-3">Sport</p>
              </div>
              <div className="p-2 text-xl">
                <HiArrowRight />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex p-2 items-center">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="https://image.hm.com/content/dam/abtestdepartmentimages/Sale1.png?imwidth=150"
                />
                <p className="ml-3">Sale</p>
              </div>
              <div className="p-2 text-xl">
                <HiArrowRight />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex p-2 items-center">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="https://image.hm.com/content/dam/abtestdepartmentimages/Sustainability1.png?imwidth=150"
                />
                <p className="ml-3">Sustainability</p>
              </div>
              <div className="p-2 text-xl">
                <HiArrowRight />
              </div>
            </div>
            <div className="p-2">
              <p>Customer Service</p>
            </div>
            <div className="p-2">
              <p>Newsletter</p>
            </div>
          </DrawerBody>
          <DrawerCloseButton className="absolute right-2 top-56 " />
        </DrawerContent>
      </Drawer>
    </>
  );
};
