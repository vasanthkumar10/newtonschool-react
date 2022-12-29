import "./App.css";
import React, { useState } from "react";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/home">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
