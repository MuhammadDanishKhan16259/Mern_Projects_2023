import React from "react";

// components
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

const App = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <Todo />
    </React.StrictMode>
  );
};

export default App;
