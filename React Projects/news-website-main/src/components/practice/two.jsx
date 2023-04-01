import React from "react";
import { Link } from "react-router-dom";
import SourceData from "../json/data.json"; 

const Two = () => {
  return (
    <React.StrictMode>
      <h1>Two </h1>
      {
        SourceData.user.map((value) => {
          return (
            <p key={value.id}><Link to={`${value.id}`}>{value.name}</Link></p>
          )
        })
      }
    </React.StrictMode>
  );
};

export default Two;
