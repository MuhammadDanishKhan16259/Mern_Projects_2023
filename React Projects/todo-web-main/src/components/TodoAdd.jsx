import React, { useState } from "react";
import "../style/TodoAdd.css";

const TodoAdd = (props) => {
  let [desValue, setdesValue] = useState("");
  let input__area = document.querySelector(".inputArea");

  const currentDesdcription = (e) => {
    let { value } = e.target;
    setdesValue(value);
  };
  const addItem = () => {
    props.pasValue(desValue);
    input__area.value = "";
  };

  return (
    <React.StrictMode>
      <section className="addBar">
        <input
          type="text"
          placeholder="description"
          onChange={currentDesdcription}
          className="inputArea"
        />
        <button onClick={addItem}>Add</button>
      </section>
    </React.StrictMode>
  );
};

export default TodoAdd;
