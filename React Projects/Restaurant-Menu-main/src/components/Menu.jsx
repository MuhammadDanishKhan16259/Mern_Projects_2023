import React, { useState } from "react";

// style
import "../style/menu.css";
// data
import data from "../data/foods.json";

const Menu = () => {
  let [ItemChange, updateItem] = useState(data.Foods[0].popular);
  const sortItem = (item) => {
    updateItem(data.Foods[0][item]);
  };
  return (
    <React.StrictMode>
      <section className="navbar">
        <h1>Our Menu</h1>
      </section>
      <section className="nav">
        <ul>
          {data.Foods.map((value) => {
            let key = Object.keys(value);
            return key.map((val, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    sortItem(val);
                  }}
                >
                  {val}
                </li>
              );
            });
          })}
        </ul>
      </section>
      <section className="cards">
        {ItemChange.map((value, index) => {
          let { name, detail, price, image } = value;
          return (
            <div className="card1" key={index}>
              <div className="col1">
                <div className="detail">
                  <h3>{name}</h3>
                  <p>{detail}</p>
                </div>
                <h3 className="price">Rs. {price}</h3>
              </div>
              <div className="col2">
                <img src={image} alt={name} />
              </div>
            </div>
          );
        })}
      </section>
    </React.StrictMode>
  );
};

export default Menu;
