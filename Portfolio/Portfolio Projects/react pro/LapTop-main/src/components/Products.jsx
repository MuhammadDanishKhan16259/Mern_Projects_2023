import React from "react";
import { Link } from "react-router-dom";
// styling
import "../style/Products.css";
// card data
import SorceData from "./data/cards.json";

const Products = () => {
  let data = SorceData.Cards;
  return (
    <React.StrictMode>
      <section className="products">
        <div className="heading">
          <h1>Products</h1>
        </div>
        <div className="card">
          {data.map((val) => {
            return (
              <div className="card1" key={val.id}>
                <div className="image">
                  <img
                    src={`./images/${val.image}`}
                    alt={val.name}
                  />
                </div>
                <div className="description">
                  <h1>{val.name}</h1>
                  <p>{val.description}</p>
                  <div className="subPart">
                    <h3>${val.price}</h3>
                    <Link to="/detail">Buy Now</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </React.StrictMode>
  );
};

export default Products;
