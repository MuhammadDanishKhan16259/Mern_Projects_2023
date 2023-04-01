import React, { useState } from "react";
// style
import "../style/List.css";
// import date
import CDate from "./Date12";

const List = ({ value, index, getDeleteItem, getUpdateItem }) => {
  let [bool, updateBool] = useState(false);

  const deleteItem = (pera) => {
    getDeleteItem(pera);
  };
  const updateItem = (pera) => {
    getUpdateItem(pera);
  };
  function check() {
    updateBool(true);
  }
  function checked() {
    updateBool(false);
  }

  return (
    <React.StrictMode>
      <div className="list" style={{ opacity: bool ? "0.5" : "1" }}>
        <div className="left__side__content">
          <h1>
            <i
              className="fa-regular fa-square"
              onClick={check}
              style={{ display: bool ? "none" : "block" }}
            ></i>
            <i
              className="fa-solid fa-square-check"
              onClick={checked}
              style={{ display: bool ? "block" : "none" }}
            ></i>
          </h1>
          <p style={{ textDecoration: bool ? "line-through" : "none" }}>
            {value}
          </p>
        </div>
        <div className="right__side__content">
          <p
            className="currentDate"
            style={{ textDecoration: bool ? "line-through" : "none" }}
          >
            {CDate}
          </p>
          <div
            className="edit"
            title="update item"
            onClick={
              bool
                ? null
                : () => {
                    updateItem(index);
                  }
            }
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </div>
          <div
            className="delete"
            title="delete item"
            onClick={() => {
              deleteItem(index);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default List;
