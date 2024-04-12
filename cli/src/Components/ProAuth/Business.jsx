import React, { useEffect, useState } from "react";


export const getBusiness = () => {
  const [businesses, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const URL = "/api/business";

      // Axios will automatically reject the promise on HTTP error (status >= 400)
      // We can catch the error using .catch method
      await axios
        .get(URL)
        .then((response) => {
          if (response.status === 401) {
            // Handle unauthorized access here
            // For example, redirect to login page or show an error message
            setError("Unauthorized access. Please login.");
            return;
          }

          // if (!response.data.length) {
          //   console.log("No users found");
          // }

          setUsers(response.data.business);
          // console.log(response.data);
        })
        .catch((err) => {
          // console.error("Error fetching users:", err);
          setError(`Log in Please `);
        });
    })();
  }, []);
};
const expAll = {
  getBusiness,
};
export default expAll;
