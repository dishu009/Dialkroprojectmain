import React, { useState, useEffect } from "react";
import { useAuth } from "../ProAuth/AuthPro.jsx";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Editprofile.css";
import profileback from "../assets/profileback.jpeg";

import axios from "axios";

function Editprofile() {
  const Navi = useNavigate();
  const { islogin, loading, logOutNow, error, userData } = useAuth();

  const [updateUser, setupdateUser] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    if (userData.data) {
      setupdateUser({
        username: userData.data.username,
        email: userData.data.email,
        phone: userData.data.phone,
        address: userData.data.address,
        dateOfBirth: userData.data.dateOfBirth,
        name: userData.data.name,
      });
    }
  }, [userData]);

  const updateBusinesshandleChange = (e) => {
    const { name, value } = e.target;
    setupdateUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const uppdateBusinesshandleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userData.data?._id) {
        const uri = `/api/profile/${userData.data._id}`;
        await axios.put(uri, updateUser);
        alert(`User Updated Successfully`);
        Navi("/profile");
      } else {
        Navi("/login");
      }
    } catch (error) {
      console.log(`Error is from update  ${error}`);
    }
  };
  return (
    <>
      <div className="">
        {islogin ? (
          <>
            <div className="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
              <div className="top h-64 w-full bg-blue-600 overflow-hidden relative">
                <img
                  src={profileback}
                  alt=""
                  className="bg w-full h-full object-cover object-center absolute z-0"
                />
                <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    className="h-24 w-24 object-cover rounded-full"
                  />
                  <h1 className="text-2xl font-semibold">
                    {userData.data?.username}
                  </h1>
                  <h4 className="text-sm font-semibold">
                    {" "}
                    {userData.data?.email}
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-12  bg-white ">
                <div className="col-span-12 w-full px-5 py-6 alien-center  flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start">
                  <a
                    href="#"
                    className="p-2 h-10  bg-red-900 text-white text-center rounded font-bold"
                  >
                    User Profile
                  </a>

                  <div className="text-center pt-2 font-bold flex flex-wrap justify-evenly  alien-center">
                    <h5 className="pt-5">{userData.data?.name}</h5>
                    <h5 className="pt-5">{userData.data?.email}</h5>
                    <h5 className="pt-5">{userData.data?.phone}</h5>
                    <h5 className="pt-5">{userData.data?.address}</h5>
                    <h5 className="pt-5">{userData.data?.dateOfBirth}</h5>
                  </div>
                </div>

                <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
                  <div className="px-4 pt-4">
                    <form
                      action="#"
                      className="flex flex-col space-y-8"
                      onSubmit={uppdateBusinesshandleSubmit}
                    >
                      <div>
                        <h3 className="text-2xl font-semibold">
                          Create an Accounts
                        </h3>
                        <hr />
                      </div>

                      <div className="form-item">
                        <label className="text-xl ">UserName</label>
                        <input
                          type="text"
                          placeholder="Enter Your First Name"
                          className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                          id="username"
                          name="username"
                          value={updateUser.username}
                          onChange={updateBusinesshandleChange}
                        />
                      </div>
                      <div className="form-item">
                        <label className="text-xl ">FullName</label>
                        <input
                          type="text"
                          placeholder="Enter Your First Name"
                          className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                          id="name"
                          name="name"
                          value={updateUser.name}
                          onChange={updateBusinesshandleChange}
                        />
                      </div>
                      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                        <div className="form-item w-full">
                          <label className="text-xl ">Email</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={updateUser.email}
                            onChange={updateBusinesshandleChange}
                            className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
                          />
                        </div>
                      </div>
                      <div className="form-item">
                        <label className="text-xl ">Phone Number</label>
                        <input
                          type="text"
                          placeholder="Enter Your First Name"
                          className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                          id="phone"
                          name="phone"
                          value={updateUser.phone}
                          onChange={updateBusinesshandleChange}
                        />
                      </div>
                      <div className="form-item">
                        <label className="text-xl ">Address</label>
                        <input
                          type="text"
                          placeholder="Enter Your First Name"
                          className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                          id="address"
                          name="address"
                          value={updateUser.address}
                          onChange={updateBusinesshandleChange}
                        />
                      </div>

                      <div className="form-item">
                        <label className="text-xl ">DOB</label>
                        <input
                          type="date"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          value={updateUser.dateOfBirth}
                          onChange={updateBusinesshandleChange}
                          placeholder="Enter Your Passward"
                          className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
                        />
                      </div>

                      <div className="mb-6 text-center">
                        <button
                          className="w-full px-4 py-2 font-bold text-white bg-red-800 rounded-full hover:bg-red-700 dark:bg-red-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Edit Your Profile
                        </button>
                      </div>
                      <hr className="mb-6 border-t" />
                      <div className="text-center">
                        <Link
                          className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                          to="/forgot"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1>Please login</h1>
        )}
      </div>

      {error && (
        <h1 className="text-red-500 mb-8 text-4xl font-bold">{error}</h1>
      )}
      {loading && (
        <h1 className="text-green-500 mb-8 text-3xl font-thin">{loading}</h1>
      )}
    </>
  );
}

export default Editprofile;
