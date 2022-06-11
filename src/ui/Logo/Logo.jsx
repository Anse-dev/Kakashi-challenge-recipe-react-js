import React from "react";
import "./Logo.style.scss";
import logo from "../../logo.png";
function Logo() {
  return (
    <h1>
      <img src={logo} alt={logo ?? "logo dabali de chez nous "} />
    </h1>
  );
}

export default Logo;
