import React from "react";

const Three = (props) => {
  return (
    <React.StrictMode>
        <h1>Three</h1>
      <h1>{props.id}</h1>
      <h1>{props.name}</h1>
    </React.StrictMode>
  );
};

export default Three;
