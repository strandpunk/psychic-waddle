import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import Login from "../login/Login";
import Register from "../register/Register";
import Lessons from "../Lessons";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="logo__wrapper">
        <Link to={"/"}>
          <img
            alt="Санкт-Петербургский Метрополитен"
            src={require("../../images/logo.svg").default}
            className="desktop_logo"
          />
        </Link>
      </div>
      <div id="tagline">Объединяем город, сближаем людей!</div>
      <div id="navbar__menu">
        <NavLink className="navbar-navlink" to="/lessons" element={<Lessons />}>
          Каталог
        </NavLink>
        <NavLink className="navbar-navlink" to="/login" element={<Login />}>
          Вход
        </NavLink>
        <NavLink
          className="navbar-navlink"
          to="/register"
          element={<Register />}
        >
          Регистрация
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
