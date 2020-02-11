import React from "react";
import { Link } from "react-router-dom";

// The ReactComponent import name is special and tells Create React App that you want a React component that renders an SVG, rather than its filename.
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
