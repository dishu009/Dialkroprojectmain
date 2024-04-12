import React, { useState } from "react";
import lg from "./lg.png";
import { useAuth } from "./ProAuth/AuthPro.jsx";
import NavbarToggel from "./Navbar/NavbarToggel.jsx";
// import jwtDecode from 'jwt-decode'
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineUser,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";

function Navbar() {
  const { islogin, logOutNow } = useAuth();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
 
  
  return (
    <>
      <header className="shadow-md sticky top-0 z-10  backdrop-blur-md  dark:bg-neutral-900 dark:text-white font-sans">
        <section className="flex items-center lg:justify-center max-sm:flex-col relative py-3 px-10 border-rose-700 border-b lg:min-h-[80px] max-lg:min-h-[60px] ">
          <Link
            to="/"
            className="max-md:w-full max-sm:mb-4 bg-gradient-to-r text-4xl font-bold  inline-block text-transparent bg-clip-text"
          >
            <h1 className="animate-text bg-gradient-to-r  from-rose-900 via-red-700 to-black bg-clip-text text-transparent text-3xl font-black">
              Dialkro
            </h1>
          </Link>
          <div className="md:absolute md:right-10 flex flex-col md:flex-row items-center p-2 max-md:ml-auto">
            {/* Navigation Item */}
            {islogin ? (
              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:text-rose-700">
                <Link to="/profile" className="text-sm font-medium">
                  Profile
                </Link>
              </div>
            ) : (
              <>
                <button className="ml-2 flex cursor-pointer items-center gap-x-1  py-2 px-4 hover:text-rose-700 hover:animate-pulse">
                  <Link to="/register" className="">
                    <span className="text-sm font-medium">SignUp</span>
                  </Link>
                </button>
              </>
            )}
            <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:text-rose-700 hover:animate-pulse">
              <Link to="/businesses" className="">
                <span className="text-sm font-medium">Business</span>
              </Link>
            </div>

            {islogin ? (
              <>
                <button
                  onClick={logOutNow}
                  className="ml-4 flex cursor-pointer items-center  py-2 px-4 hover:text-rose-700 hover:animate-pulse"
                >
                  <span className="text-sm font-medium">Sign out</span>
                </button>
              </>
            ) : (
              <>
                <button
                  className="ml-2 flex cursor-pointer items-center gap-x-1   py-2 px-4  hover:text-rose-700 hover:animate-pulse"
                  onClick={() => {}}
                >
                  <Link to="/login">
                    <span className="text-sm font-medium">Sign in</span>
                  </Link>
                </button>
              </>
            )}

            {/* <div className="inline-block border-gray-300 border-l-2 pl-6 cursor-pointer">
              <NavbarToggel />
            </div> */}
          </div>
        </section>
        <div
          className="flex flex-wrap py-3.5 px-10 overflow-x-auto"
        >
          <ul
            id="collapseMenu"
            className={`lg:flex font-sans font-thin text-xl justify-center lg:space-x-10 max-lg:space-y-3 w-full max-lg:mt-2 ${isOpen ? 'block' : 'hidden'}`}
            // className="lg:!flex justify-center lg:space-x-10 max-lg:space-y-3 max-lg:hidden w-full max-lg:mt-2 "
            // className={isOpen ? 'block' : 'hidden'}
            //    id="collapseMenu"
          >
            <li className="max-lg:border-b max-lg:py-2">
              <Link className="hover:text-rose-500  text-[16px] block font-medium" to="/">
                {" "}
                Home
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <Link
                className="hover:text-rose-500  text-[16px] block font-medium"
                to="/about"
              >
                {" "}
                About
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <Link
                className="hover:text-rose-500  text-[16px] block font-medium"
                to="/service"
              >
                {" "}
                Service
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <Link className="hover:text-rose-500  text-[16px] block font-medium" to="/blog">
                {" "}
                Blog
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <Link className="hover:text-rose-500  text-[16px] block font-medium" to="/team">
                {" "}
                Team
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <Link className="hover:text-rose-500  text-[16px] block font-medium" to="/portfolio">
                {" "}
                Portfolio
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <Link className="hover:text-rose-500  text-[16px] block font-medium" to="/contactus">
                {" "}
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex ml-auto lg:order-1 lg:hidden">
            <button id="toggle" className="ml-7" onClick={toggleMenu}>
              <svg
                className="w-7 h-7"
                fill="#747474"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

{
  /* <li className="max-lg:border-b max-lg:py-2">
              <a
                href=""
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
              >
                About
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <a
                href=""
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
              >
                Contact
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <a
                href=""
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
              >
                Source
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <a
                href=""
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
              >
                Store
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <a
                href=""
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
              >
                Fashion
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <a
                href=""
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
              >
                Partner
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <a
                href=""
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
              >
                More
              </a>
            </li>




















  /* <div className=" sticky top-0 z-0 backdrop-blur-md  dark:bg-neutral-800 dark:text-white">
        <div className="border py-3 px-6">
          <div className="flex justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-semibold text-gray-800 dark:text-white">
                  Dialkro
                </span>
              </Link>
            </div>

            <div className="ml-6 flex flex-1 gap-x-3">
              <div className="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-[#4094F7] py-2 px-4 text-white hover:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span className="text-sm font-medium">Categories</span>
              </div>

              <input
                type="text"
                className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm"
                defaultValue="DJI phantom"
              />
            </div>

            <div className="ml-2 flex">
              {islogin ? (
                <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path
                      fillRule="evenodd"
                      d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <Link to="/profile" className="text-sm font-medium">
                    Profile
                  </Link>
                </div>
              ) : (
                <>
                  <button className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
                    <Link to="/register" className="hover:text-blue-500">
                      <span className="text-sm font-medium">Signup</span>
                    </Link>
                  </button>
                </>
              )}
              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>

                <Link to="/businesses" className="hover:text-blue-500">
                  <AiOutlineAppstoreAdd className="text-2xl" />
                  <span className="text-sm font-medium">Business</span>
                </Link>

                <NavbarToggel />
              </div>

              {islogin ? (
                <>
                  <button
                    onClick={logOutNow}
                    className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100"
                  >
                    <span className="text-sm font-medium">Sign out</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100"
                    onClick={() => {}}
                  >
                    <Link to="/login">
                      <span className="text-sm font-medium">Sign in</span>
                    </Link>
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-x-2 py-1 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">India</span>
            </div>

            <div className="flex gap-x-8">
              <Link to="/about">
                <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                  About
                </span>
              </Link>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Best seller
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                New Releases
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Books
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Computers
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Fashion
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Health
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Pharmacy
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Toys & Games
              </span>
            </div>

            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
              Becoma a seller
            </span>
          </div>
        </div>
      </div> */
}
