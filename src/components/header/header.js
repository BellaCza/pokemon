import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Minicart from "../../components/cart/cart";
import Logo from "../../images/pokemon-logo.svg";
import "./header.scss";
import { Search, Person, Cart, List, X, ChevronRight } from "react-bootstrap-icons";

function Header(props) {
  const {searchField, onChangeType} = props;

  const [showMenu, setshowMenu] = useState(false);

  const [showSearch, setshowSearch] = useState(false);
  
  const [showCart, setshowCart] = useState(false);

  return (
    <header className="header">
      <section className="top-bar">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <p className="top-bar__text">
                Faça seu cadastro e receba{" "}
                <span className="strong spotlight">10% de desconto</span> na
                primeira compra!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="header-main">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <div className="header-main__content">
                <div className="menu__mobile">
                  <a href="#" onClick={() => setshowMenu(true)}>
                    <List className="icon"></List>
                  </a>
                </div>
                <a href="/">
                  <img className="logo" src={Logo} alt="Pokémon Store"></img>
                </a>
                <div className={`search ${showSearch ? "show" : ""}`}>
                  {searchField}
                  <Search
                    className="icon"
                    onClick={() => setshowSearch(false)}
                  ></Search>
                </div>
                <div className="user">
                  <div className="user__profile">
                    <a href="#">
                      <Person className="icon"></Person>
                    </a>
                  </div>
                  <div className="user__search">
                    <a href="#" onClick={() => setshowSearch(true)}>
                      <Search className="icon"></Search>
                    </a>
                  </div>
                  <div className="user__cart">
                    <a href="#" onClick={() => setshowCart(true)}>
                      <Cart className="icon"></Cart>
                      <span className="badge">99</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`menu ${showMenu ? "show" : ""}`}>
        <div className="row">
          <div className="col-md-12">
            <nav className="container">
              <div className="menu__close" onClick={() => setshowMenu(false)}>
                <a href="#">
                  <X className="icon"></X>
                </a>
              </div>
              <div className="menu__user">
                <a href="#">
                  <Person className="icon"></Person>
                  <p>Entrar</p>
                </a>
              </div>
              <ul className="menu__list">
                <li
                  className="menu__list-item"
                  onClick={() => setshowMenu(false)}
                >
                  <Link to="/" onClick={() => onChangeType("")}>
                    Início
                    <ChevronRight className="icon" />
                  </Link>
                </li>
                <li
                  className="menu__list-item"
                  onClick={() => setshowMenu(false)}
                >
                  <Link to="/water" onClick={() => onChangeType("water")}>
                    Água
                    <ChevronRight className="icon" />
                  </Link>
                </li>
                <li
                  className="menu__list-item"
                  onClick={() => setshowMenu(false)}
                >
                  <Link to="/fire" onClick={() => onChangeType("fire")}>
                    Fogo
                    <ChevronRight className="icon" />
                  </Link>
                </li>
                <li
                  className="menu__list-item"
                  onClick={() => setshowMenu(false)}
                >
                  <Link to="/electric" onClick={() => onChangeType("electric")}>
                    Elétrico
                    <ChevronRight className="icon" />
                  </Link>
                </li>
                <li
                  className="menu__list-item"
                  onClick={() => setshowMenu(false)}
                >
                  <Link to="/dark" onClick={() => onChangeType("dark")}>
                    Sombra
                    <ChevronRight className="icon" />
                  </Link>
                </li>
                <li
                  className="menu__list-item"
                  onClick={() => setshowMenu(false)}
                >
                  <Link to="/fairy" onClick={() => onChangeType("fairy")}>
                    Fada
                    <ChevronRight className="icon" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <div
        className={`overlay ${showMenu ? "show" : ""}`}
        onClick={() => setshowMenu(false)}
      ></div>
      <Minicart isOpen={showCart} onClose={() => setshowCart(false)} />
    </header>
  );
}

export default Header;