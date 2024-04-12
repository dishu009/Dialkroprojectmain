import React from "react";
import { useAuth } from "../ProAuth/AuthPro.jsx";

function ResetPassword() {
  const {
    resetCred,
    changePasswordHandleInputChange,
    changePasswordhandleSubmit,
    error,
  } = useAuth();
  return (
    <>
      <section className="text-gray-600 body-font">
        {error && (
          <h1 className="text-rose-800 mb-8 text-4xl font-semibold">{error}</h1>
        )}
        <form
          onSubmit={changePasswordhandleSubmit}
          className="container px-5 py-24 mx-auto flex flex-wrap items-center"
        >
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Reset Your Password
            </h1>
            <p className="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Change Password
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Enter your ID
              </label>
              <input
                defaultValue={resetCred.token}
                onChange={changePasswordHandleInputChange}
                type="text"
                id="token"
                name="token"
                className="w-full bg-white rounded border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Enter your ID that You have Recevied By your Email
              </label>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                New Password
              </label>
              <input
                defaultValue={resetCred.password}
                onChange={changePasswordHandleInputChange}
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Retype
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-rose-700 border-0 py-2 px-8 focus:outline-none hover:bg-rose-600 rounded text-lg"
            >
              Reset Password
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </form>
      </section>
    </>
  );
}

export default ResetPassword;
