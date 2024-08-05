import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home.jsx";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";

import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import About from "./Components/About.jsx"
import Hub from "./Components/Hub.jsx"
import Vol from "./Components/Volunteer.jsx"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen  flex flex-col  bg-black">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hub" element={<Hub />} />
        <Route path="/Vol" element={<Vol />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
       
      </Routes>
    </div>
  );
}

export default App;
