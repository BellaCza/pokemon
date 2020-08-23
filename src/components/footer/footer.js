import React from "react";
import "./footer.scss";
import Bulbapedia from "../../images/bulbapedia.png";
import Visa from "../../images/visa.png";
import Master from "../../images/master-card.png";
import American from "../../images/american-express.png";
import Boleto from "../../images/boleto.png";
import Certificate from "../../images/certificate.png";

function Footer(props) {

    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-4 footer__info">
              <h6>Mais informações em</h6>
              <a
                className="link"
                href="https://bulbapedia.bulbagarden.net/wiki/Main_Page"
              >
                <img className="image" src={Bulbapedia} alt="Bulbapedia" />
              </a>
            </div>
            <div className="col-xs-12 col-md-4 footer__payment">
              <h6>Formas de Pagamento</h6>
              <div>
                <img className="logo" src={Visa} alt="Visa" />
                <img className="logo" src={Master} alt="Master Card" />
                <img className="logo" src={American} alt="American Express" />
                <img className="logo" src={Boleto} alt="Boleto" />
              </div>
            </div>
            <div className="col-xs-12 col-md-4 footer__certificate">
              <h6>Loja Certificada</h6>
              <img className="logo" src={Certificate} alt="Certificado" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 footer__rights">
              <span>Pokemón Store &copy; 2020 - Todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Footer;