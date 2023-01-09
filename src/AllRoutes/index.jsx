import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactUs from "../Components/Pages/ContactUs";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import Logout from "../Components/Pages/Logout";
import Profile from "../Components/Pages/Profile";
import About from '../Components/Pages/About';
import Registion from '../Components/Pages/Registion';


export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/register" element={<Registion />} />
      <Route path="/about" element={<About />} />
      <Route path="/logout" element={<Logout/>} />
    </Routes>
  );
};
export default AllRoutes
