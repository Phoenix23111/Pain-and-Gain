import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp= () => {
  const [credentials, setcredentials] = useState({ name: "",email: "", password: "" });

  let Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/auth/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name :credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      Navigate("./Login");
    } else {
      alert(json.error);
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  return (
    <div className="container flex justify-center items-center mx-auto">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={credentials.name}
          onChange={onChange}
          type="text"
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          value={credentials.email}
          onChange={onChange}
          type="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          value={credentials.password}
          onChange={onChange}
          type="password"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
