import React from "react";
import { Outlet } from "react-router-dom";

// components
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Boilerplate() {
  return (
    <React.StrictMode>
      <Navbar />
      <Outlet />
      <Footer />
    </React.StrictMode>
  );
}
