import React, {useState, useEffect} from "react";
import "./cart.scss";

function Minicart(props) {   
  
  const {isOpen, onClose} = props;

    return (
      <section className={`cart ${isOpen ? "show" : ""}`}>
        <div className="overlay" onClick={onClose}></div>
        <div className="cart__inner">teste</div>
      </section>
    );

}

export default Minicart;