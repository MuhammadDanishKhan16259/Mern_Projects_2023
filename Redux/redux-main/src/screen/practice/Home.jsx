import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteAllItem, deleteItem, updateItem } from "./redux/Todo";

export default function App() {
  let [currentV, setCurrentV] = useState("");
  let [flag, setFlag] = useState(false);
  let [valueReplace, setValueReplace] = useState("");
  let dispatch = useDispatch();
  let item = useSelector((e) => e.todo);
  const addItem1 = () => {
    dispatch(addItem(currentV));
  };

  const deleteItem1 = (e) => {
    dispatch(deleteItem(e));
  };

  let key = 0;
  const updateItem1 = (e) => {
    key = e;
    setFlag(true);
    setValueReplace(item[e]);
  };

  const replaceItem = () => {
    dispatch(updateItem({ key, valueReplace }));
    setFlag(false);
  };

  const deleteAllItem1 = () => {
    dispatch(deleteAllItem());
  }

  return (
    <section className="App">
      <div className="heading">
        <h1>Todo</h1>
      </div>

      <input type="text" onChange={(e) => setCurrentV(e.target.value)} />
      <button onClick={addItem1}>Add Item</button>

      {flag && (
        <div className="replaceItem">
          <input
            type="text"
            value={valueReplace}
            onChange={(e) => setValueReplace(e.target.value)}
          />
          <button onClick={replaceItem}>Replace</button>
        </div>
      )}

      <div className="list">
        {item.map((value, index) => {
          return (
            <div key={index}>
              <p>{value}</p>
              <button onClick={() => deleteItem1(index)}>Delete</button>
              <button onClick={() => updateItem1(index)}>Update</button>
            </div>
          );
        })}
      </div>

      {item.length > 2 && <button onClick={deleteAllItem1}>Delete All Item</button>}
    </section>
  );
}
