import React, { useState } from "react";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./style/App.css";

const App = () => {
  let [storage, updateStorage] = useState([
    {
      title: "Example",
      description: "Example...",
    },
  ]);

  const itemsAdd = (val) => {
    updateStorage((value) => {
      return [...value, val];
    });
  };

  const DeletedItem = (id) => {
    updateStorage((val) => {
      return val.filter((val, index) => {
        return index !== id;
      });
    });
  };

  return (
    <React.StrictMode>
      <Header />
      <InputArea add={itemsAdd} />
      <Cards itemContent={storage} itemDelete={DeletedItem} />
      <Footer />
    </React.StrictMode>
  );
};

export default App;
