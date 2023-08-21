import React from "react";
import { useNavigate } from "react-router-dom";
// style
import "../style/Services.css";
// components
import Services1 from "./Servcies1";
import CustomerReview from "./CustomerReview";

const Services = () => {
  let navigate = useNavigate();
  return (
    <React.StrictMode>
      <section className="cover1">
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vel
          molestiae iusto unde deserunt reiciendis rem et quisquam error?
          Commodi ea saepe quibusdam? Veniam,
        </p>
        <button
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact US
        </button>
      </section>
      <Services1 name={"Purchase"} image={"about"} />
      <section className="service1">
        <div className="col1" style={{ justifyContent: "flex-start" }}>
          <img src="./images/card4.jpg" alt="not found" />
        </div>
        <div className="col2">
          <h1>Process</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            dignissimos eius id ducimus fugiat cumque velit doloremque eligendi
            ut facere corporis voluptatum sapiente possimus deserunt fugit eum
            quam quod quas, doloribus excepturi! Laboriosam incidunt quis est,
            repellendus cum alias optio eius debitis officiis doloribus
            recusandae aut, doloremque voluptatem, sint illo.
          </p>
        </div>
      </section>
      <Services1 name={"Recive"} image={"card1"} />
      <CustomerReview />
    </React.StrictMode>
  );
};

export default Services;
