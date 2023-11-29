import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [Visible, setVisible] = useState(false);
  const [Visible1, setVisible1] = useState(false);
  let Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/auth/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        cpassword: credentials.cpassword,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      Navigate("/Login");
    } else {
      alert(json.error);
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
    if (credentials.password !== credentials.cpassword){
      console.log("passwords do not match")
    }
    else{
      console.log("password match")
    }
  
  };

  return (
    <>
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create Your Account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-sm text-gray-700"
                >
                  Name:
                </label>
                <div className="mt-1">
                  <input
                    className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-ring-blue-500 sm:text-sm "
                    id="name"
                    name="name"
                    value={credentials.name}
                    onChange={onChange}
                    type="text"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-sm text-gray-700"
                >
                  Email:
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-ring-blue-500 sm:text-sm "
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
                    type={Visible ? "text" : "password"}
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
              <div>
                <label
                  htmlFor="cpassword"
                  className="block font-medium text-sm text-gray-700"
                >
                  Confirm Password:
                </label>
                <div className="mt-1 relative">
                  <input
                    className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-ring-blue-500 sm:text-sm "
                    id="cpassword"
                    name="cpassword"
                    value={credentials.cPassword}
                    onChange={onChange}
                    type={Visible1 ? "text" : "password"}
                  />
                  {Visible1 ? (
                    <AiOutlineEye
                      className="absolute right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible1(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible1(true)}
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-end ">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
                >
                  signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
