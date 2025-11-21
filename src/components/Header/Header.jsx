import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h1 className="header-title">
        <Link to="/" className="header-link">
          Valorant API
        </Link>
      </h1>

      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/agents">Agents</Link>
          </li>
          <li>
            <Link to="/maps">Maps</Link>
          </li>
          <li>
            <Link to="/weapons">Weapons</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
