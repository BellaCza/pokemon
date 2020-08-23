import React from "react";
import "./cart.scss";
import {
  X
} from "react-bootstrap-icons";

function Minicart(props) {   
  
  const {isOpen, onClose} = props;

    return (
      <section className={`cart ${isOpen ? "show" : ""}`}>
        <div className="overlay" onClick={onClose}></div>
        <div className="cart__inner">
          <div className="cart__close" onClick={onClose}>
            <a href="#">
              <X className="icon"></X>
            </a>
          </div>
          <div className="cart__flexbox">
            <div>
              <h4>Produtos no carrinho</h4>
              <div className="prod-list">
                teste
              </div>
            </div>
            <div>
              <div className="summary">
                <div className="summary__line">
                  <div className="title">Subtotal:</div>
                  <div className="info">R$99,00</div>
                </div>
                <div className="summary__line">
                  <div className="title">Descontos:</div>
                  <div className="info">R$00,00</div>
                </div>
                <div className="summary__line">
                  <div className="title">Frete:</div>
                  <div className="info green">Grátis</div>
                </div>
                <div className="summary__line summary__line--total">
                  <div className="title">Total:</div>
                  <div className="info">R$99,00</div>
                </div>
              </div>
              <button className="btn btn--buy">Finalizar compra</button>
              <button className="btn btn--cancel" onClick={onClose}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </section>
    );

}

export default Minicart;