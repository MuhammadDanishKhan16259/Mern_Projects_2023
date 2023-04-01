import React, { useState } from "react";
import "../style/InputArea.css";

const InputArea = (props) => {
  let [flag, updateFlag] = useState(false);
  let [items, updateItems] = useState({
    title: "",
    description: "",
  });

  window.addEventListener("dblclick", () => {
    updateFlag(false);
  });

  const currentVal = (val) => {
    let { value, name } = val.target;
    updateItems((val) => {
      return { ...val, [name]: value };
    });
  };

  const addItem = () => {
    if (items.title === "" && items.description === "") {
      alert("Please put your value given fields");
    } else {
      props.add(items);

      updateItems(() => {
        return {
          title: "",
          description: "",
        };
      });
    }
  };

  return (
    <>
      <section className="inputArea">
        {flag ? (
          <input
            type="text"
            placeholder="Enter title"
            onChange={currentVal}
            name="title"
            value={items.title}
          />
        ) : null}
        <textarea
          placeholder="Write something here..."
          onClick={() => {
            updateFlag(true);
          }}
          style={{ borderRadius: flag ? "0 0 10px 10px" : "10px" }}
          onChange={currentVal}
          name="description"
          value={items.description}
        ></textarea>
        {flag ? (
          <button onClick={addItem}>
            <i class="fa-solid fa-plus"></i>
          </button>
        ) : null}
      </section>
    </>
  );
};

export default InputArea;
