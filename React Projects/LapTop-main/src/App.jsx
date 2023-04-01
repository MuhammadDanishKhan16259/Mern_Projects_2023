import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import Boilerplate from "./components/Boilerplate";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Error from "./components/Error.jsx";

const App = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Boilerplate />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<Cards />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </React.StrictMode>
  );
};

export default App;
