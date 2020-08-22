import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../images/pokemon-logo.svg";
import "./header.css";

function Header(props) {
  const {searchField} = props;

  return (
    <header className="header">
      <div className="container">
        <img className="logo" src={logo} alt="Pokémon Store"></img>
        <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/water">Água</Link>
                </li>
                <li>
                  <Link to="/fire">Fogo</Link>
                </li>
                <li>
                  <Link to="/electric">Elétrico</Link>
                </li>
              </ul>
            </nav>
        </div>
        {searchField}
      </div>
    </header>
  );
}

export default Header;