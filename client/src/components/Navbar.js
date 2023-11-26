import React from "react";

import { Link } from "react-router-dom";
// import Login from "./login";
// import SignUp from "./SignUp"
// import Home from "./Home";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Pain and Gain</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:mx-4 lg:justify-end lg:w-auto">
        <div className="text-sm ">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Home
          </Link>
          <Link
            to="./About"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            about
          </Link>
          {/* <Link
            href="/responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Blog
          </Link> */}
        </div>
       
      </div>
      <div className="mx-4">
          <Link
            to="./Login"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Login
          </Link>
        </div>
        <div className="mx-1">
          <Link
              to="./SignUp"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Signup
          </Link>
        </div>
    </nav>
  );
}
