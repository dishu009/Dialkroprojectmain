import React, { useState } from "react";
import cookie from "js-cookie";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../ProAuth/AuthPro";
import { Link } from "react-router-dom";
import vectorbusi from "../assets/vectorbusi.png";
import "./new.css"

function New() {
  const {
    error,
    addBusinesshandleChange,
    addBusinesshandleSubmit,
    loading,
    businessData,
    islogin,

    businessesCategory,
    selectBusinessCategory,
    selectBusinessCategoryHandleInputChange,
    fetchBusinessByCategory,
  } = useAuth();
  // const navi = useNavigate()
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(null);
  // const [businessData, setBusinessData] = useState({
  //   name: "",
  //   description: "",
  //   category: "",
  //   contact: {
  //     phone: "",
  //     email: "",
  //     website: "",
  //   },
  //   location: {
  //     address: "",
  //     city: "",
  //     state: "",
  //     zipCode: "",
  //   },

  //   // reviews: [],
  //   // user: "",
  //   // Add more fields as needed
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setBusinessData({
  //     ...businessData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const uri = "/api/business";
  //     await axios
  //       .post(uri, businessData)
  //       .then((response) => {
  //         setLoading(`Loading ....`);
  //         alert(`${response.data.message}`);
  //         navi("/businesses")
  //       })
  //       .catch((err) => {
  //         alert(`error is ${err.response.message}`);
  //       });
  //     setLoading(null);
  //   } catch (error) {
  //     setError(`Error is ${error.message}`);
  //   }
  // };

  return (
    <>
      {/* {islogin ? (
        <>
          <div className="flex items-center  justify-center ">
            <form
              onSubmit={addBusinesshandleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl"
            >
           
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Business Details</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label


                      htmlFor="name"
                      className="block  text-sm font-semibold text-gray-700 mb-2"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      defaultValue={businessData.name}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter business name"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="category"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      defaultValue={businessData.category}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter business category"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    defaultValue={businessData.description}
                    onChange={addBusinesshandleChange}
                    className="w-full border rounded p-2"
                    placeholder="Enter business description"
                  ></textarea>
                </div>
              </section>

          
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Contact Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="contact.phone"
                      defaultValue={businessData.contact?.phone}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter contact phone"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Contact Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="contact.email"
                      defaultValue={businessData.contact?.email}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter contact email"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="website"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="contact.website"
                      defaultValue={businessData.contact?.website}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter website URL"
                    />
                  </div>
                </div>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Location Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="address"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="location.address"
                      defaultValue={businessData.location?.address}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter business address"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="city"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="location.city"
                      defaultValue={businessData.location.city}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter city"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="state"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="location.state"
                      defaultValue={businessData.location.state}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter state"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="location.zipCode"
                      defaultValue={businessData.location.zipCode}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter zip code"
                    />
                  </div>
                </div>
              </section>

              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                >
                  Add Business
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <h1>Login PLease.....</h1>
      )}

      {error && (
        <h1 className="text-red-500 mb-8 text-4xl font-bold">{error}</h1>
      )}
      {loading && (
        <h1 className="text-green-500 mb-8 text-3xl font-thin">{loading}</h1>
      )} */}

      <div className="relative min-h-screen flex ">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative backform-img">
          <div className="absolute bg-gradient-to-b from-red-600 to-red-700 opacity-75 inset-0 z-0"></div>
          <div className="absolute triangle  min-h-screen right-0 w-16"></div>
         <a href="https://codepen.io/uidesignhub" target="_blank" title="codepen aji" className="flex absolute top-5 text-center text-gray-100 focus:outline-none"><p className="text-xl ml-3">Dial<strong>Kro</strong></p></a>
         <img src={vectorbusi} className="h-96 absolute right-5 mr-5"/>
          <div className="w-full  max-w-md z-10">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Dialkro Business</div>
            <div className="sm:text-sm xl:text-md text-gray-200 font-normal">The most popular small and high scale of Businesses</div>
            <p className="mt-4 text-xl text-white-500 ">
                  Dialkro Ads Help You Achieve Your Goals elements of a world that
                  doesn't care if you develop or die.
                </p>
          </div>
         
         <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
     </ul>
  
        </div>
        {islogin ? (
            <>
  
        <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
               Business Details
              </h2>
              <p className="mt-2 text-sm text-gray-500">Please Add your Business Here</p>
            </div>
          
        
            <form className="mt-8 space-y-6" onSubmit={addBusinesshandleSubmit}>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              
              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Business Name</label>
              <input className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"   type="text"
                        id="name"
                        name="name"
                        defaultValue={businessData.name}
                        onChange={addBusinesshandleChange}
                    
                        placeholder="Enter business name"/>
            </div>
            <div className=" content-center">
              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide" >
             Category
              </label>
              <input className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"    type="text"
                        id="category"
                        name="category"
                        defaultValue={businessData.category}
                        onChange={addBusinesshandleChange}
           
                        placeholder="Enter business category"/>
            </div>
            </div>  
           
            <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        defaultValue={businessData.description}
                        onChange={addBusinesshandleChange}
                        className="w-full border rounded p-2"
                        placeholder="Enter business description">
  
                        </textarea>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              
              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide"       htmlFor="phone">Contact Phone</label>
              <input className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"   type="text"
                           id="phone"
                          name="contact.phone"
                          defaultValue={businessData.contact?.phone}
                          onChange={addBusinesshandleChange}
                     
                          placeholder="Enter contact phone"
                        />
            </div>
            <div className=" content-center">
              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide" >
          Contact Email 
              </label>
              <input className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"    type="email"
                           id="email"
                          name="contact.email"
                          defaultValue={businessData.contact?.email}
                          onChange={addBusinesshandleChange}
                          placeholder="Enter contact email"/>
            </div>
            </div>
  
           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              
              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide" htmlFor="phone">Website If Any</label>
              <input className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"   type="text"
                     id="website"
                          name="contact.website"
                          defaultValue={businessData.contact?.website}
                          onChange={addBusinesshandleChange}
                          placeholder="Enter website URL"
                        />
            </div>
            <div className=" content-center">
              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide" >
              Upload Images
              </label>
              <input className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"    type="file"
                          
                          id="city"
                          name="location.city"
                          defaultValue={businessData.location.city}
                          onChange={addBusinesshandleChange}
                        
                          placeholder="Enter city"/>
            </div>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              
              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide" htmlFor="phone">Address</label>
              <input className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"   type="text"
                        id="address"
                          name="location.address"
                          defaultValue={businessData.location?.address}
                          onChange={addBusinesshandleChange}
                         placeholder="Enter business address"
                        />
            </div>
            <div className=" content-center">
              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide" >
          City
              </label>
              <input className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"    type="text"
                          
                          id="city"
                          name="location.city"
                          defaultValue={businessData.location.city}
                          onChange={addBusinesshandleChange}
                        
                          placeholder="Enter city"/>
            </div>
            </div>
  
  
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              
              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide" htmlFor="phone">State</label>
              <input className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"   type="text"
                          
                          id="state"
                          name="location.state"
                          defaultValue={businessData.location.state}
                          onChange={addBusinesshandleChange}
                         
                          placeholder="Enter state"
                        />
            </div>
            <div className=" content-center">
              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide" >
           Zip Code
              </label>
              <input className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"    type="text"
                           id="zipCode"
                          name="location.zipCode"
                          defaultValue={businessData.location.zipCode}
                          onChange={addBusinesshandleChange}
                          placeholder="Enter zip code"/>
            </div>
            </div>
              <div>
                <button type="submit" className="w-full flex justify-center bg-gradient-to-r from-red-500 to-red-600  hover:bg-gradient-to-l hover:from-red-500 hover:to-red-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                  Add Business
                </button>
              </div>
           
            </form>
          </div>
          
        </div>
              </>
          ) : (
            <h1>Login PLease.....</h1>
          )}
  
          {error && (
            <h1 className="text-red-500 mb-8 text-4xl font-bold">{error}</h1>
          )}
          {loading && (
            <h1 className="text-green-500 mb-8 text-3xl font-thin">{loading}</h1>
          )}
      </div>
    </div>
    </>
  );
}

export default New;
