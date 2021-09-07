import React from "react";
import "./Product.css";
function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The lean startup</p>
        <p className="product_price">
          <small>Rs</small>
          <strong>150</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/81RCff1NpnL._AC_UY327_FMwebp_QL65_.jpg"
        alt="product"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
