import React from "react";
import { Link } from "react-router-dom";

export function Product() {
  return (
    <div>
      <h1>Product</h1>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Boost</li>
        <li>Horlicks</li>
      </ul>
      <li>
        <Link to="/">Go to home</Link>
      </li>
    </div>
  );
}
