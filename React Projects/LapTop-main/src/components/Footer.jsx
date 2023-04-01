import React from "react";
import { Link } from "react-router-dom";

// style
import "../style/Footer.css";

const Footer = () => {
  return (
    <React.StrictMode>
      <section className="footer">
        <div className="top">
          <h1>LapTop</h1>
          <p>
            The laptop is a store that provides all types of laptops. The price
            is very low and easy to process. If you any confusion so please
            contact us below link.
          </p>
          <ul>
            <li>
              <a href="#" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <h4>copyright 2022 || LapTop</h4>
          <nav>
            <Link to="/">Home</Link>
            <Link to="cards">Cards</Link>
            <Link to="services">Services</Link>
            <Link to="contact">Contact us</Link>
          </nav>
        </div>
      </section>
    </React.StrictMode>
  );
};

export default Footer;
