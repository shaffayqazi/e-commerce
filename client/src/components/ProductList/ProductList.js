import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.scss";
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/product/get-product"
      );
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  if (!products || products.length === 0)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div>
      <div className="product-lists grid  my-3">
        {products.map((product) => {
          return (
            <Link to={`/product/${product.slug}`} key={product._id}>
              <div className="product-item bg-white" >
                <div className="category">{product?.category.name}</div>
                <div className="product-item-img">
                  <img
                    className="img-cover"
                    src={`http://localhost:8000/api/v1/product/product-photo/${product._id}`}
                    alt={product.name}
                  />
                </div>
                <div className="product-item-info fs-14">
                  <div className="brand">
                    <span>Brand: </span>
                    <span className="fw-7">{"TWS"}</span>
                  </div>
                  <div className="title py-2">{product?.name}</div>
                  <div className="price flex align-center justify-center">
                    {/* <span className="old-price">Old Price</span> */}
                    <span className="new-price">{product.price}</span>
                    {/* <span className="discount fw-6">( % Off )</span> */}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
