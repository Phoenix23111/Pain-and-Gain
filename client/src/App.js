
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Home from "./components/Home"
import Login from "./components/login";
import About from "./components/About";



console.log(Location)

function App() {


  return (
    
    
    <>
      <Router>
        <Navbar/>
       <Routes>
       
        <Route path="/" element={<Home/>}/>
        <Route path="Login/*" element={<Login/>} />
        <Route path="SignUp/*" element={<SignUp/>} />
        <Route path="About/*" element={<About/>}/>
        
        
       </Routes>
      </Router>
    </>
    )
  
}

export default App;


