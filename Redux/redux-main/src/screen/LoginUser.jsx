import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItems } from "../Store/loginSlice";

export default function LoginUser() {
  let [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const currentV = (e) => {
    let { name, value } = e.target;
    setData((val) => {
      return { ...val, [name]: value };
    });
  };

  const loginUser = (e) => {
    e.preventDefault();

    dispatch(addItems(data));
    navigate("/user-detail");
  };

  return (
    <section className="loginUser">
      <div className="heading">
        <h1>Login User</h1>
      </div>
      <form onSubmit={loginUser}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={currentV}
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={currentV}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={currentV}
        />

        <button>Login</button>
      </form>
    </section>
  );
}
