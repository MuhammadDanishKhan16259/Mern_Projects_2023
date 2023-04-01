import React from "react";

// style
import "../style/TodoList.css";

// components
import List from "./List";

const TodoList = (props) => {
  const deleteItem = (pera) => {
    props.getDeleteItem(pera);
  };
  const updateItem = (pera) => {
    props.updateI(pera);
  };
  return (
    <section className="todo__list">
      {props.items.map((value, index) => {
        return (
          <List
            value={value}
            index={index}
            key={index}
            getDeleteItem={deleteItem}
            getUpdateItem={updateItem}
          />
        );
      })}
    </section>
  );
};

export default TodoList;
