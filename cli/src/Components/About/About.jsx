import React from "react";
import { FaCheck } from "react-icons/fa";

import { useAuth } from "../ProAuth/AuthPro.jsx";
import dailkroabout from "../assets/dailkroabout.png";
import dailkroabout1 from "../assets/dailkroabout1.png";
import dialkrobusinessdirectory from "../assets/dialkrobusinessdirectory.png";
function About() {
  const { isDarkMode } = useAuth();
  return (
    <>
      <div className={isDarkMode ? "dark" : ""}>
        <div className="relative overflow-hidden bg-white dark:bg-neutral-800 dark:text-white">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                  Grow With Us And Build Your Business.
                </h1>
                <p className="mt-4 text-xl text-gray-500 ">
                  Dialkro Ads Help You Achieve Your Goals elements of a world
                  that doesn't care if you develop or die.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 dark:bg-transparent sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src="https://hbr.org/resources/images/article_assets/2022/08/Hero-Image.png"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://cdn.staticmb.com/mbbuyerutilitystatic/images//area-calc/prop-type-img/Shops.png"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://www.aurusjewels.com/cdn/shop/articles/indian_wedding_planning_guide_ultimate.jpg?v=1679913681"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://emeritus.org/wp-content/uploads/sites/3/2023/04/what-does-a-business-analyst-do.png"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/5/Desk/2021_5$largeimg_1561286434.jpeg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPp73im34ZqOjOnX1hxN_dyOmYRd90VgAII2rcs8e6MBBiB-7fxXRYFjIm9eXYIVgxTjE&usqp=CAU"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/07/bb/b8/luxurious-inside.jpg?w=500&h=400&s=1"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-red-600 py-3 px-8 text-center font-medium text-white hover:bg-red-800"
                  >
                    Check Business
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {/ {/ about us card b/anne r /} /} */}
        <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Dialkro help you to Achieve{" "}
                </span>
                <br />
                <span className="block text-red-600 xl:inline">your Goals</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Welcome to Dialkro, the ultimate destination for discovering and
                connecting with businesses near you. Whether you're in search of
                a cozy café, a reliable plumber, or the perfect yoga studio,
                Dialkro simplifies your search by providing a comprehensive
                directory of local businesses right at your fingertips.
              </p>
              {/* {/ {/ <!-- Button Section --> /} /} */}
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
              {/* {/ {/ <!-- End of Button Section --> /} /} */}
            </div>

            {/* {/ {/ <!--   Image Section     --> /} /} */}
            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src={dailkroabout}
                alt=""
              />
            </div>
          </div>
        </section>

        {/* {/ {/ Other Business  /} /} */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div>
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-red-600">
                  Everything you need
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Why should you choose Dialkro?
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  At Dialkro, we believe in empowering communities by fostering
                  connections between consumers and businesses. Our platform not
                  only helps users discover new and exciting local spots but
                  also assists businesses in reaching their target audience,
                  promoting growth and sustainability within the community.
                </p>
              </div>
              <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-9">
                  <dt className="font-semibold text-gray-900 flex items-center">
                    <FaCheck className="text-red-600" />
                    About Us
                  </dt>
                  <dd className="mt-2">
                    Dialkro Limited is India's No. 1 Local Search engine that
                    provides local search related services to users across India
                    through multiple platforms such as website, mobile website,
                    Apps over the telephone and text (SMS).
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="font-semibold text-gray-900 flex items-center">
                    <FaCheck className="text-red-600" />
                    Dialkro Advertisement
                  </dt>
                  <dd className="mt-2">
                    Market Your Business to New Users. Grow Your Revenue step 3
                    Get More Walk-in Customers
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="font-semibold text-gray-900 flex items-center">
                    <FaCheck className="text-red-600" />
                    Corporate Information
                  </dt>
                  <dd className="mt-2">
                    The company's operations began in 2015 with offering local
                    search services under the Dialkro brand, which is
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="font-semibold text-gray-900 flex items-center">
                    <FaCheck className="text-red-600" />
                    Key Highlights
                  </dt>
                  <dd className="mt-2">
                    Pan India presence: Services offered all over India across
                    250+ cities.
                  </dd>
                  <dd className="mt-1">
                    Large Online community of engaged users
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="font-semibold text-gray-900 flex items-center">
                    <FaCheck className="text-red-600" />
                    Dialkro's Mission
                  </dt>
                  <dd className="mt-2">
                    To provide fast, free, reliable, and comprehensive
                    information to our users and enable discovery and
                    transactions for all products and services.
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="font-semibold text-gray-900 flex items-center">
                    <FaCheck className="text-red-600" />
                    Leadership Team
                  </dt>
                  <dd className="mt-2">
                    Join us in building stronger, more connected communities.
                    Explore, discover, and connect with Dialkro today.
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="font-semibold text-gray-900 flex items-center">
                    <FaCheck className="text-red-600" />
                    Reporting
                  </dt>
                  <dd className="mt-2">
                    Find exactly what you need, precisely when you need it, with
                    our user-friendly platform designed to cater to your
                    specific requirements. Explore a diverse range of businesses
                    across various categories, all conveniently organized for
                    easy access.{" "}
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="font-semibold text-gray-900 flex items-center">
                    <FaCheck className="text-red-600" />
                    Web Development
                  </dt>
                  <dd className="mt-2">
                    Our intuitive search function ensures that you can locate
                    the services or products you're looking for with just a few
                    clicks.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* {/ our team  /} */}

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto bg-red">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 ">
              <div>
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                  Our awesome <br /> work
                </h1>

                <div className="mt-2">
                  <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
                  <span className="inline-block w-3 h-1 ml-1 rounded-full bg-red-500"></span>
                  <span className="inline-block w-1 h-1 ml-1 rounded-full bg-red-500"></span>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-red-600 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Transaction Enabled Website
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Get a professional looking website with your own domain
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-red-600 bg-red-100 rounded-xl md:mx-4 dark:text-white dark:bg-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Smart Lead Management System
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    View and track all your leads at one place
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Online Catalogue
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Showcase your product and service offerings to potential
                    customers
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src={dialkrobusinessdirectory}
                alt=""
              />
            </div>
          </div>

          <hr className="border-gray-200 my-12 dark:border-gray-700" />

          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1"></div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1"></div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1"></div>

            <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
              <svg
                className="h-5 mt-1 text-gray-500 fill-current dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 278.7 36.3"
              >
                <g>
                  <path
                    class="st0"
                    d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6m6.2-7.1h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3m-27.5 29c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2m-61.6.1h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.7h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
              <svg
                className="h-8 text-gray-500 fill-current dark:text-gray-300"
                viewBox="0 0 2270 546"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-rule="evenodd">
                  <path
                    d="M888.413 394.397l-31.127 144.717h-71.593L903.977 14.642h84.81l111.28 524.472h-72.371l-30.35-144.717H888.413zm100.373-58.364l-24.124-125.3c-7.003-35.797-14.007-82.463-19.441-119.828h-3.126c-5.434 38.13-13.242 86.365-20.22 119.827l-24.902 125.301h91.813zM1373.34.648v441.205c0 28.806 1.556 70.828 3.1 97.274h-63.02l-4.67-45.9h-2.334c-12.451 26.445-41.244 52.138-79.362 52.138-70.037 0-112.837-76.275-112.837-193.755 0-133.848 56.794-196.881 116.728-196.881 30.336 0 54.46 14.02 67.689 42.8h1.556V.648h73.15zm-73.163 304.258c0-6.991 0-15.551-.778-23.359-3.89-34.227-23.345-63.798-49.79-63.798-45.927 0-61.477 63.798-61.477 133.848 0 77.818 20.232 132.278 59.142 132.278 16.342 0 38.118-8.56 50.569-53.681 1.556-6.226 2.334-15.577 2.334-24.111V304.906zm247.399 240.446c-75.471 0-129.957-64.59-129.957-194.52 0-137.752 64.576-196.116 133.835-196.116 74.705 0 128.387 66.924 128.387 194.546 0 150.19-73.927 196.09-131.5 196.09h-.765zm2.321-57.573c45.122 0 55.251-80.153 55.251-137.726 0-56.82-10.116-137.739-56.794-137.739-48.26 0-57.586 80.919-57.586 137.74 0 63.02 10.895 137.725 58.364 137.725h.765zM1723.938.648h73.137V203.74h1.556c19.455-34.227 45.913-49.025 79.375-49.025 64.577 0 105.055 73.15 105.055 189.099 0 135.391-55.25 201.537-117.506 201.537-37.353 0-58.364-20.246-74.719-53.708h-3.086l-3.904 47.47h-63.02c1.556-25.668 3.112-68.468 3.112-97.274V.648zm73.137 404.618c0 8.586.778 17.146 3.113 23.358 11.66 45.926 34.24 55.251 49.012 55.251 43.579 0 59.92-57.572 59.92-135.391 0-72.371-17.106-130.735-60.698-130.735-24.124 0-43.578 28.793-49.025 56.03-1.557 7.781-2.335 17.91-2.335 25.68v105.807h.013zm293.92-40.453c.779 97.273 42.788 121.384 87.145 121.384 26.458 0 49.025-6.213 65.367-14.007l10.895 52.916c-22.568 11.673-56.808 17.912-90.27 17.912-94.925 0-144.73-71.594-144.73-188.321 0-123.732 56.795-199.994 135.392-199.994s115.172 75.484 115.172 170.435c0 18.664-.792 30.35-1.557 40.453l-177.413-.778zm109.712-52.126c.778-66.924-22.567-102.707-51.347-102.707-38.144 0-55.264 55.251-57.586 102.707h108.933z"
                    fill-rule="nonzero"
                  ></path>
                  <path d="M373.462 16.043h218.501v523.07L373.462 16.044zm-153.926 0H.88v523.07l218.657-523.07zm76.976 192.77l139.218 330.3H344.5l-41.633-105.197H200.964l95.548-225.103z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-16 bg-blueGray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="relative flex flex-col min-w-0 break-words bg-red w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                <img alt="..." src={dailkroabout1} />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Great for your awesome project
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <img
                          src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/new_user.svg"
                          alt=""
                        />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Market Your Business to New Users
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Utilize online platforms such as Google Ads, social media ads, and display advertising to reach a wider audience.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <img
                          src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/grow_revenue_icon.svg"
                          alt=""
                        />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Search Engine Optimization (SEO)
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Optimize your website for search engines to improve its visibility in search results, attracting organic traffic.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <img
                          src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/more_customer.svg"
                          alt=""
                        />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Social Media Marketing
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Leverage social media platforms to connect with your target audience, share updates about your business, and run targeted advertising campaigns.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <img
                          src="https://www.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej-1520x800.webp"
                          alt=""
                        />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Partnerships and Collaborations
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Collaborate with complementary businesses or influencers to reach new audiences and increase brand awareness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="relative bg-blueGray-50 pt-8 pb-6 mt-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Made with Dialkro
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default About;
