import { NavLink } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="navBar-css">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "activeOption" : "Option")}
      >
        HOME
      </NavLink>

      <NavLink
        to={"/category/celulares"}
        className={({ isActive }) => (isActive ? "activeOption" : "Option")}
      >
        Celulares
      </NavLink>
      <NavLink
        to={"/category/tablets"}
        className={({ isActive }) => (isActive ? "activeOption" : "Option")}
      >
        Tablets
      </NavLink>
      <NavLink
        to={"/category/notebooks"}
        className={({ isActive }) => (isActive ? "activeOption" : "Option")}
      >
        Notebooks
      </NavLink>
    </nav>
  );
};

export default NavBar;
