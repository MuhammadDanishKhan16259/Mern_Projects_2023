import { useDispatch } from "react-redux";
import { add } from "../config/redux/reducer/loginslice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = () => {
    dispatch(
      add({
        email: "abc@gmail.com",
        password: "123456",
      })
    );
    navigate("/");
  };
  return (
    <>
      <h1>Login</h1>
      <button onClick={loginUser}>Login</button>
    </>
  );
}
