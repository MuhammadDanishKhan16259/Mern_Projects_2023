import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { user_is_signin, signOutUser } from "../config/FirebaseMethods";

export default function Navbar() {
  let navigate = useNavigate();
  // let [flag, setFlag] = useState(false);

  // useEffect(() => {
  //   user_is_signin()
  //     .then((_) => {
  //       console.log(_);
  //       setFlag(true);
  //     })
  //     .catch((_) => console.log(_));
  // }, [0]);

  // const logoutUser = () => {
  //   signOutUser()
  //     .then((_) => alert(_))
  //     .catch((_) => console.log(_));
  //   setFlag(false);
  // };

  return (
    <section className="navbar">
      <button onClick={() => navigate("/")} style={{ width: "150px" }}>
        Go to home
      </button>
      {/* {flag ? (
        <div className="buttons">
          <button onClick={logoutUser}>Log Out</button>
          <button>dashboard</button>
        </div>
      ) : (
        <div className="buttons">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>Sign up</button>
        </div>
      )} */}
      <button
        style={{ width: "200px" }}
        onClick={() => navigate("/student-registration-form")}
      >
        Registration form
      </button>
      <button
        style={{ width: "200px" }}
        onClick={() => navigate("/list-of-students")}
      >
        List of students
      </button>
      <button
        style={{ width: "150px" }}
        onClick={() => navigate("/course-form")}
      >
        Course Form
      </button>
      <button style={{ width: "150px" }} onClick={() => navigate("/dashboard")}>
        dashboard
      </button>
    </section>
  );
}
