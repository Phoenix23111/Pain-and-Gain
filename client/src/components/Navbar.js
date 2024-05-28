import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const Navigate = useNavigate();
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrolling(scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOnclick = (event) => {
    event.preventDefault();
    if (location.pathname !== "/" || location.pathname !== "/About") {
      Navigate("/");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    Navigate("/Login");
  };
  //${location.pathname === '/Login' || location.pathname === '/SignUp' ? 'hidden' : ''}
  return (
    <>
      <nav
        className={`flex z-50 fixed w-full items-center justify-between content-baseline border-b-2 border-white/40  flex-wrap transition-all duration-400 ${
          scrolling
            ? "bg-white/30 border-none text-black bg-opacity-15"
            : "bg-black text-white"
        } p-4`}
        // style={{ opacity: scrolling ? 0.8 : 1 }}
      >
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-extrabold text-xl tracking-tight text-red-700">
            Pain and Gain
          </span>
        </div>

        <div className="w-full flex flex-grow lg:flex lg:items-center  font-bold lg:mx-4 lg:justify-end lg:w-auto">
          <div className=" grid grid-cols-4 text-sm gap-3 mr-2 ">
            <Link
              to="/"
              onClick={handleOnclick}
              className=" mt-4 lg:inline-block lg:mt-0   hover:text-white mr-4"
            >
              Home
            </Link>
            <Link
              to="/About"
              className=" mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
            >
              About
            </Link>
            <Link
              to="/About"
              className="mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
            >
              Contacts
            </Link>
            <Link
              to="/About"
              className="mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
            >
              Shopping
            </Link>
          </div>
        </div>

        {!localStorage.getItem("auth-token") ? (
          <div className="flex items-baseline content-center">
            <div className="mx-4">
              <Link
                to="/Login"
                className={`border  border-black text-sm px-4 py-2 font-bold leading-none rounded  bg-white  text-red-700  hover:text-red-900 hover:bg-gray-50 mt-4 lg:mt-0"
      `}
              >
                Login
              </Link>
            </div>
            <div className="mx-4">
              <Link
                to="/SignUp"
                className="font-bold text-sm px-4 py-2 leading-none border rounded text-white bg-red-700 border-none  hover:border-white  hover:bg-red-900 hover:text-white  mt-4 lg:mt-0"
              >
                Signup
              </Link>
            </div>
          </div>
        ) : (
          <div className="mx-4">
            <button
              onClick={handleLogout}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
