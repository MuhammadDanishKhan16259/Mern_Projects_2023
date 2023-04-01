import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// style
import "../../style/navbar.css";

export default function Navbar() {
  let data = useSelector((a) => a.card);

  return (
    <section className="navbar">
      <div className="leftSide">
        <h1 className="heading">ECommerce</h1>
      </div>
      <div className="rightSide">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="/user-detail">User Detail</Link>
          </li>
          <li>
            <Link to="/card">Selected Card: {data ? data.length : 0}</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
