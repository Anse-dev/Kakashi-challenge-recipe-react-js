import React from "react";
import "./asideContainer.style.scss";
const AsideContainer = ({ children, props }) => {
  return (
    <header className="aside-holder">
      <div className="aside__inner">{children}</div>
    </header>
  );
};

export default AsideContainer;
