import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Membership from "./Components/Membership/Membership";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Context";
import { useState } from "react";
import Profile from "./Components/Profile/Profile";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [logged_in, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    user_id: "",
    name: "",
    email: "",
  });

  return (
    <Context.Provider
      value={{
        logged_in,
        setLoggedIn,
        userData,
        setUserData,
        isLoading,
        setIsLoading,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Membership" element={<Membership />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
