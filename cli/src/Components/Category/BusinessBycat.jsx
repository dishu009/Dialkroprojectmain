import React from "react";
import { useAuth } from "../ProAuth/AuthPro.jsx";

function BusinessBycat() {
  const {}=useAuth()
  return (
    <>

    </>
  );
}

export default BusinessBycat;


// <div>
// {businessesByCategory.map((business, index) => (
//      <div key={index} className="">
//        <p className="text-yellow-600">{business.name}</p>
//        {/* Display other business details as needed */}
//      </div>
//    ))}
//  </div>