import React, { useState } from "react";
import { Link } from "react-router-dom";
// import viewdetailsads from "../assets/viewdetailsads.jpeg";
import { useAuth } from "../ProAuth/AuthPro.jsx";
import sideads from "../assets/sideads.png";
import sideads2 from "../assets/sideads2.jpg";
import './Businesslist.css';
function BusinessList() {
  // Mock data for businesses (replace this with actual data)
  const { uBusiness, islogin, userData, businesses } = useAuth();

  const [visibleBusinesses, setVisibleBusinesses] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
    setVisibleBusinesses(showAll ? 3 : uBusiness.length);
  };
  // {
  //   console.log(uBusiness?.data?.name);
  // }

  // const businesses = [
  //   {
  //     id: 1,
  //     name: "Business 1",
  //     location: "City 1",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla nisi in lectus ultrices, id efficitur justo venenatis.",
  //   },
  //   {
  //     id: 2,
  //     name: "Business 2",
  //     location: "City 2",
  //     description:
  //       "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  //   },
  //   {
  //     id: 3,
  //     name: "Business 3",
  //     location: "City 3",
  //     description:
  //       "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  //   },
  //   // Add more businesses as needed
  // ];

  return (
    <>

<div className=" bg-white">
 
 {/* {/ <!-- body --> /} */}
 <main>
   <section className="juice3 bg-gray-100 bg-opacity-90 py-10">
     <div className="container mx-auto px-4 flex flex-col lg:flex-row">
       {/* {/ <!-- left --> /} */}
       <div className="juice relative lg:w-2/3 rounded-xl bg-secondary-lite bg-cover p-8 md:p-16">
         <p className="max-w-sm text-secondary text-3xl md:text-4xl font-semibold">RG Shine Product</p>
         <p className="max-w-xs pr-10 text-secondary font-semibold mb-8 ">Advanced Protection Formula Gently Clean Germ Keeps Your Skin Soft & Fresh</p>
         <a href="https://rgshine.com/" target="_blank" className="mt-20 bg-white font-semibold px-8 py-2 rounded">Shop Now</a>
         <div className="absolute bottom-8 right-8 md:bottom-5 md:right-5 flex">
        
         </div>
       </div>
       {/* {/ <!-- right --> /} */}
       <div className="juice2 mt-6 lg:mt-0 lg:ml-6 lg:w-1/3 rounded-xl bg-primary-lite bg-cover p-8 md:p-16">
         <div className="max-w-sm">
           <p className="text-3xl md:text-4xl font-semibold uppercase">Best Offer</p>
           <p className="mt-8 font-semibold">Syncthetic seeds<br />2.0 OZ</p>
           <button className="mt-20 bg-white font-semibold px-8 py-2 rounded">Shop Now</button>
         </div>
       </div>
     </div>
   </section>
</main>
</div>
    
      {/* <div classNameName="my-16">
        <h2 classNameName="text-3xl font-semibold text-gray-800 mb-6">
          My Businesses
        </h2>
        <div classNameName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {islogin ? (
            <>
              {uBusiness.map((business, index) => (
                <div
                  key={index}
                  classNameName="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={`https://source.unsplash.com/400x300/?${business.data?.name}`}
                    // alt={business.name}
                    classNameName="w-full h-40 object-cover"
                  />

                  <div classNameName="p-6">
                    <h3 classNameName="text-xl font-semibold text-gray-900 mb-2">
                      {business.name}
                    </h3>
                    <p classNameName="text-gray-700 mb-4">
                      {business.location?.address}
                    </p>
                    <p classNameName="text-gray-700">{business.location?.city}</p>
                    <p classNameName="text-gray-700">
                      {" "}
                      {business.description.length > 75 ? (
                        <span>
                          {business.description.substring(0, 10)}
                          <Link
                            to={`/business/${business._id}`}
                            classNameName="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                          >
                            Readmore
                          </Link>
                        </span>
                      ) : (
                        business.description
                      )}
                    </p>
                    <Link
                      to={`/business/edit/${business._id}`}
                      classNameName="mt-4 inline-block py-2 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div classNameName="login-prompt text-center mb-4">
              Unlock the full potential. Log in now!
            </div>
          )}
        </div>

       
      </div> */}

      <div className="py-10 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        {/* {/ <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> /} */}

        <div className="flex justify-start item-start space-y-2 flex-col">
          <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Dialkro Businesses
          </h1>
          <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
            We are with You for 24/7
          </p>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            {islogin ? (
              <>
                {uBusiness
                  .slice(0, visibleBusinesses)
                  .map((business, index) => (
                    <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-2 py-2 md:py-6 md:p-6 xl:p-8 w-full   border-b  mb-5 border-gray-200    rounded-lg hover:bg-orange-50 shadow-2xl hover:shadow-rose-500/50">
                      <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                        <div className="w-50 h-50 ">
                          <img
                            className="w-full hidden md:block"
                            src={`https://source.unsplash.com/400x300/?${business.data?.name}`}
                            alt="dress"
                          />
                        </div>
                        <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                          <div className="w-full flex flex-col justify-start items-start space-y-8">
                            <h3 className="text-black text-2xl title-font font-bold  uppercase">
                              {business.name}
                            </h3>
                            <div className="flex justify-start items-start flex-col space-y-1">
                              <h2 className="text-red-600 font-bold dark:text-white leading-none">
                                +91-{business.contact?.phone}
                              </h2>
                              <p className="text-black  title-font font-bold mb-2 uppercase pt-2">
                                {business.contact?.email}
                              </p>
                              <p className="text-black  title-font font-bold mb-2 uppercase pt-2">
                                {business.contact?.website}
                              </p>
                            
                              <p className="text-black  title-font font-bold mb-2 uppercase pt-2">
                                {business.location?.city}
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-between space-x-8 items-start w-full">
                            <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                              Dialkro
                            </p>
                            <Link
                              to={`/business/edit/${business._id}`}
                              className="mt-4 inline-block py-2 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-red-500 to-red-800 hover:from-red-900 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                {uBusiness.length > 3 && (
                  <button onClick={handleToggle} className="bg-red-700 text-white px-4 py-2 rounded-md mt-4">{showAll ? "View less" : "View More"}</button>
                )}
              </>
            ) : (
              <div classNameName="login-prompt text-center mb-4">
                Unlock the full potential. Log in now!
              </div>
            )}

            <div className="flex justify-center flex-col md:flex-row  items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8 ">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6 border-b  mb-5 border-gray-200 rounded-lg   hover:bg-orange-50 shadow-2xl hover:shadow-rose-500/50">
                <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                  Summary
                </h3>
                {businesses.map((business, index) => (
                  <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                    <div className="flex justify-between w-full">
                      <p className="text-base dark:text-white leading-4 text-gray-800">
                        {business.name}
                      </p>
                      <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                        {" "}
                        {business.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full  dark:bg-gray-800 space-y-6 border-b   border-gray-200 rounded-lg  bg-gray-50    hover:bg-orange-50 shadow-2xl hover:shadow-rose-500/50">
                <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                  Edit Your Business
                </h3>
                <div className="flex justify-between items-start w-full">
                  <div className="flex justify-center items-center space-x-4">
                    <div className="w-8 h-8">
                      <img
                        className="w-full h-full"
                        alt="logo"
                        src="https://i.ibb.co/L8KSdNQ/image-3.png"
                      />
                    </div>
                  </div>
                  <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">
                    Edit Your Business If you Have any query
                  </p>
                </div>
                <div className="w-full flex justify-center items-center">
                  <button className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                    {" "}
                    <Link to="/edituser">Edit Business</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col border-b  mb-5 border-gray-200  rounded-lg hover:bg-orange-50 shadow-2xl hover:shadow-rose-500/50">
            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
              Customer
            </h3>
            <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  <img
                    src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                    alt="avatar"
                  />
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
                      {userData.data?.username}
                    </p>
                    <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">
                      Current Businesses{" "}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path d="M3 7L12 13L21 7" stroke="currentColor" />
                  </svg>
                  <p className="cursor-pointer text-sm leading-5 ">
                    {userData.data?.email}
                  </p>
                </div>
              </div>
              <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0 ">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                  <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                    Description
                    </p>
                    <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque accusamus totam a reiciendis vero id non molestias tempore quae dicta.
                    </p>
                  </div>
                
                </div>

                <div className="flex w-full justify-center flex-wrap items-center md:justify-start md:items-start">
                  <img src={sideads} alt=""  className="w-30 h-30 md:w-auto md:h-auto mb-10"/>
                  <img src={sideads2} alt=""  className="w-30 h-30 md:w-auto md:h-auto mb-10"/>
                  <button className="mt-10 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">
                    <Link to="/edituser">
                      <span>Edit Details </span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessList;
