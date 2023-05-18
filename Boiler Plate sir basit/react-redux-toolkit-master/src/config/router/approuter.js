import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../screens/home";
import Login from "../../screens/login";
import Signup from "../../screens/signup";
import Products from "../../screens/product";
import CartScreen from "../../screens/cartscreen";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="product" element={<Products />} />
          <Route path="cart" element={<CartScreen />} />
        </Routes>
      </Router>
    </>
  );
}
