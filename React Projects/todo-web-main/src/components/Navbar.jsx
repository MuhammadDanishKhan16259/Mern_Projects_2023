import React, { useState } from "react";

// style
import "../style/Navbar.css";

// date import
import CDate from "./Date12";

const Navbar = () => {
  let [t, setT] = useState();

  const time = () => {
    let date = new Date();
    let hour = date.getHours();
    let minut = date.getMinutes();

    let amAndpm = hour >= 12 ? "PM" : "AM";
    hour = hour >= 12 ? hour - 12 : hour;

    if (hour === 0 && amAndpm === "PM") {
      hour = 12;
    }
    if (hour === 0 && amAndpm === "AM") {
      hour = 12;
    }
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (minut < 10) {
      minut = `0${minut}`;
    }

    let timeFormating = `${hour}:${minut} ${amAndpm}`;
    setT(timeFormating);
  };

  setInterval(time, 1000);
  return (
    <React.StrictMode>
      <header>
        <h1 className="heading">Todo web</h1>
        <h1 className="center-text">Shaykh Mirzaban</h1>
        <div className="left-side-content">
          <p className="currentTime">{t}</p>
          <p className="currentDate">{CDate}</p>
        </div>
      </header>
    </React.StrictMode>
  );
};

export default Navbar;
