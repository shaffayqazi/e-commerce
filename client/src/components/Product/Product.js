// Product.js
import React from "react";
import "./Product.scss";

const Product = ({ name, description, category, price, quantity, photo }) => {
  return (
    <div className="product-item bg-white">
      <div className="category">{category}</div>
      <div className="product-item-img">
        <img className="img-cover" src={photo} />
      </div>
      <div className="product-item-info fs-14">
        {/* <div className="brand">
          <span>Brand: </span>
          <span className="fw-7">
            <a href={`/brand/${brand}`}>{brand}</a>
          </span>
        </div> */}
        {/* <div className="title py-2">{title}</div> */}
        <div className="price flex align-center justify-center">
          <span className="old-price">{price}</span>
          {/* <span className="new-price">{newPrice}</span> */}
          {/* <span className="discount fw-6">{discount}% OFF</span> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
