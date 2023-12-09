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
          className={`flex z-50 fixed w-full items-center justify-between  border-b-2 border-white/40 text-white flex-wrap transition-all duration-400 ${
            scrolling ? "bg-black border-none" : "bg-white/0"
          } p-4`}
          style={{ opacity: scrolling ? 1 : 0.8 }}
        >
          <div className="flex items-center flex-shrink-0 mr-6">
            <span className="font-extrabold text-xl tracking-tight">
              Pain and Gain
            </span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center font-bold lg:mx-4 lg:justify-end lg:w-auto">
            <div className="text-sm ">
              <Link
                to="/"
                onClick={handleOnclick}
                className="block mt-4 lg:inline-block lg:mt-0   hover:text-white mr-4"
              >
                Home
              </Link>
              <Link
                to="/About"
                className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
              >
                About
              </Link>
              <Link
                to="/About"
                className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
              >
                Contacts
              </Link>
              <Link
                to="/About"
                className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
              >
                Shopping
              </Link>
              {/* <Link
          href="/responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white"
        >
          Blog
        </Link> */}
            </div>
          </div>
          {!localStorage.getItem("auth-token") ? (
            <div className="flex">
              <div className="mx-4">
                <Link
                  to="/Login"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                  Login
                </Link>
              </div>
              <div className="mx-1">
                <Link
                  to="/SignUp"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
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
