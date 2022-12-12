import React from "react";
import { Link } from "react-router-dom";

import "./styles/Header.css";

function Header() {
  return (
    <header className="header">
      <img
        src="https://www.freeiconspng.com/thumbs/circle-png/circle-outline-png-3.png"
        alt="logo"
        className="header--logo"
      />
      <nav className="header--nav">
        <a href={"https://github.com/"} rel="noreferrer" target="_blank">
          github
        </a>
        <a
          href={"https://www.linkedin.com/in/krzysztofradzieta/"}
          rel="noreferrer"
          target="_blank"
        >
          linkedin
        </a>
        <Link to="/contact">contact</Link>
        <Link to="/about">about</Link>
        <Link to="/portfolio">portfolio</Link>
      </nav>
    </header>
  );
}

export default Header;
