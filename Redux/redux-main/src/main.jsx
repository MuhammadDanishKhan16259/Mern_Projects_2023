import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Store from "./Store/Store";
import { Provider } from "react-redux";
import "./style/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
