import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "../components/nav/Nav";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Products from "../pages/Products";

export default function Rutes() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
