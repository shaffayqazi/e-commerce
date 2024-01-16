import logo from "./logo.svg";
import "./App.scss";
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { Link, Links, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Homepage from "./pages/Homepage/Homepage.js";
import Registration from "./pages/Registration/Registration.js";
import Login from "./pages/Login/Login.js";
import Dashboard from "./pages/user/Dashboard.js";
// import StoreService from "./Store/StoreService.js";
import PrivateRoute from "./components/routes/PrivateRoute.js";
import ProductSinglePage from "./pages/SingleProductPage/SingleProductPage.js";
import CartPage from "./pages/CartPage/CartPage.js";


function App() {
  return (
    <div className="App">
      {/* <StoreService /> */}
      {/* <img src="https://raw.githubusercontent.com/levinmejia/Shopify-Product-CSVs-and-Images/master/Images/SnowDevil/Men/10175100258_1_1264x1800_300_RGB_large.jpeg" /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:slug" element={<ProductSinglePage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     
    </div>
  );
}

export default App;
library.add(fab, fas, far);
