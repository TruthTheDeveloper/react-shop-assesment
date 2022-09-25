import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Layout/Header";
import AllItem from "./container/AllItems";
import ItemDetail from "./container/ItemDetail";
import Cart from "./container/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<AllItem />} />
        <Route path="/id" element={<ItemDetail/>} />
        <Route path="/cart" element={<Cart/>} />
      </Route>
    </Routes>
  );
}

export default App;
