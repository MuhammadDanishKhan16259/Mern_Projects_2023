import { Route, Routes } from "react-router-dom";

// components
import Boilerplate from "./components/Boilerplate.jsx";
import Home from "./components/Home.jsx";
import SignIn from "./components/SignIn.jsx";
import Create from "./components/Create.jsx";
import FindStoreLocation from "./components/FindStoreLocation.jsx";
import Menu from "./components/Menu.jsx";
import Rewards from "./components/Rewards.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import ProfilePage from "./components/ProfilePage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Boilerplate />}>
        <Route index element={<Home />} />
        <Route path="sign in" element={<SignIn />} />
        <Route path="create" element={<Create />} />
        <Route path="store-location" element={<FindStoreLocation />} />
        <Route path="menu" element={<Menu />} />
        <Route path="rewards" element={<Rewards />} />
        <Route path="profilePage/*" element={<ProfilePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
