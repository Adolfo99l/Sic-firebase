import React, { useState, useContext, Fragment } from "react";
import { CartContext } from "./CartContext";
import "../assets/styles/FeaturedProducts.css";
import lenovoLegion5Image from "../assets/images/Products/Notebook Lenovo Legion 5 15ACH6H/1.png";
import omenImage from "../assets/images/Products/Notebook Gamer OMEN 16-C0506LA/1.png";
import msiImage from "../assets/images/Products/Notebook Msi Gamer GF63 Thin 10SC/1.png";

const FeaturedProducts = () => {
  const { addToCart } = useContext(CartContext);
  const [
    featuredProducts, // eslint-disable-next-line
    setFeaturedProducts,
  ] = useState([
    {
      id: 1,
      name: "Lenovo Legion 5",
      imageUrl: lenovoLegion5Image,
      specs: "Especificaciones técnicas básicas",
      price: 1000,
    },
    {
      id: 2,
      name: "Notebook Gamer OMEN 16-C0506LA",
      imageUrl: omenImage,
      specs: "Especificaciones técnicas básicas",
      price: 500,
    },
    {
      id: 3,
      name: "Notebook Msi Gamer GF63 Thin 10SC",
      imageUrl: msiImage,
      specs: "Especificaciones técnicas básicas",
      price: 500,
    },
  ]);

  return (
    <Fragment>
      <h2 className="featured-products-title">Productos destacados</h2>
      <div className="featured-products-container">
        {featuredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-card-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-card-content">
              <h3>{product.name}</h3>
              <p>{product.specs}</p>
              <div className="product-card-footer">
                <div className="product-price">${product.price}</div>
                <button onClick={() => addToCart(product)}>Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default FeaturedProducts;
