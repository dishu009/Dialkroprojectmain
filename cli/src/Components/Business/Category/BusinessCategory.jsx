import React, { useState } from "react";
import { useAuth } from "../../ProAuth/AuthPro.jsx";
import { Link } from "react-router-dom";

function BusinessCategory() {
  const {
    businessesCategory,
    selectBusinessCategory,
    setSelectBusinessCategory,

    error,
  } = useAuth();
  return (
    <>
      {error && (
        <h1 className="text-rose-800 mb-8 text-4xl font-bold">{error}</h1>
      )}
      <div className="p-5 bg-white gap-6 max-w-sm mx-auto">
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 font-normal rounded-md w-full h-10 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={selectBusinessCategory}
          onChange={(e) => setSelectBusinessCategory(e.target.value)}
        >
          <option value="" className="text-gray-600">
            Select Category
          </option>
          {businessesCategory.map((category) => (
            <option key={category} value={category} className="text-gray-900">
              {category}
            </option>
          ))}
        </select>

        {/* <label
          for="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a category</option>
          {businessesCategory.map((home) => (
            <option key={home.index}>{home}</option>
          ))}
        </select> */}
        {/* <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a Location</option>
          {businessesCategory.map((home) => (
            <option key={home.index}>{home}</option>
          ))}
        </select> */}
      </div>
    </>
  );
}

export default BusinessCategory;

// {islogin ? (
//   <p>
//     This is a protected component. Only visible to logged-in users.
//     profile you are alresdy Login{" "}
//     <Link to="/profile">
//       <button className="text-rose-800">Profile</button>
//     </Link>{" "}
//   </p>
// ) : (
//   <h1>Please login</h1>
// )}

// {/* <select
//         className="rounded-lg p-2"
//         // defaultValue={selectBusinessCategory}
//         // onChange={selectBusinessCategoryHandleInputChange}
//       >
//         <option value="">Select A Category</option>
//       </select> */}
//       {/* <Link
//         className="p-2  border-rose-600 border-solid border-2 bg-rose-700 rounded-lg text-white"
//         onClick={fetchBusinessByCategory}
//         to="/category"
//       >
//         View
//       </Link> */}

//  {/* {businessesCategory.map((category) => (
//             <p key={category}>{category?.category}</p>
//           ))} */}

//         {/* <p >{businessesCategory.name}lodalasn</p> */}
//         {/* {businessesCategory.map((home) => (
//           <div key={home.index}>
//             <p className="text-rose-800">{home}</p>
//           </div>
//         ))} */}
