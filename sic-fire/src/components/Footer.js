import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "../assets/styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3 className="footer-section-heading">Sobre Nosotros</h3>
          <p className="footer-section-text">
            Somos una tienda de laptops que ofrece la mejor calidad y servicio al
            cliente.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-heading">Contacto</h3>
          <p className="footer-section-text">Email: contacto@tiendalaptops.com</p>
          <p className="footer-section-text">Teléfono: +1 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-heading">Redes Sociales</h3>
          <div className="social-icons">
            
            <a href="// eslint-disable-next-line">
              <FaTwitter />
            </a>
            <a href="// eslint-disable-next-line">
              <FaFacebook />
            </a>
            <a href="// eslint-disable-next-line">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
          © 2023 | Todos los derechos reservados | Tienda de Laptops
        </p>
      </div>
    </footer>
  );
};

export default Footer;
