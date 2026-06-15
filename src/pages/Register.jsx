import React from "react";

const Register = () => {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-cyan-500  to-blue-600">
        <div className=" h-130 w-90 rounded-md m-20 bg-gradient-to-tr from-indigo-600 to-blue-500 shadow-lg">
        <div className="p-4">
          <h6 className="opacity-50">Registration Now:-</h6>
          <label htmlFor="name" className>
            Full Name:-
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter user name"
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
          />

          <label htmlFor="name" className>
            Email:-
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter user email"
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
          />

          <label htmlFor="name" className>
            Mobile Number:-
          </label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Enter your number"
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
          />

          <label htmlFor="name" className>
            Password:-
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter user password"
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
          />

          <label htmlFor="name" className>
            Confirm Password:-
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Confirm your password"
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
          />

          <div className="mt-13 text-center">
            <button className="border border-gray-200 h-13 w-23 bg-blue-600 text-white rounded-md">Submit</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Register;
