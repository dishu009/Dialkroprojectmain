import React from "react";
import { useAuth } from "../../ProAuth/AuthPro.jsx";
const BusinessCheck = () => {
  const {
    businessesLocation,
    error,
    selectBusinessLocation,
    setselectBusinessLocation,
  } = useAuth();

  return (
    <div>
      {error && (
        <h1 className="text-rose-800 mb-8 text-4xl font-bold">{error}</h1>
      )}
      <div className="flex flex-col gap-2">
        <div>
          Locate Where is this
          <div className="p-5 bg-white gap-6 max-w-sm mx-auto">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 font-normal rounded-md w-full h-10 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={selectBusinessLocation}
              onChange={(e) => setselectBusinessLocation(e.target.value)}
            >
              <option value="" className="text-gray-600">
                Select Locations
              </option>
              {businessesLocation.map((location) => (
                <option
                  key={location}
                  value={location}
                  className="text-gray-900"
                >
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCheck;
