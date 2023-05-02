import React, { useState, useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logos/Sic-Log.png';
import { CartContext } from './CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar__menu">
        <Link to="/catalogo" className="navbar__link">
          Catálogo
        </Link>
        <Link to="/nosotros" className="navbar__link">
          Nosotros
        </Link>
        <Link to="/contacto" className="navbar__link">
          Contacto
        </Link>
        <div className="navbar__cart">
          <button className="navbar__button" onClick={toggleCart}>
            <FaShoppingCart />
            Carrito ({cartItems.length})
          </button>
          {showCart && (
            <div className="navbar__cart-items">
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.price}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
