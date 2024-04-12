import React from "react";
import { FaChartBar, FaUser, FaCog } from "react-icons/fa";
function Sidebar() {
  return (
    <>
      <aside className="bg-neutral-500 text-white py-6 px-4 flex-shrink-0 sm:block">
        <ul className="space-y-4">
          <li className="relative px-6 py-3">
            <FaChartBar className="w-6 h-6 mr-3" />
            <a href="#" className="font-medium text-white hover:text-gray-300">
              Dashboard
            </a>
          </li>
          <li className="relative px-6 py-3">
            <FaUser className="w-6 h-6 mr-3" />
            <a href="#" className="font-medium text-white hover:text-gray-300">
              Users
            </a>
          </li>
          <li className="relative px-6 py-3">
            <FaCog className="w-6 h-6 mr-3" />
            <a href="#" className="font-medium text-white hover:text-gray-300">
              Settings
            </a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
