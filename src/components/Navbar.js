import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Lessons from "./Lessons";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="logo__wrapper">
        <Link to={"/"}>
          <img
            alt="Санкт-Петербургский Метрополитен"
            src={require("../images/logo.svg").default}
            className="desktop_logo"
          />
        </Link>
      </div>
      <div id="tagline">Объединяем город, сближаем людей!</div>
      <div id="navbar__menu">
        <NavLink className="navbar-navlink" to="/lessons" element={<Lessons />}>
          Каталог
        </NavLink>
        <NavLink className="navbar-navlink" to="/signin" element={<SignIn />}>
          Вход
        </NavLink>
        <NavLink className="navbar-navlink" to="/signup" element={<SignUp />}>
          Регистрация
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
