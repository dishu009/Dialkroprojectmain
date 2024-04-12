import React from "react";
import BusinessList from "./Businesslist.jsx"
function ProfileBusiness() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">

      <BusinessList/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About Us
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur ligula ac metus vehicula, in fringilla neque ultricies.
              Nam euismod urna eget sem aliquam dictum. Mauris quis dui ac
              libero tincidunt fermentum.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700">
              Our mission is to provide the best quality products and services
              to our customers while maintaining sustainability and
              environmental consciousness.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <ul className="text-gray-700">
              <li className="mb-2">
                <span className="font-semibold">Address:</span> 1234 Business
                Street, City, Country
              </li>
              <li className="mb-2">
                <span className="font-semibold">Phone:</span> +1234567890
              </li>
              <li className="mb-2">
                <span className="font-semibold">Email:</span> info@example.com
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://www.justdial.com/Advertise/_next/image?url=https%3A%2F%2Fakam.cdn.jdmagicbox.com%2Fimages%2Ficontent%2Flistingbusiness%2Ftopimage1.png&w=750&q=75"
            alt="Business Image"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 pt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="rounded-full w-24 h-24 mb-2 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
            <p className="text-gray-700">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="rounded-full w-24 h-24 mb-2 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">Jane Smith</h3>
            <p className="text-gray-700">Marketing Manager</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              className="rounded-full w-24 h-24 mb-2 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              David Johnson
            </h3>
            <p className="text-gray-700">Sales Manager</p>
          </div>
        </div>
      </div>


      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <div className="w-full items-center mx-auto max-w-screen-lg">
    <div className="group grid w-full grid-cols-2">
      <div className="relative flex before:block before:absolute before:h-1/6 before:w-2 before:bg-stone-200 before:top-0 before:right-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
        <div className="absolute bottom-0 right-0 bg-blue-500 w-4/6 overflow-hidden flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all shadow-2xl">
          <img src="https://picsum.photos/800/800" alt=""/>
        </div>
        
        <div className="h-2/3 rounded-xl overflow-hidden">
          <img src="https://picsum.photos/800/800" className="h-full" alt=""/>
        </div>
        <a className="-rotate-90 font-bold mt-2 mb-8 r gap-2 h-16 text-2xl leading-7" href="">
          <span>25 ans <br/> D'expérience</span>
        </a>
        <a className="absolute h-20 bg-red-700 w-20 flex items-center justify-center rounded-full bottom-10 left-10 text-white before:block before:absolute before:h-20 before:w-20 before:bg-sky-100 before:rounded-full group-hover:before:animate-ping before:-z-10 hover:bg-red-300" href="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
        </a>
      </div>
      <div>
        <div className="pl-12">
          <h2 className="text-5xl font-medium mb-6">Cost-Effective heating and Air conditioning</h2>
          <h3 className="text-2xl font-medium mb-6">Creating the perfect temperature all year round</h3>
          <p className="mb-6 text-gray-400">energy efficient, stylish & silent both providing cooling and heating. At Zero Degree AC Limited we only use the best brands.
          </p>
          <h3 className="mb-4 font-semibold text-xl text-gray-400">Conditioning installation packages</h3>
          <div className="grid grid-cols-2 gap-6 justify-between mb-3">
            <a href="" className="flex items-center gap-3 hover:text-red-700">
              <span className="h-10 w-10 rounded-full bg-red-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="font-semibold">Service</span>
            </a>
            <a href="" className="flex items-center gap-3 hover:text-red-700">
              <span className="h-10 w-10 rounded-full bg-red-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="font-semibold">installation</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6 justify-between mb-3">
            <a href="" className="flex items-center gap-3 hover:text-red-700">
              <span className="h-10 w-10 rounded-full bg-red-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="font-semibold">Gold Membership</span>
            </a>
            <a href="" className="flex items-center gap-3 hover:text-red-700">
              <span className="h-10 w-10 rounded-full bg-red-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="font-semibold">Maintenance</span>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default ProfileBusiness;
