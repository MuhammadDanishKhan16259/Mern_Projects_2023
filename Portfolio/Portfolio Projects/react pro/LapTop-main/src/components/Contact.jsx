import React, { useState } from "react";

// style
import "../style/contact.css";

const Contact = () => {
  let [userValue, updateValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const currentValue = (event) => {
    let { name, value } = event.target;
    updateValue((val) => {
      return { ...val, [name]: value };
    });
  };

  const show = (event) => {
    event.preventDefault();
    let box = document.querySelector(".welcome");
    box.style.transform = "scale(1)";
  };
  const hide = () => {
    let box = document.querySelector(".welcome");
    box.style.transform = "scale(0)";
    updateValue(() => {
      return {
        name: "",
        email: "",
        password: "",
      };
    });
  };
  return (
    <React.StrictMode>
      <section className="contact">
        <div className="heading">
          <h1>Contact US</h1>
        </div>
        <form onSubmit={show}>
          <div className="name">
            <label>Enter Your name: </label>
            <input
              type="text"
              placeholder="Mirzaban"
              name="name"
              onChange={currentValue}
              value={userValue.name}
              required
            />
          </div>
          <div className="email">
            <label>Enter Your gamil: </label>
            <input
              type="email"
              placeholder="Mirzaban@gamil.com"
              name="email"
              onChange={currentValue}
              value={userValue.email}
              required
            />
          </div>
          <div className="password">
            <label>Enter Your password: </label>
            <input
              type="password"
              name="password"
              onChange={currentValue}
              value={userValue.password}
              required
            />
          </div>
          <button>Submit</button>
        </form>
      </section>
      <section className="welcome">
        <div className="box">
          <p>
            your name is: <span> {userValue.name}</span> <br /> your email is:
            <span> {userValue.email}</span> <br /> your password is:
            <span> {userValue.password}</span>
          </p>
          <div className="close" onClick={hide}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </React.StrictMode>
  );
};

export default Contact;
