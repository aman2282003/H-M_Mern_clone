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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSecondModalOpen,
    onOpen: onSecondModalOpen,
    onClose: onSecondModalClose,
  } = useDisclosure();
  const [showSignIn, setShowSignIn] = useState(false);
  const [showBag, setShowBag] = useState(false);
  const [cartprice, setCartPrice] = useState(0);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const [emailUpdates, setEmailUpdates] = useState(false);

  const handleCheckboxChange = () => {
    setEmailUpdates(!emailUpdates);
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

  function InitialFocus() {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="font-bold">Sign in</ModalHeader>
            <ModalCloseButton />
            <p className="px-4 text-center">
              Become a member — don’t miss out on deals, offers, discounts and
              bonus vouchers.
            </p>

            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <input className="border w-[100%] bg-white h-[50px] border-gray" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <input className="border w-[100%] bg-white h-[50px] border-gray" />
              </FormControl>
            </ModalBody>

            <ModalFooter className="flex flex-col">
              <button mr={3} className="bg-black text-white w-[100%] py-3">
                Sign in
              </button>
              <button
                onClick={onSecondModalOpen}
                className="text-black border border-black w-[100%] py-3 font-bold m-2"
              >
                Become a member
              </button>
              <p className=" underline">H&M Membership</p>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  function InitialFocus2() {
    return (
      <>
        <Modal isOpen={isSecondModalOpen} onClose={onSecondModalClose}>
          <ModalOverlay />
          <ModalContent maxH="90vh" overflowY="auto">
            <ModalHeader className="font-bold text-center">
              Become an H&M member
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <p className="px-4 text-center text-sm">
                Become a member — don’t miss out on deals, offers, discounts and
                bonus vouchers.
              </p>
              <FormControl mt={4}>
                <FormLabel>
                  Email<sup className="text-red-500 m-1">*</sup>
                </FormLabel>
                <input
                  type="text"
                  className="border w-[100%] bg-white h-[50px] border-gray"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>
                  Create a password<sup className="text-red-500 m-1">*</sup>
                </FormLabel>
                <input
                  type="text"
                  className="border w-[100%] bg-white h-[50px] border-gray"
                />
                <p className="text-gray-500 text-sm">
                  8 characters 1 lowercase 1 uppercase 1 number
                </p>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>
                  Date of birth<sup className="text-red-500 m-1">*</sup>
                </FormLabel>
                <input
                  type="date"
                  className="border w-[100%] bg-white h-[50px] border-gray"
                />
                <p className="text-gray-500 text-sm">
                  H&M wants to give you a special treat on your birthday
                </p>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>First name</FormLabel>
                <input
                  type="text"
                  className="border w-[100%] bg-white h-[50px] border-gray"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <input
                  type="text"
                  className="border w-[100%] bg-white h-[50px] border-gray"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Gender</FormLabel>
                <select className="border w-[100%] bg-white h-[50px] border-gray">
                  <option value="">Select a gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Postal code</FormLabel>
                <input
                  type="number"
                  className="border w-[100%] bg-white h-[50px] border-gray"
                />
              </FormControl>

              <div className="py-4">
                <div>
                  <input
                    type="checkbox"
                    id="emailUpdates"
                    checked={emailUpdates}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="emailUpdates" className="my-12 text-sm">
                    Yes, email me offers, style updates, and special invites to
                    sales and events.
                  </label>
                </div>
                <p className="my-4 text-sm">
                  Wish your inbox was more stylish? No problem, just subscribe
                  to our newsletter. Find out what's hot and happening in the
                  world of fashion, beauty, and home decor. Plus, you'll get
                  bonus vouchers, birthday offers, and special invites to sales
                  and events – straight to your inbox!
                </p>
                <p className="text-gray-500 text-sm ">
                  By clicking ‘Become a member’, I agree to the H&M Membership{" "}
                  <a href="" target="_blank" className="underline">
                    Terms and conditions
                  </a>
                  .
                </p>
                <p className="text-sm text-gray-500 mt-3">
                  To give you the full membership experience, we will process
                  your personal data in accordance with the H&M's
                  <a
                    href="https://www.hm.com/privacy"
                    target="_blank"
                    className="underline "
                  >
                    Privacy Notice
                  </a>
                  .
                </p>
              </div>
            </ModalBody>

            <ModalFooter className="flex flex-col">
              <button className="text-white bg-black border border-black w-[100%] py-3 font-bold m-2">
                Become an H&M member
              </button>
              <button className="bg-white border border-black text-black w-[100%] py-3">
                Sign in
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  const Nav3 = ({ fitem }) => (
    <div className="space-x-4 text-md flex sign_in">
      <div
        className="flex items-center text-md space-x-2 relative"
        onMouseEnter={() => setShowSignIn(true)}
        onMouseLeave={() => setShowSignIn(false)}
      >
        <IoIosContact className="w-6 h-6" />
        <p className="hidden md:flex " onClick={onOpen}>
          Sign in
        </p>
        {showSignIn && (
          <div className="hidden md:block z-10 absolute top-full left-0 w-[230px] text-sm bg-white p-2 ">
            <button
              className="bg-black text-white w-full p-2 mb-5"
              onClick={onOpen}
            >
              Sign in
            </button>
            <p>My Account</p>
            <p>H&M Membership</p>
            <p className="text-gray-500" onClick={onSecondModalOpen}>
              Not a Member yet! Join there
            </p>
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
      <InitialFocus />
      <InitialFocus2 />
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
          <DrawerCloseButton className="mt-[290px] mr-[-20px] " />
        </DrawerContent>
      </Drawer>
    </>
  );
};
