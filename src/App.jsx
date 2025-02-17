import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <BrowserRouter>
      <div className="px-4 md:px-6">
        <Navbar />

        <Routes>
          <Route path={"/signin"} element={<SignIn />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/"} element={<Home />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/tc"} element={<TandC />} />
          <Route path="*" element={<Error />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
