// import React, { useEffect } from "react";

import { useLocation, Link, useNavigate } from "react-router-dom";
// import Login from "./login";
// import SignUp from "./SignUp"
// import Home from "./Home";

export default function Navbar() {
  const Navigate = useNavigate();
  const location = useLocation();
  // const token = localStorage.getItem("auth-token")
  // useEffect(() => {

  //   if (!token) {
  //     Navigate("/Login");
  //   }
  //   // eslint-disable-next-line
  // }, [token,Navigate]);

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
          className={`flex ${location.pathname === '/Login' || location.pathname === '/SignUp' ? 'fixed' : ''} w-full items-center justify-between flex-wrap backdrop-blur-lg  bg-cyan-500/40 text-white p-4`}
        >
          <div className="flex items-center flex-shrink-0 text-black mr-6">
            <span className="font-extrabold text-xl tracking-tight">
              Pain and Gain
            </span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center font-bold lg:mx-4 lg:justify-end lg:w-auto">
            <div className="text-sm ">
              <Link
                to="/"
                onClick={handleOnclick}
                className="block mt-4 lg:inline-block lg:mt-0   text-black hover:text-white mr-4"
              >
                Home
              </Link>
              <Link
                to="/About"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
              >
                about
              </Link>
              <Link
                to="/About"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
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
