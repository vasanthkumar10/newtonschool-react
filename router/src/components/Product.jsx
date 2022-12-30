import React from "react";
import { NavLink, Link, useParams } from "react-router-dom";

export function Product() {
  const { id } = useParams();
  return (
    <div>
      <h1>Product - {id}</h1>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Boost</li>
        <li>Horlicks</li>
      </ul>
      <li>
        <Link to="/">Go to home</Link>
      </li>
      <NavLink to="/products/1" reloadDocument>
        Go to Product
      </NavLink>
    </div>
  );
}
