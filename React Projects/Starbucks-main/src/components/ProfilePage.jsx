import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
// scss
import "../style/ProfilePage.scss";

// components
import About from "./dashboard/About.jsx";
import Dashboard from "./dashboard/Dashboard";
import Bydefault from "./dashboard/Bydefault.jsx";
import Information from "./dashboard/Information.jsx";

export default function ProfilePage() {
  let navigate = useNavigate();
  let userName = localStorage.getItem("name");
  const signOut = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(true);
  };
  return (
    <section className="ProfilePage">
      <div className="left__side">
        <div className="nav">
          <ul>
            <li>
              <NavLink to="/profilePage">
                <span>
                  <i className="fa-solid fa-house-chimney"></i>
                </span>{" "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="about">
                <i className="fa-solid fa-address-card"></i> About
              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="grid-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-grid-2 fa-lg"
                >
                  <path
                    fill="currentColor"
                    d="M192 80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80zm0 256c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336zM256 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48zM448 336c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336z"
                    className=""
                  ></path>
                </svg>
                Dashboard
              </NavLink>
            </li>
            {userName.toLowerCase() === "admin" ? (
              <li>
                <NavLink to="information">
                  <span>
                    <i className="fa-solid fa-list"></i>
                  </span>{" "}
                  Items
                </NavLink>
              </li>
            ) : null}
          </ul>
        </div>
        <div className="button">
          <button onClick={signOut}>
            <i className="fa-solid fa-right-from-bracket"></i> Log Out
          </button>
        </div>
      </div>

      <Routes>
        <Route path="/">
          <Route index element={<Bydefault />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="information" element={<Information />} />
        </Route>
      </Routes>
    </section>
  );
}
