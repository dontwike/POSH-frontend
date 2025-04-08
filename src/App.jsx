import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import TandC from "./pages/TandC";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import Aboutus from "./pages/Aboutus";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import SearchPage from "./pages/SearchPage";
import OrderConfirmation from "./pages/OrderConfirmation";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import WishlistPage from "./pages/WishlistPage";
import OrderDeatils from "./pages/OrderDeatils";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen px-4 md:px-6">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="*" element={<Error />} />

            <Route path={"/signin"} element={<SignIn />} />
            <Route path={"/login"} element={<Login />} />

            <Route path={"/home"} element={<Home />} />
            <Route path={"/"} element={<Home />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path={"/tc"} element={<TandC />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/confirm" element={<OrderConfirmation />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/summary" element={<OrderDeatils />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
