import React from "react";
import { Outlet } from "react-router-dom";

import Navbar1 from "./Navbar1.jsx";

const Boilerplate = () => {
    return (
        <>
        <Navbar1 />
        <Outlet />
        </>
    )
};

export default Boilerplate;