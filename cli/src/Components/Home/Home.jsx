import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import BusinessCategory from "../Business/Category/BusinessCategory.jsx";
import Bgr from "./bgr1.png";
import { useAuth } from "../ProAuth/AuthPro.jsx";
import rgshinelogo from "../assets/rgshinelogo.png";
import digitalsollogo from "../assets/digitalsollogo.png";
import healthcarelogo from "../assets/healthcarelogo.png";
import dial24newslogo from "../assets/dial24newslogo.png";
import rudrakshagroup from "../assets/rudrakshagroup.png";
import dialkrohomepage2 from "../assets/dialkrohomepage2.png";
import dialkrohome3 from "../assets/dialkrohome3.png";
import dialkrohome4 from "../assets/dialkrohome4.png";
import dialkrohome5 from "../assets/dialkrohome5.png";
import dialkrohomepageimg from "../assets/dialkrohomepageimg.png";
import skylinelogo from "../assets/skylinelogo.png";
import howtojoin from "../assets/howtojoin.png";
import filltheform from "../assets/filltheform.png";

function Home() {
  const { isDarkMode } = useAuth();
  const [searchInput, setSearchInput] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    // Implement autocomplete suggestions logic here
  };

  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };


  const navigate = useNavigate();
  // const featuredCategories = [
  //   { name: "Restaurant", icon: "🍔" },
  //   { name: "Hospitals", icon: "☕" },
  //   { name: "Gym", icon: "💪" },
  //   { name: "School", icon: "💪" },
  //   { name: "AutoMotive", icon: "🍔" },
  //   { name: "Beauty & Spa", icon: "☕" },
  //   { name: "Hotels", icon: "💪" },
  //   { name: "Rent & Hostels", icon: "💪" },
  // ];

  //const testimonialData = [
  //  {
  //     quote: "Great directory! Found exactly what I needed. this is business directory website Its really help Us to grow our Business",
  //  author: "John Doe",
  //},
  //{
  // quote: "Increased my business visibility. Highly recommended! this is business directory website Its really help Us to grow our Business",
  // author: "Rakesh verma",
  //},
  //   // Add more testimonials as needed
  //];

  // Placeholder for actual business data and filtering logic
  const filteredListings = [1, 2, 3];

  const handleListingClick = (index) => {
    // Handle click on a business listing
  };

  const handleSearchButtonClick = () => {
    // Redirect to the business page with the search query as a parameter
    navigate(`/businesses?search=${searchInput}`);
  };
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="bg-cover bg-center h-100 bg-gradient-to-r from-rose-900 via-red-700 to-black flex items-center justify-center text-neutral- dark:bg-neutral-800">
        <div className="bg-cover bg-center h-96 flex items-center justify-center text-neutral- dark:bg-neutral-800">
          <div className="text-left">
            <h1 className="text-5xl font-bold mb-4 text-white dark:bg-neutral-800">
              Businesses Directory
            </h1>
            <p className="text-lg text-white font-bold dark:bg-neutral-800">
              Your one-stop destination for finding the best businesses in town.
            </p>
            <div className="mt-4 flex items-center dark:bg-neutral-800 dark:text-white">
              <input
                type="text"
                placeholder="Search for businesses..."
                value={searchInput}
                onChange={handleSearchInputChange}
                className="w-full p-4 rounded-md sm:text-sm focus:outline focus:ring focus:border-blue-300"
                aria-label="Search for businesses"
              />
              <button className="ml-4 bg-red-500 text-white rounded-md px-6 py-4" onClick={handleSearchButtonClick}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* {/ {/ Featured Categories /} /} */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 m-10 dark:bg-neutral-800 dark:text-white">
        {/* <BusinessCategory /> */}

