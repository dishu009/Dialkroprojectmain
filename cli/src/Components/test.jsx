import React from 'react'

function test() {
  return (
    <>
     <nav className="bg-transparent blur-0 shadow-md py-12 px-6 sticky w-full z-10 top-0">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={lg} alt="Your Logo" className="h-8 w-auto mr-4" />
          <span className="text-xl font-semibold text-gray-800">
            Your Brand
          </span>
        </Link>
        <ul className="hidden md:flex space-x-8">
          
          <li>
            <Link to="/" className="hover:text-blue-500">
              <AiOutlineHome className="text-2xl" />
            </Link>
          </li>
          {islogin ? (
            <>
              <li>
                <Link to="/profile" className="hover:text-blue-500">
                  Profile
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="hover:text-blue-500">
                  <AiOutlineLogin className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-blue-500">
                  <AiOutlineUser className="text-2xl" />
                </Link>
              </li>
            </>
          )}
          <li>
            <Link to="/businesses" className="hover:text-blue-500">
              <AiOutlineAppstoreAdd className="text-2xl" />
            </Link>
          </li>
        </ul>

        {islogin ? (
          <>
            <button
              onClick={logOutNow}
              className="md:hidden rounded-md p-2 text-yellow-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <IoIosLogOut className="inline-block mr-2 text-2xl" />
             
            </button>
          </>
        ) : (
          <>
            <button
              className="md:hidden rounded-md p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                // Toggle a dropdown or modal for login on mobile screens
              }}
            >
              <Link to="/login">
                <AiOutlineLogin className="text-2xl" />
              </Link>
            </button>
          </>
        )}
      </div>
    </nav>
    
    
    </>
  )
}

export default test