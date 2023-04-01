import React, {useState} from "react";
import "./App.css";

const App = () => {
  let [val, updateVal] = useState(0);
  let [shadow, updateShadow] = useState("4px 0px 5px #646cff");

  const incrementVal = () => {
    updateVal(val + 1)

    if(val >= 0) {
      updateShadow("4px 0px 5px #646cff");
    }
    else {
      updateShadow("4px 0px 5px #ff64ad");
    }
    
  }

  const decrementVal = () => {
    updateVal(val - 1);

    if(val > 0) {
      updateShadow("4px 0px 5px #646cff");
    }
    else {
      updateShadow("4px 0px 5px #ff64ad");
    }

  }

  return(
    <React.StrictMode>
      <section className="main">
          <h1 style={{textShadow: shadow}}>{val}</h1>
          <div className="button">
            <button onClick={incrementVal}>Increment</button>
            <button onClick={decrementVal}>decrement</button>
          </div>
      </section>
    </React.StrictMode>
  )
}

export default App;