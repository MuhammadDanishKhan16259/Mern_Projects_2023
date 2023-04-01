import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style/App.css";

// Components
import Boilerplate from "./components/Boilerplate";
import Home from "./components/Home";
import Error from "./components/Error";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Boilerplate />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
