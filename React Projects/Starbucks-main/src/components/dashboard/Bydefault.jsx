import { useEffect, useState } from "react";

// scss
import "../../style/Bydefault.scss";

export default function Bydefault() {
  let [time, setTime] = useState(0);
  let userName = localStorage.getItem("name");
  let date = new Date();
  let d = date.toLocaleTimeString();

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(date.toLocaleTimeString());
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="byDefault">
      {userName.toLowerCase() === "admin" ? (
        <h1>Welcome to Admin Panel</h1>
      ) : (
        <h1>Welcome, {userName}</h1>
      )}{" "}
      {userName.toLowerCase() === "admin" ? (
        <p>
          Hello Sir, You have all right to delete and edit and update items. You
          can do it anytime.
        </p>
      ) : (
        <p>
          Your full name is {userName}. You are currently signed in. Your login
          time is {d}. All the best for the new journey.{" "}
        </p>
      )}{" "}
      <h4> Current Time: {time}</h4>
      <h4> Current Date: 10/14/2022</h4>
    </div>
  );
}
