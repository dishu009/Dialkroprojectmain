import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  IoLocation,
  IoDuplicate,
  IoPhonePortraitOutline,
  IoMailSharp,
  IoGlobeSharp,
} from "react-icons/io5";
function EditUserBusiness() {
  const Navi = useNavigate();
  const [updateBusiness, setUpdateBusiness] = useState({
    name: "",
    description: "",
    category: "",
    contact: {
      phone: "",
      email: "",
      website: "",
    },
    location: {
      address: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });
  const [businessesByid, setBusinessesByid] = useState([]);

  const { id } = useParams();
  //   console.log(`serial number is ${id}`)

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const URL = `/api/business/${id}`;
        try {
          const response = await axios.get(URL);
          setBusinessesByid(response.data);
          // console.log(response.data);
        } catch (err) {
          console.log(`Log in Please ${err.message}`);
        }
      } else {
        Navi("/businesses");
      }
    };

    fetchData();
  }, [id]);

  const updateBusinesshandleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parentKey, childKey] = name.split(".");
      setUpdateBusiness((prevState) => ({
        ...prevState,
        [parentKey]: {
          ...prevState[parentKey],
          [childKey]: value,
        },
      }));
    } else {
      setUpdateBusiness((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const uppdateBusinesshandleSubmit = async (e) => {
    try {
      if (id) {
        e.preventDefault();
        const uri = `/api/business/${id}`;
        await axios.put(uri, updateBusiness);
        alert(`Business Updated SuccessFully`);
        Navi("/mybusiness");
      } else {
        Navi("/login");
      }
    } catch (error) {
      console.log(`Error is from update  ${error.message}`);
    }
  };

  return (
    <>
      <div className="max-w-screen-lg mx-auto p-5">
        {businessesByid.data && (
          <div className="grid grid-cols-1 md:grid-cols-12 border">
            <div className="bg-gray-900 md:col-span-4 p-10 text-white">
              <p className="mt-4 text-sm leading-7 font-regular uppercase font-bold">
                Contact Information
                <p className="mt-4 text-sm leading-7 font-regular text-justify uppercase">
                  {businessesByid?.data?.contact?.phone}
                  <br />
                  {businessesByid?.data?.contact?.email}
                  <br />
                  {businessesByid?.data?.contact?.website}
                </p>
              </p>
              <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                Get In{" "}
                <span className="text-red-600">
                  {businessesByid.data?.name}
                </span>
              </h3>
              <p className="mt-4 leading-7 text-gray-200 ">
                {businessesByid.data?.description}
              </p>

              <div className="flex items-center mt-5">
                <span className="text-sm">
                  {businessesByid?.data?.location?.address}
                </span>
              </div>
              <div className="flex items-center mt-5">
                <span className="text-sm">
                  {" "}
                  {businessesByid?.data?.location?.state}
                </span>
              </div>
              <div className="flex items-center mt-5">
                <span className="text-sm">
                  {" "}
                  {businessesByid?.data?.location?.city}
                </span>
              </div>
              <div className="flex items-center mt-5">
                <span className="text-sm">
                  {" "}
                  {businessesByid?.data?.location?.zipCode}
                </span>
              </div>
            </div>
            <form
              onSubmit={uppdateBusinesshandleSubmit}
              className="md:col-span-8 p-10 "
            >
              {/* {/ Business Details Section /} */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Business Details</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label
                      htmlhtmlFor="name"
                      className="block  text-sm font-semibold text-gray-700 mb-2"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      defaultValue={updateBusiness.name}
                      onChange={updateBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter business name"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlhtmlFor="category"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      defaultValue={updateBusiness.category}
                      onChange={updateBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter business category"
                    />

                    {/* <select className="rounded-md border-rose-600 border-2 p-1">
                        <option>Select A Category</option>
                        {businessesCategory.map((home)
 => (
                          <option key={home.index}>{home.name}</option>
                        ))}
                      </select> */}

                    {/* {businessesCategory.map((category) => (
                        <div key={category._id}>
                          <input
                            type="checkbox"
                            id={category._id}
                            value={category._id}
                            // checked={selectedCategories.includes(category._id)}
                            // onChange={() => handleCategoryChange(category._id)}
                          />
                          <label htmlhtmlFor={category._id}>{category.name}</label>
                        </div>
                      ))} */}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlhtmlFor="description"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    defaultValue={updateBusiness.description}
                    onChange={updateBusinesshandleChange}
                    className="w-full border rounded p-2"
                    placeholder="Enter business description"
                  ></textarea>
                </div>
              </section>

              {/* {/ Contact Section /} */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label
                      htmlhtmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Contact Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="contact.phone"
                      defaultValue={updateBusiness.contact?.phone}
                      onChange={updateBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter contact phone"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlhtmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Contact Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="contact.email"
                      defaultValue={updateBusiness.contact?.email}
                      onChange={updateBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter contact email"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlhtmlFor="website"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="contact.website"
                      defaultValue={updateBusiness.contact?.website}
                      onChange={updateBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter website URL"
                    />
                  </div>
                </div>
              </section>

              {/* {/ Location Section /} */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Location Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label
                      htmlhtmlFor="address"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="location.address"
                      defaultValue={updateBusiness.location?.address}
                      onChange={updateBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter business address"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlhtmlFor="city"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="location.city"
                      defaultValue={updateBusiness.location.city}
                      onChange={updateBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter city"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlhtmlFor="state"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="location.state"
                      defaultValue={updateBusiness.location.state}
                      onChange={updateBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter state"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlhtmlFor="zipCode"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="location.zipCode"
                      defaultValue={updateBusiness.location.zipCode}
                      onChange={updateBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter zip code"
                    />
                  </div>
                </div>
              </section>

              {/* {/ Submit Button /} */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-black-600 text-white font-bold py-2 px-4 rounded-full"
                >
                  Update Your Business
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default EditUserBusiness;

{
  /* // const [name, setName] = useState("");
// const [location, setLocation] = useState("");
// const [description, setDescription] = useState("");
// const [changesSaved, setChangesSaved] = useState(false);
// const [images, setImages] = useState([]);
// const [currentImageIndex, setCurrentImageIndex] = useState(0);

// useEffect(() => {
//   if (selectedBusiness) {
//     setName(selectedBusiness.name);
//     setLocation(selectedBusiness.location);
//     setDescription(selectedBusiness.description);
//     setImages(selectedBusiness.images || []);
//   }
// }, [selectedBusiness]);

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // Here, you can handle form submission (e.g., send data to backend)
//   console.log("Form submitted:", { name, location, description });
//   setName("");
//   setLocation("");
//   setDescription("");
//   setChangesSaved(true);
// };

// const handlePrevImage = () => {
//   setCurrentImageIndex((prevIndex) =>
//     prevIndex === 0 ? images.length - 1 : prevIndex - 1
//   );
// };

// const handleNextImage = () => {
//   setCurrentImageIndex((prevIndex) =>
//     prevIndex === images.length - 1 ? 0 : prevIndex + 1
//   );
// }; */
}

{
  /* // const [name, setName] = useState("");
// const [location, setLocation] = useState("");
// const [description, setDescription] = useState("");
// const [changesSaved, setChangesSaved] = useState(false);
// const [images, setImages] = useState([]);
// const [currentImageIndex, setCurrentImageIndex] = useState(0);

// useEffect(() => {
//   if (selectedBusiness) {
//     setName(selectedBusiness.name);
//     setLocation(selectedBusiness.location);
//     setDescription(selectedBusiness.description);
//     setImages(selectedBusiness.images || []);
//   }
// }, [selectedBusiness]);

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // Here, you can handle form submission (e.g., send data to backend)
//   console.log("Form submitted:", { name, location, description });
//   setName("");
//   setLocation("");
//   setDescription("");
//   setChangesSaved(true);
// };

// const handlePrevImage = () => {
//   setCurrentImageIndex((prevIndex) =>
//     prevIndex === 0 ? images.length - 1 : prevIndex - 1
//   );
// };

// const handleNextImage = () => {
//   setCurrentImageIndex((prevIndex) =>
//     prevIndex === images.length - 1 ? 0 : prevIndex + 1
//   );
// }; */
}
