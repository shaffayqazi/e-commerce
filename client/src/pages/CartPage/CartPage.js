import React from "react";
import { useState } from "react";
import "./CartPage.scss";
// import { useSelector, useDispatch } from 'react-redux';
// import { shopping_cart } from '../../utils/images';
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../context/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { formatPrice } from '../../utils/helpers';

const CartPage = () => {
  // const dispatch = useDispatch();
  // const carts = useSelector(getAllCarts);
  // const { itemsCount, totalAmount} = useSelector((state) => state.cart);
  const [cart, setCart] = useCart();
  const [Quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > cart?.quantity) tempQty = cart?.quantity;
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

  if (cart.length === 0) {
    return (
      <div className="container my-5">
        <div className="empty-cart flex justify-center align-center flex-column font-manrope">
          <span className="fw-6 fs-15 text-gray">
            Your shopping cart is empty.
          </span>
          <Link to="/" className="shopping-btn bg-orange text-white fw-5">
            Go shopping Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="cart bg-whitesmoke">
        <div className="container">
          <div className="cart-ctable">
            <div className="cart-chead bg-white">
              <div className="cart-ctr fw-6 font-manrope fs-15">
                <div className="cart-cth">
                  <span className="cart-ctxt">S.N.</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Product</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Unit Price</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Quantity</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Total Price</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Actions</span>
                </div>
              </div>
            </div>

            <div className="cart-cbody bg-white">
              {
                // carts.map((cart, idx) => {
                cart.map((cart, idx) => {
                  const totalPrice = cart?.price * Quantity;
                  return (
                    <div className="cart-ctr py-4" key={cart?._id}>
                      {/* // key={cart?._id}> */}
                      <div className="cart-ctd">
                        <span className="cart-ctxt">{idx + 1}</span>
                      </div>
                      <div className="cart-ctd">
                        <span className="cart-ctxt">{cart.name}</span>
                      </div>
                      <div className="cart-ctd">
                        <span className="cart-ctxt">
                          {/* {formatPrice(cart?.discountedPrice)} */}

                          {cart.price}
                        </span>
                      </div>
                      <div className="cart-ctd">
                        <div className="qty-change flex align-center">
                          <button
                            type="button"
                            className="qty-decrease flex align-center justify-center"
                            onClick={() => decreaseQty()}
                          >
                            <FontAwesomeIcon icon="fas fa-minus" />
                          </button>

                          <div className="qty-value flex align-center justify-center">
                            {Quantity}
                          </div>
                          <button
                            type="button"
                            className="qty-increase flex align-center justify-center"
                            onClick={() => increaseQty()}
                          >
                            <FontAwesomeIcon icon="fas fa-plus" />
                          </button>
                        </div>
                      </div>

                      <div className="cart-ctd">
                        <span className="cart-ctxt text-orange fw-5">
                          {/* {formatPrice(cart?.totalPrice)} */}
                          {totalPrice}
                        </span>
                      </div>

                      <div className="cart-ctd">
                        <button
                          type="button"
                          className="delete-btn text-dark"
                          // onClick={() => dispatch(removeFromCart(cart?.id))}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })
              }
            </div>

            <div className="cart-cfoot flex align-start justify-between py-3 bg-white">
              <div className="cart-cfoot-l">
                <button
                  type="button"
                  className="clear-cart-btn text-danger fs-15 text-uppercase fw-4"
                  // onClick={() => dispatch(clearCart())}
                >
                  <i className="fas fa-trash"></i>
                  <span className="mx-1">Clear Cart</span>
                </button>
              </div>

              <div className="cart-cfoot-r flex flex-column justify-end">
                <div className="total-txt flex align-center justify-end">
                  <div className="font-manrope fw-5">Total items: </div>
                  <span className="text-orange fs-22 mx-2 fw-6">
                    {/* {formatPrice(totalAmount)} */}
                  </span>
                </div>

                <button
                  type="button"
                  className="checkout-btn text-white bg-orange fs-16"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
