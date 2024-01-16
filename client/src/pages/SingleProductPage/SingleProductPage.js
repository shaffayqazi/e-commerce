import React, { useEffect, useState } from "react";
import "./SingleProductPage.scss";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart";
// import { useSelector, useDispatch } from "react-redux";

// import { STATUS } from "../../utils/status";
// import Loader from "../../components/Loader/Loader";
// import { formatPrice } from "../../utils/helpers";

// import CartMessage from "../../components/CartMessage/CartMessage";

const ProductSinglePage = () => {
  //   const dispatch = useDispatch();
  const { slug } = useParams();
  const [Product, setProduct] = useState({});
  const navigate = useNavigate();
  const [Quantity, setQuantity] = useState(1);
  const [cart, setCart] = useCart();

  // getting single product
  useEffect(() => {
    if (slug) {
      getProductDetail();
      console.log(slug);
      console.log("Success");
    } else {
      console.log("Failed");
    }
  }, [slug]);
  const getProductDetail = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/product/get-product/${slug}`
      );
      setProduct(data?.product);
      console.log(data?.product);
    } catch (error) {
      console.log(error);
    }
  };
  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > Product?.quantity) tempQty = Product?.quantity;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  return (
    <>
      <Header />

      <main className="py-5 bg-whitesmoke">
        <div className="product-single">
          <div className="container">
            <div className="product-single-content bg-white grid">
              <div className="product-single-l">
                <div className="product-img">
                  <div className="product-img-zoom">
                    <img
                      src={`http://localhost:8000/api/v1/product/product-photo/${Product._id}`}
                      alt=""
                      className="img-cover"
                    />
                  </div>

                  {/* <div className="product-img-thumbs flex align-center my-2">
                  <div className="thumb-item">
                    <img
                      src={
                        product ? (product.images ? product.images[1] : "") : ""
                      }
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="thumb-item">
                    <img
                      src={
                        product ? (product.images ? product.images[2] : "") : ""
                      }
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="thumb-item">
                    <img
                      src={
                        product ? (product.images ? product.images[3] : "") : ""
                      }
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="thumb-item">
                    <img
                      src={
                        product ? (product.images ? product.images[4] : "") : ""
                      }
                      alt=""
                      className="img-cover"
                    />
                  </div>
                </div> */}
                </div>
              </div>

              <div className="product-single-r">
                <div className="product-details font-manrope">
                  <div className="title fs-20 fw-5">{Product.name}</div>
                  <div>
                    <p className="para fw-3 fs-15">{Product.description}</p>
                  </div>
                  <div className="info flex align-center flex-wrap fs-14">
                    <div className="rating">
                      <span className="text-orange fw-5">Rating:</span>
                      <span className="mx-1">testing 4.6</span>
                    </div>
                    <div className="vert-line"></div>
                    <div className="brand">
                      <span className="text-orange fw-5">Brand:</span>
                      <span className="mx-1">Testing brand</span>
                    </div>
                    <div className="vert-line"></div>
                    {/* <div className="brand">
                      <span className="text-orange fw-5">Category:</span>
                                                    <span className="mx-1 text-capitalize">{ Product.category{"name" : ""}}</span>
                    </div> */}
                  </div>

                  <div className="price">
                    <div className="flex align-center">
                      <div className="old-price text-gray">80</div>
                      <span className="fs-14 mx-2 text-dark">
                        Inclusive of all taxes
                      </span>
                    </div>

                    <div className="flex align-center my-1">
                      <div className="new-price fw-5 font-poppins  text-orange">
                        {/* {formatPrice(discountedPrice)} */}
                        {Product.price}
                      </div>
                      <div className="discount bg-orange fs-13 text-white fw-6 font-poppins">
                       80 % OFF
                      </div>
                    </div>
                  </div>

                  <div className="qty flex align-center my-4">
                    <div className="qty-text">Quantity:</div>
                    <div className="qty-change flex align-center mx-3">
                      <button
                        type="button"
                        className="qty-decrease flex align-center justify-center"
                        onClick={() => decreaseQty()}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <div className="qty-value flex align-center justify-center">
                        {/* {Product.quantity} */}
                        {Quantity}
                      </div>
                      <button
                        type="button"
                        className="qty-increase flex align-center justify-center"
                        onClick={() => increaseQty()}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    {Product.quantity === 0 ? (
                      <div className="qty-error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 fw-5">
                        out of stock
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="btns">
                    <button type="button" className="add-to-cart-btn btn">
                      <i className="fas fa-shopping-cart"></i>
                      <span
                        className="btn-text mx-2"
                        onClick={() => {
                          setCart([...cart, Product]);
                        } }
                      >
                        add to cart
                      </span>
                    </button>
                    <button type="button" className="buy-now btn mx-3">
                      <span className="btn-text">buy now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {cartMessageStatus && <CartMessage />} */}
      </main>
      <Footer />
    </>
  );
};

export default ProductSinglePage;
