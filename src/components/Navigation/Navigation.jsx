import React from "react";
import "./Navigation.style.scss";

function Navigation() {
  return (
    <div className="menuNavigation-holder">
      <ul className="menus-list">
        <li className="menu-item active">
          <a
            href="#"
            className="menu-link tap-action"
            data-toggle-drop-menu="dropDown-menu"
          >
            Récettes
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link tap-action">
            Altetics
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link tap-action">
            équilibre
          </a>
        </li>

        <li className="menu-item">
          <a href="#" className="menu-link tap-action">
            Végétarien
          </a>
        </li>

        <li className="menu-item">
          <a href="#" className="menu-link tap-action">
            Blog
          </a>
        </li>

        <li className="menu-item">
          <a href="#" className="menu-link tap-action">
            A propos
          </a>
        </li>

        <li className="menu-item">
          <a href="#" className="menu-link tap-action">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
