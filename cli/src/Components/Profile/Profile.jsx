import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { useAuth } from "../ProAuth/AuthPro.jsx";
import { IoIosLogOut } from "react-icons/io";
import profileback from "../assets/profileback.jpeg";

import Banner from "./Banner.jsx";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// Import Tailwind CSS
import "tailwindcss/tailwind.css";

const UserProfileComponent = () => {
  const { businesses } = useAuth();
  const { islogin, logOutNow, error, userData } = useAuth();
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    company: "ABC Inc",
    address: "123 Main St, Cityville",
  });

  return (
    <>
      {error && (
        <div className="error-message text-red-600 mb-8 text-4xl font-bold">
          Oops! {error}
        </div>
      )}
      {islogin ? (
        <div className="h-full bg-white p-8">
          <div className="w-full h-[250px]">
            <img
              src={profileback}
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
            <Link to="/edituser">
              <button className="flex items-center bg-rose-800 hover:bg-blue-700 text-gray-100 px-4 py-2 m-2 rounded text-sm space-x-2 transition duration-100">
                <span>edit </span>
              </button>
            </Link>
            <button
              onClick={logOutNow}
              className="flex items-center bg-rose-800 hover:bg-blue-700 text-gray-100 px-4 py-2 m-2 rounded text-sm space-x-2 transition duration-100"
            >
              Sign Out
            </button>
          </div>
          <div className="flex flex-col items-center -mt-7">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
              className="w-40 border-4 border-white rounded-full"
            />
            <div className="flex items-center space-x-2 mt-2">
              {/* <p className="text-2xl">
                {" "}
                <UserInfoField
                  icon={<FaUser className="text-gray-700" />}
                  label="Your Name"
                  value={user?.name}
                  editable={true}
                />
              </p> */}
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
            </div>
            <p className="text-black-700 font-bold uppercase flex">
              <FaUser className="text-red-800 mt-1 mx-1" />
              {userData.data?.username}
            </p>
            {/* {userData.data?._id} */}
            <p className="text-sm text-black-500 flex font-bold">
              <FaEnvelope className="text-red-800 mt-1 mx-1" />
              {userData.data?.email}
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <Link to="/mybusiness">
                <button className="flex items-center bg-rose-800 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                  <span>Explore Your Business</span>
                </button>
              </Link>
              <Link to="/new">
                <button className="flex items-center bg-rose-800 hover:bg-neutral-900 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                  <span>Add Your Business</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="login-prompt text-center mb-4">
          Unlock the full potential. Log in now!
        </div>
      )}

      <div class="flex flex-wrap -mx-3 mb-5">
        <div class="w-full max-w-full px-3 mb-6  mx-auto">
          <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              {/* <!-- card header --> */}
              <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                  <span class="mr-3 font-semibold text-dark">
                    Business Projects
                  </span>
                  <span class="mt-1 font-medium text-secondary-dark text-lg/normal">
                    All BusinessList is here for Your Profile
                  </span>
                </h3>
                <div class="relative flex flex-wrap items-center my-2">
                  <a
                    href="javascript:void(0)"
                    class="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                  >
                    {" "}
                    See other projects{" "}
                  </a>
                </div>
              </div>
              {/* <!-- end card header --> */}
              {/* <!-- card body  --> */}
              <div class="flex-auto block py-8 pt-6 px-9">
                <div class="overflow-x-auto">
                  <table class="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead class="align-bottom">
                      <tr class="font-semibold text-[0.95rem] text-secondary-dark">
                        <th class="pb-3 text-start min-w-[175px]">BUSINESS</th>
                        <th class="pb-3 text-end min-w-[100px]">TYPE</th>
                        <th class="pb-3 text-end min-w-[100px]">CONTACT</th>
                        <th class="pb-3 pr-12 text-end min-w-[175px]">
                          STATUS
                        </th>
                        <th class="pb-3 pr-12 text-end min-w-[100px]">
                          DEADLINE
                        </th>
                        <th class="pb-3 text-end min-w-[50px]">DETAILS</th>
                      </tr>
                    </thead>
                    {businesses.map((business, index) => (
                      <tbody>
                        <tr class="border-b border-dashed last:border-b-0">
                          <td class="p-3 pl-0">
                            <div class="flex items-center">
                              <div class="relative inline-block shrink-0 rounded-2xl me-3">
                                <img
                                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg"
                                  class="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                  alt=""
                                />
                              </div>
                              <div class="flex flex-col justify-start">
                                <a
                                  href="javascript:void(0)"
                                  class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                >
                                  {" "}
                                  {business.name}{" "}
                                </a>
                              </div>
                            </div>
                          </td>
                          <td class="p-3 pr-0 text-end">
                            <span class="font-semibold text-light-inverse text-md/normal">
                              {" "}
                              {business.category}
                            </span>
                          </td>
                          <td class="p-3 pr-0 text-end">
                            <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 mr-1"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                />
                              </svg>{" "}
                              {business?.contact?.phone}{" "}
                            </span>
                          </td>
                          <td class="p-3 pr-12 text-end">
                            <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                              {" "}
                              In Progress{" "}
                            </span>
                          </td>
                          <td class="pr-30 text-start">
                            <span class="font-semibold text-light-inverse text-md/normal">
                              2023-08-23
                            </span>
                          </td>
                          <td class="p-3 pr-0 text-end">
                            <button class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                              <span class="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-4 h-4"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                  />
                                </svg>
                              </span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Reusable component for displaying user information fields
const UserInfoField = ({ icon, label, value }) => (
  <div className="flex items-center mb-2">
    {icon && React.cloneElement(icon, { className: "text-xl mr-2" })}
    <strong className="font-semibold">{label}:</strong>
    {value}
  </div>
);

export default UserProfileComponent;
