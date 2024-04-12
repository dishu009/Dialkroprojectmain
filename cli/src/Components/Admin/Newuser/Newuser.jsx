import React from "react";
import { FaUserPlus } from "react-icons/fa";
function Newuser() {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-300 to-sky-400 rounded-lg shadow-md p-4 flex items-center justify-between flex-col sm:flex-row">
        <div className="flex items-center">
          <FaUserPlus className="w-8 h-8 text-blue-500 mr-4" />
          <h3 className="text-lg font-semibold text-gray-800">
            New User Signups
          </h3>
        </div>
        <p className="text-xl font-bold text-blue-700"></p>
      </div>
    </>
  );
}

export default Newuser;
