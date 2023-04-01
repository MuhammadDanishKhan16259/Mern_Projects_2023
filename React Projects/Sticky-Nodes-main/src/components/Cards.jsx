import React from "react";
import "../style/Cards.css";

const Cards = (props) => {
  let val1 = props.itemContent;
  const deleteItem = (id) => {
    props.itemDelete(id);
  };
  return (
    <>
      <section className="cards">
        {val1.map((value, index) => {
          return (
            <div className="box" key={index}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
              <button
                onClick={() => {
                  deleteItem(index);
                }}
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Cards;
