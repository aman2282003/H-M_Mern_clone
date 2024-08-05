import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiAdjustments, HiArrowRight } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useForm } from "react-hook-form";
import axios from "axios";
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
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
export const Navbar = () => {
   const toast = useToast();
  const { isAuth, setisAuth, token, settoken } = useContext(AuthContext);
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
  const [acceptTerms, setAcceptTerms] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const [emailUpdates, setEmailUpdates] = useState(false);

  const handleCheckboxChange = () => {
    setEmailUpdates(!emailUpdates);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleTermsChange = () => {
    setAcceptTerms(!acceptTerms);
  };

  const onSubmit = async (data) => {
    if (!acceptTerms) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }
    try {
      const response = await axios.post(
        "https://h-m-mern-clone.onrender.com/users/createuser",
        data
      );
      toast({
        title: "Account Created Successfully.",
        description: "Please Login for shopping.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      reset(); // Clear the form
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast({
          title: "User Already exisits.",
          description: "Please Login for shopping.",
          status: "failure",
          duration: 9000,
          isClosable: true,
        });
      } else {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
        alert("Failed to create user. Please check the console for details.");
      }
    }
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
                <Input className="border w-[100%] bg-white h-[50px] border-gray" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input className="border w-[100%] bg-white h-[50px] border-gray" />
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

  function InitialFocus2({ onOpen }) {
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
                Become a member — don’t miss out on deals, offers, discounts,
                and bonus vouchers.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl mt={4}>
                  <FormLabel>
                    Email<sup className="text-red-500 m-1">*</sup>
                  </FormLabel>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="p-2 border w-[100%] bg-white h-[50px] border-gray"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>
                    Create a password<sup className="text-red-500 m-1">*</sup>
                  </FormLabel>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                        message:
                          "Password must include at least one lowercase letter, one uppercase letter, and one number",
                      },
                    })}
                    className="p-2 border w-[100%] bg-white h-[50px] border-gray"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>
                    Date of birth<sup className="text-red-500 m-1">*</sup>
                  </FormLabel>
                  <input
                    type="date"
                    {...register("dateOfBirth", {
                      required: "Date of birth is required",
                    })}
                    className="p-2 border w-[100%] bg-white h-[50px] border-gray"
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-sm">
                      {errors.dateOfBirth.message}
                    </p>
                  )}
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>First name</FormLabel>
                  <input
                    type="text"
                    {...register("firstName")}
                    className="p-2 border w-[100%] bg-white h-[50px] border-gray"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Last name</FormLabel>
                  <input
                    type="text"
                    {...register("lastName")}
                    className="p-2 border w-[100%] bg-white h-[50px] border-gray"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Gender</FormLabel>
                  <select
                    {...register("gender", { required: "Gender is required" })}
                    className="p-2 border w-[100%] bg-white h-[50px] border-gray"
                  >
                    <option value="">Select a gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500 text-sm">
                      {errors.gender.message}
                    </p>
                  )}
                </FormControl>
                <div className="py-4">
                  <div>
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      checked={acceptTerms}
                      onChange={handleTermsChange}
                      required
                      className="mr-2"
                    />
                    <label htmlFor="acceptTerms" className="my-12 text-sm">
                      Yes, email me offers, style updates, and special invites
                      to sales and events.
                    </label>
                  </div>
                  <p className="my-4 text-sm">
                    Wish your inbox was more stylish? No problem, just subscribe
                    to our newsletter. Find out what's hot and happening in the
                    world of fashion, beauty, and home decor. Plus, you'll get
                    bonus vouchers, birthday offers, and special invites to
                    sales and events – straight to your inbox!
                  </p>
                  <p className="text-gray-500 text-sm">
                    By clicking ‘Become a member’, I agree to the H&M Membership{" "}
                    <a href="" target="_blank" className="underline">
                      Terms and conditions
                    </a>
                    .
                  </p>
                  <p className="text-sm text-gray-500 mt-3">
                    To give you the full membership experience, we will process
                    your personal data in accordance with the H&M's{" "}
                    <a
                      href="https://www.hm.com/privacy"
                      target="_blank"
                      className="underline"
                    >
                      Privacy Notice
                    </a>
                    .
                  </p>
                </div>
                <ModalFooter className="flex flex-col">
                  <button
                    type="submit"
                    className="text-white bg-black border border-black w-[100%] py-3 font-bold m-2"
                  >
                    Become an H&M member
                  </button>
                  <button
                    type="button"
                    onClick={onOpen}
                    className="bg-white border border-black text-black w-[100%] py-3"
                  >
                    Sign in
                  </button>
                </ModalFooter>
              </form>
            </ModalBody>
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
          {isAuth ? "My Account" : "Sign in"}
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
            <Link to="/member">H&M Membership</Link>
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
        <div className="w-[34%] hidden md:block">
          <Nav1 />
        </div>
        <div className="w-[32%]">
          <Nav2 />
        </div>
        <div className="w-[35%] flex justify-end">
          <Nav3 fitem={fitem} />
        </div>
      </div>
      <div
        className={`navbar ${
          isMenuActive ? "block" : "hidden"
        } absolute top-full left-0 w-full py-4 px-3`}
      ></div>
      <InitialFocus />
      <InitialFocus2 onOpen={onOpen} />
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
