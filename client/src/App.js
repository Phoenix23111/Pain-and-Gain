import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Login from "./components/login";
import About from "./components/About";
import GetUserState from "./context/authentication/GetUserState";
import Homepage from "./components/Homepage";
console.log(Location);

function App() {
  return (
    <>
      <GetUserState>
        <div className=" bg-green-700">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Login/*" element={<Login />} />
            <Route path="SignUp/*" element={<SignUp />} />
            <Route path="About/*" element={<About />} />
            <Route path="Homepage/*" element={<Homepage/>}/>
          </Routes>
        </Router>
        </div>
      </GetUserState>
    </>
  );
}

export default App;
