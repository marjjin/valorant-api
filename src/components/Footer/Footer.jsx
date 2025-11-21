import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
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
      <p>© 2024 Valorant API. All rights reserved.</p>
    </footer>
  );
}
