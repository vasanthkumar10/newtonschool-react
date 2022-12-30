import "./App.css";
import React, { useState } from "react";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import { Ball } from "./components/Ball";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { Computers } from "./components/Computers";
import { Computer } from "./components/Computer";
import { Dell } from "./components/Dell";
import { PageNotFound } from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Product />} /> */}
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/ball" element={<Ball />} />

        <Route path="/electronic">
          <Route index element={<Computers />} />
          {/* dynamic routes -> :name */}
          <Route path=":id" element={<Computer />} />
          <Route path="dell" element={<Dell />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
