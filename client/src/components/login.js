import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import  { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let Navigate = useNavigate();
  const location = useLocation();
  console.log("Current Path:", location.pathname);

  const [Visible, setVisible]  = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token
      localStorage.setItem("auth-token", json.authtoken);
      console.log("this is atoken="+localStorage.getItem("auth-token"))
  
      // Fetch user data
      const userResponse = await fetch("http://localhost:3001/api/auth/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token") // Include the auth token in the headers
        },
      });
  
      const userData = await userResponse.json();
      console.log(userData);
  
      // Redirect to home page
      Navigate("/"); // Assuming "/" is the path for the home page
    } else {
      alert("INVALID Credentials");
    }
  };
  

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className=" space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-sm text-gray-700"
              >
                Email Address:
              </label>

              <div className="mt-1 ">
                <input
                  className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-ring-blue-500 sm:text-sm "
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={onChange}
                  type="email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block font-medium text-sm text-gray-700"
              >
                Password:
              </label>
              <div className="mt-1 relative">
                <input
                  className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-ring-blue-500 sm:text-sm "
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={onChange}
                  type={Visible? "text":"password"}
                />
                {Visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;