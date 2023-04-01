import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Home from "./screen/practice1/Home";
import Card from "./screen/practice1/Card";
import Navbar from "./screen/practice1/Navbar";
import LoginUser from "./screen/LoginUser";
import UserDetail from "./screen/UserDetail";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="user-detail" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}
