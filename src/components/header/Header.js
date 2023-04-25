import "./header.css";
import LogoBullMarketplace from "./assets/LogoBullMarketplace.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header-css">
      <Link to="/">
        <img className="logo" src={LogoBullMarketplace} alt="Logo" />
      </Link>
      <CartWidget />
    </div>
  );
};

export default header;
