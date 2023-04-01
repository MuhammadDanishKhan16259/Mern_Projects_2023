import React from "react";

// style
import "../style/services1.css";

const Services1 = (props) => {
  return (
    <React.StrictMode>
      <section className="service1">
        <div className="col2">
          <h1>{props.name}</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, dignissimos eius id ducimus fugiat cumque velit doloremque eligendi ut facere corporis voluptatum sapiente possimus deserunt fugit eum quam quod quas, doloribus excepturi! Laboriosam incidunt quis est, repellendus cum alias optio eius debitis officiis doloribus recusandae aut, doloremque voluptatem, sint illo.
          </p>
        </div>
        <div className="col1">
          <img src={`./images/${props.image}.jpg`} alt="not found" />
        </div>
      </section>
    </React.StrictMode>
  );
};

export default Services1;
