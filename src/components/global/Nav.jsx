import React from "react";
import logo from "../../images/cat.svg";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <img src={logo} alt="Go Home" />
          </a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
