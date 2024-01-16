import React from "react";

import HeaderSlider from "../../components/Slider/HeaderSlider.js";
import Product from "./../../components/Product/Product.js";
import ProductList from "./../../components/ProductList/ProductList.js";
import Header from "./../../components/Header/Header.js";
import Footer from "./../../components/Footer/Footer.js";
import { useAuth } from "../../components/context/auth.js";

const Homepage = () => {
  const [auth, setAuth] = useAuth();

  return (
    <>
      <Header />
     
      <div className="slider-wrapper">
        <HeaderSlider />
      </div>
      <div className="container ">
        <div className="categories py-5">
          <div className="categories-item">
            <div className="title-md">
              <h3>Top products</h3>
            </div>

            <ProductList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Homepage;
