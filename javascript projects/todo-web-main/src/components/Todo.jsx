import React, { useState } from "react";
import "../style/Todo.css";

// components
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const Todo = () => {
  let [dateStor, setdataStor] = useState([]);

  let box = document.querySelector(".updateB");
  let val;

  const getFn = (pera) => {
    setdataStor((v) => {
      return [...v, pera];
    });
  };

  const DItem = (pera) => {
    setdataStor((v) => {
      return v.filter((value, index) => {
        return index !== pera;
      });
    });
  };

  const updateItem = (pera) => {
    val = pera;
    let item = document.querySelector(".replaceValue");
    item.value = dateStor[pera];
    box.style.transform = "scale(1)";
  };

  const update = () => {
    let replace = document.querySelector(".replaceValue");

    setdataStor((v) => {
      return v.map((value, index) => {
        if (index === val) {
          return (value = replace.value);
        } else {
          return value;
        }
      });
    });

    box.style.transform = "scale(0)";
  };

  const close = () => {
    box.style.transform = "scale(0)";
  };

  const removeAll = () => {
    setdataStor([]);
  };

  return (
    <React.StrictMode>
      <section className="updateB">
        <div className="box">
          <div className="close" onClick={close}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <input
            type="text"
            placeholder="this is value"
            className="replaceValue"
          />
          <button onClick={update}>Replace</button>
        </div>
      </section>
      <TodoAdd pasValue={getFn} />
      <TodoList items={dateStor} getDeleteItem={DItem} updateI={updateItem} />
      {dateStor.length > 1 ? (
        <section className="deleteAll">
          <button onClick={removeAll}>Delete All</button>
        </section>
      ) : null}
    </React.StrictMode>
  );
};

export default Todo;
