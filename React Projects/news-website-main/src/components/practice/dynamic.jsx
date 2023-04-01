import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SorceData from "../json/data.json";

const Dynamic = () => {
    let {id} = useParams();
    let navigate = useNavigate();
    let data = SorceData.user[id];
  return (
    <>
      <h1>{data.name}</h1>
      <h1>{data.id}</h1>
      <button onClick={() => {
        navigate("/");
      }}>Go Home</button>
    </>
  );
};

export default Dynamic;
