import React from "react";
import { NavLink } from "react-router-dom";

const One = () => {
  return (
    <React.StrictMode>
      <h1>One</h1>
      <NavLink to="two">Two</NavLink>
    </React.StrictMode>
  );
};

export default One;
