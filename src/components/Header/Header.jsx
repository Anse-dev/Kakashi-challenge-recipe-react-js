import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../ui/Logo/Logo";
import "./header.styles.scss";
function Header() {
  return (
    <div className="headerLogo-holder">
      <Link to={"/"} className="header-logo tap-action">
        <Logo />
      </Link>
    </div>
  );
}

export default Header;
