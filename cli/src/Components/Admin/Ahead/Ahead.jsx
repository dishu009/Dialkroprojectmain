import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
function Ahead() {
  return (
    <>
      <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between sm:flex-col sm:items-start sm:justify-start">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center">
          <FaHome className="text-2xl mr-4" />
          <FaUser className="text-2xl mr-4" />
          {/* Other icons or links */}
        </div>
      </header>
    </>
  );
}

export default Ahead;