{/* {featuredCategories.map((category, index) => (
          <div className="max-w-1xl mx-1 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-6 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
              <img  className="object-cover object-top w-full" src="https://m.media-amazon.com/images/I/51Zi++kBCiL._AC_UF1000,1000_QL80_.jpg" alt="Mountain"/>
            </div>        
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img className="object-cover object-center h-32"
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg"
                alt="Woman looking front"
              />
            </div>
            <div className="text-center mt-1" key={index}>
              <span className="text-3xl mb-2">{category.icon}</span>
              <h2 className="font-bold">{category.name}</h2>
              <p className="text-red-500 font-bold">Your Business</p>
            </div>

            <div className="p-4 border-t mx-6 mt-1">
              <Link
                to="/businesses"
                className="w-1/2 block mx-auto rounded-full bg-red-600 hover:shadow-lg font-semibold text-white px-4 text-center py-2"
              >
                Explore Now
              </Link>
            </div>
          </div>
        ))}
        */}
      </div>

      <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:bg-neutral-800 dark:text-white">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl dark:text-white">
              <span className="block xl:inline">Grow Your Business</span>
              <br />
              <span className="block text-red-600 xl:inline">with Dialkro</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 dark:text-white">
            Market competition is fierce and an online presence is most mandatory if you want to stay relevant. Scaling any business is not easy, whether it’s a physical location or a business online. To help all small scale businesses, we build dialkro (business listing space) a place where business owners can list their businesses to find the right customers or clients for their business. With the internet connecting people worldwide, online businesses have the potential to reach maximum audience. We are on a high aim to provide all small and medium enterprises a competitive free market.
            </p>
            {/* {/ <!-- Button Section --> /} */}
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  to="/new"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/businesses"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </Link>
              </div>
            </div>
            {/* {/ <!-- End of Button Section --> /} */}
          </div>

          {/* {/ <!--   Image Section     --> /} */}
          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 x ">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full dark:backdrop-blur-md"
              src="https://akam.cdn.jdmagicbox.com/images/icontent/cms/career_topbannernw.png"
              alt=""
            />
          </div>
          {/* {/ <!--   End of Image Section     --> /} */}
        </div>
      </section>

      <div className="grid lg:grid-cols-2 gap-3 p-5">
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
          <figure className="relative w-full h-60">
            <img
              className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
              src={dialkrohome3}
              alt="Image Description"
            />
          </figure>
          <figure className="relative w-full h-60">
            <img
              className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
              src={dialkrohomepage2}
              alt="Image Description"
            />
          </figure>
        </div>
        <figure className="relative w-full h-72 sm:h-96 lg:h-full">
          <img
            className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
            src={dialkrohomepageimg}
            alt="Image Description"
          />
        </figure>
      </div>

      <div className="grid lg:grid-cols-3 gap-3 p-5">
        <section className="px-5">
          <div className="bg-gradient-to-br from-red-400 via-red-400 to-black-400 p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-20 flex-wrap">
            <div className="flex flex-col gap-6">
              <div className="">
                <span className="text-gray-200">Todays Ads</span>
                <br />
                <span className="text-gray-200 text-4xl text-white font-semibold">
                  20% off every Product
                </span>
              </div>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-black bg-white hover:bg-gray-50 px-4 py-2 rounded-lg w-fit  ease duration-300 flex gap-1 items-center group"
              >
                <span>Buy now</span>
                <svg
                  data-v-e660a7a7=""
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="group-hover:translate-x-1 transition-transform ease duration-200"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                  ></path>
                </svg>
              </a>
            </div>
            <div></div>
          </div>
        </section>
        <section className="px-5">
          <div className="bg-gradient-to-br from-red-400 via-red-400 to-black-400 p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-20">
            <div className="flex flex-col gap-6">
              <div className="">
                <span className="text-gray-200">Black friday sale</span>
                <br />
                <span className="text-gray-200 text-4xl text-white font-semibold">
                  20% off every Product
                </span>
              </div>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-black bg-white hover:bg-gray-50 px-4 py-2 rounded-lg w-fit  ease duration-300 flex gap-1 items-center group"
              >
                <span>Buy now</span>
                <svg
                  data-v-e660a7a7=""
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="group-hover:translate-x-1 transition-transform ease duration-200"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                  ></path>
                </svg>
              </a>
            </div>
            <div></div>
          </div>
        </section>
        <section className="px-5">
          <div className="bg-gradient-to-br from-red-400 via-red-400 to-black-400 p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-20">
            <div className="flex flex-col gap-6">
              <div className="">
                <span className="text-gray-200">Todays Ads</span>
                <br />
                <span className="text-gray-200 text-4xl text-white font-semibold">
                  20% off every Product
                </span>
              </div>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-black bg-white hover:bg-gray-50 px-4 py-2 rounded-lg w-fit  ease duration-300 flex gap-1 items-center group"
              >
                <span>Buy now</span>
                <svg
                  data-v-e660a7a7=""
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="group-hover:translate-x-1 transition-transform ease duration-200"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                  ></path>
                </svg>
              </a>
            </div>
            <div></div>
          </div>
        </section>
      </div>

      <div className="pb-16">
        <dh-component>
          <div className="container mx-auto pt-16">
            <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
              <h1 className="text-center font-bold text-4xl">
                This is our Popular Brand Partners
              </h1>
              <p
                tabIndex="0"
                className="focus:outline-none text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto"
              >
                Our success has come from being committed to the property and
                investing in the development of the product to maximize sales.
                At the same time and maintaining the integrity.
              </p>
            </div>
            <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src={rgshinelogo}
                  alt="Adidas"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src={digitalsollogo}
                  alt="Chanel"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src={healthcarelogo}
                  alt="Nike"
                  role="img"
                />
              </div>
              <div className="w-5/8 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src={rudrakshagroup}
                  alt="Toyota"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src={dial24newslogo}
                  alt="GS1"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src={skylinelogo}
                  alt="BlackBerry"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src={digitalsollogo}
                  alt="Mini"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src={rgshinelogo}
                  alt="Honda"
                  role="img"
                />
              </div>
            </div>
          </div>
        </dh-component>
        {/* <div className="flex  items-center justify-center p-10">
          <div className="w-max">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-black font-bold">
              Our success has come from being committed to the property
            </h1>
          </div>
        </div> */}
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-red-600 tracking-widest font-medium title-font mb-1">
              Business Owner Testimonial
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Testimonials Of Our Client
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Dialkro has revolutionized our business, providing an indispensable platform for connecting with clients. Their intuitive interface and exceptional customer support make them stand out. Dialkro's impact on our growth is undeniable, consistently exceeding our expectations. We highly recommend Dialkro to any business seeking to enhance its online presence and reach.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-red-800 font-medium title-font mb-2">
              Rg Shine
              </h2>
              <p className="leading-relaxed text-base mb-4">
              Dialkro has been an invaluable tool for our business. Their platform helped us reach a wider audience and connect with potential clients effortlessly. The team at Dialkro is professional, responsive, and always willing to go the extra mile to ensure our success.
              </p>
           
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-red-800 font-medium title-font mb-2">
                Healing Guidnce
              </h2>
              <p className="leading-relaxed text-base mb-4">
              We have been using Dialkro for our business listings for several years now, and it has consistently delivered great results. The platform is user-friendly, and their customer support team is top-notch. We highly recommend Dialkro to any business looking to increase their online visibility.
              </p>
            
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-red-800 font-medium title-font mb-2">
              Global Health Care 
              </h2>
              <p className="leading-relaxed text-base mb-4">
              Working with Dialkro has been a game-changer for our business. Their platform has helped us attract new customers and expand our reach in ways we never thought possible. The team at Dialkro is dedicated, knowledgeable, and always willing to help. We couldn't be happier with the results.
              </p>
           
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-red-800 font-medium title-font mb-2">
               Skyline Education
              </h2>
              <p className="leading-relaxed text-base mb-4">
              We started using Dialkro to promote our business, and the results have been fantastic. Their platform is easy to use, and their customer service team is always available to assist us with any questions or concerns. Dialkro has helped us increase our online visibility and attract new clients. We highly recommend them to any business looking to grow.
              </p>
            
            </div>
          </div>
          {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
        </div>
      </section>

      {/* kamla */}

      <div className="flex flex-col bg-white py-4 px-5">
        <div className="py-4">
          <div className=" py-6">
            <div className="text-4xl font-bold text-black">Popular Searches</div>
          </div>
        </div>
      </div>


        

          <div className="flex flex-col px-20 md:px-10 md:flex-row items-center justify-center gap-6">
         
          <div className="">
              <img
                src={dialkrohome4}
                alt="Featured Image 1"
                className="rounded-t-xl"
              />

              <div className="px-9 pt-10 pb-14 bg-gradient-to-r from-rose-900 via-red-700 to-black rounded-b-lg">
                <div className="text-white space-y-4">
                  <h3 className="text-xl font-bold lead-xl bold">RG Shine is our Popular Business</h3>
                  <div className="text-lg font-light">
                  At RG Shine we believe that a clean home is the foundation of a healthy and happy life. 
                  </div>
                </div>
                <div className="flex justify-between pt-8">
                  <ul className="flex flex-col gap-y-2.5">
                    <li className="flex space-x-3 text-white">
                      <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                        alt="checked--v1"
                        className="w-6 h-6"
                      />
                      <span className="paragraph-l font-bold">Hand Wash</span>
                    </li>
                 
                    <li className="flex space-x-3 text-white">
                      <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                        alt="checked--v1"
                        className="w-6 h-6"
                      />
                      <span className="paragraph-l font-bold">Glass Cleaner</span>
                    </li>
                    <li className="flex space-x-3 text-white">
                      <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                        alt="checked--v1"
                        className="w-6 h-6"
                      />
                      <span className="paragraph-l font-bold">Floor Cleaner</span>
                    </li>
                  </ul>
                  <div className="flex flex-col justify-end">
                    <Link
                      to="/new"
                      className="py-2 px-4 bg-white text-primary-200 paragraph-m  rounded-full"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                src={dialkrohome5}
                alt="Featured Image 1"
                className="rounded-t-xl"
              />

              <div className="px-9 pt-10 pb-14 bg-gradient-to-r from-rose-900 via-red-700 to-black rounded-b-lg">
                <div className="text-white space-y-4">
                  <h3 className="text-xl font-bold lead-xl bold">Digital Sol</h3>
                  <div className="text-lg font-light">
                  Digital Sol is a powerful tool that can revolutionize the way your digital marketing agency operates.
                  </div>
                </div>
                <div className="flex justify-between pt-8">
                  <ul className="flex flex-col gap-y-2.5">
                    <li className="flex space-x-3 text-white">
                      <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                        alt="checked--v1"
                        className="w-6 h-6"
                      />
                      <span className="paragraph-l font-bold">Web Design</span>
                    </li>
                    <li className="flex space-x-3 text-white">
                      <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                        alt="checked--v1"
                        className="w-6 h-6"
                      />
                      <span className="paragraph-l font-bold">Graphic Design</span>
                    </li>
                    <li className="flex space-x-3 text-white">
                      <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png"
                        alt="checked--v1"
                        className="w-6 h-6"
                      />
                      <span className="paragraph-l font-bold">Social Media</span>
                    </li>
                  </ul>
                  <div className="flex flex-col justify-end">
                    <Link
                      to="/new"
                      className="py-2 px-4 bg-white text-primary-200 paragraph-m  rounded-full"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
  


          <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32  mt-10">
          <h1 className="text-center  text-5xl font-bold pb-10 text-white">Getting Started Is Easy</h1>
    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                class="h-8 w-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                </path>
                            </svg>
                        </span>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                            Choose Your Role And Apply
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                        I'm excited about the Marketing Manager role at Dialkro. With a proven track record in digital marketing and strategy, I'm eager to leverage my skills to drive growth. Let's discuss how I can contribute to Dialkro's success.
                        </p>
                        <div className="mt-6">
                            <Link className="inline-flex rounded-lg  bg-red-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-red-700 hover:ring-pink-700"
                              to="/new">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img loading="lazy" width="647" height="486"
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none text-transparent"
                         src={howtojoin}/>
                </div>
            </div>
        </div>
    </div>



    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl  bg-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                class="h-8 w-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                         Fill the business form To add your business with use.
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            
Please fill out the business submission form to add your business to Dialkro's directory. Provide accurate details including business name, category, address, contact information, and a brief description of your services/products. We'll review your submission promptly and contact you if any further information is needed. Thank you for choosing Dialkro!
                        </p>
                        <div className="mt-6">
                            <Link className="inline-flex rounded-lg  bg-red-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                           to="/new">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none text-transparent"
                        src={filltheform}/>
                </div>
            </div>
        </div>
    </div>



    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl  bg-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                           When you Complete all of this , Our team will contact you.
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                        Once you've completed the business submission form, our dedicated team will promptly review your information. Rest assured, if any additional details are required, we'll reach out to you promptly. Thank you for choosing Dialkro—we look forward to potentially featuring your business in our directory
                        </p>
                        <div className="mt-6">
                            <Link className="inline-flex rounded-lg  bg-red-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                to="/new">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img loading="lazy" width="646" height="485"
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none  text-transparent"
                     
                        src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"/>
                </div>
            </div>
        </div>
    </div>
</div>
  

<div className="px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10 serviceback" >
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">


            <div
                className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Social Media Marketing</p>
                <p className="mt-2 text-sm text-slate-500">Team BrainEdge education is a bunch of highly focused, energetic
                    set of people.</p>
            </div>

            <div
                className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Web Development</p>
                <p className="mt-2 text-sm text-slate-500">Know where you stand and what next to do to succeed .</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Wordpress Development</p>
                <p className="mt-2 text-sm text-slate-500">Professional Advice for higher education abroad and select the
                    top institutions worldwide.</p>
            </div>


            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">
                SEO</p>
                <p className="mt-2 text-sm text-slate-500">Yet another year ! Yet another jewel in our crown!</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50  cursor-pointer">
                <span className="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3 ">Graphic Design</p>
                <p className="mt-2 text-sm text-slate-500">Get Topic-Wise Tests, Section- Wise and mock tests for your
                    preparation.</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50  cursor-pointer">
                <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Shopify SEO</p>
                <p className="mt-2 text-sm text-slate-500">Visa process by helping you create the necessary documentation
                </p>
            </div>
            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">
                Amazon SEO</p>
                <p className="mt-2 text-sm text-slate-500">Yet another year ! Yet another jewel in our crown!</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Android Development</p>
                <p className="mt-2 text-sm text-slate-500">Get Topic-Wise Tests, Section- Wise and mock tests for your
                    preparation.</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">SMO Service</p>
                <p className="mt-2 text-sm text-slate-500">Visa process by helping you create the necessary documentation
                </p>
            </div>




        </div>

        <div className="w-full   bg-red-700 shadow-xl shadow-red-200 py-10 px-20 flex justify-between items-center">
            <p className=" text-white"> <span className="text-4xl font-medium">Our Service</span> <br/> <span className="text-lg">Book For Free Career Consultation Today ! </span></p>
            <Link className="px-4 py-2  font-medium text-slate-700 shadow-xl  hover:bg-white duration-150  bg-yellow-400" to="/new">BOOK AN APPOINTMENT </Link>
        </div>

    </div>



       
     

      {/* hello */}
    </div>
  );
}

export default Home;
