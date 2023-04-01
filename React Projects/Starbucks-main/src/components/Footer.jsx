import { useState } from "react";
import { Link } from "react-router-dom";
import sourceCode from "../json/Footer.json";

// scss
import "../style/footer.scss";

export default function Footer() {
  let footerItem = sourceCode.FooterItem;
  return (
    <section className="footer">
      <div className="top">
        {footerItem.map((value, index) => {
          let [show, setShow] = useState(false);
          return (
            <div className="part1" key={index}>
              <p
                className="heading"
                onClick={show ? () => setShow(false) : () => setShow(true)}
              >
                {value.heading}
              </p>
              {show ? (
                <ul>
                  {value.liItem.map((value, index) => {
                    return (
                      <li key={index}>
                        <Link>{value}</Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="bottom">
        <ul className="social__icons">
          <li style={{ marginLeft: "0px" }}>
            <a href="">
              <i className="fa-brands fa-spotify"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
        <ul className="condition">
          <li>
            <a href="" style={{ paddingLeft: "0px" }}>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="">Terms of Use</a>
          </li>
          <li>
            <a href="">CA Supply Chain Act</a>
          </li>
          <li className="lastItem">
            <a href="">Cookie Preferences</a>
          </li>
        </ul>
        <div className="copyrightMessage">
          <p>© 2022 Shaykh Mirzaban. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
