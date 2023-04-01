import React from "react";
import { Outlet } from "react-router-dom";

// component
import Navbar from "./Navbar";
import Footer from "./Footer";

const Boilerplate = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <Outlet />
      <Footer />
    </React.StrictMode>
  );
};

export default Boilerplate;
