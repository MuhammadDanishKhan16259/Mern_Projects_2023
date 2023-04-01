import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import News from "./components/News";
import ParticularInforamtion from "./components/ParticularInforamtion.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<News />} />
      <Route path="detail" element={<ParticularInforamtion />} />
    </Routes>
  );
};

export default App;
