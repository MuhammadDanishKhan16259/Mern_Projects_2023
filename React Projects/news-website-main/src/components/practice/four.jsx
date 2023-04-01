import React, {useState, useEffect} from "react";

const Four = () => {
    let [num, updateNum] = useState(0);
    useEffect(() => {
        console.log(`number is: ${num}`);
    }, [num]);
  return (
    <React.StrictMode>
      <h1>Four</h1>
      <button onClick={() => {updateNum(num = num + 1)}}>number is: {num}</button>
    </React.StrictMode>
  );
};

export default Four;
