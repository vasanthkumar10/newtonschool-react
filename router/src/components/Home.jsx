import React from "react";
import { NavLink, Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        nulla!
      </p>
      <li>
        <NavLink to="/products/1" reloadDocument>
          Go to Product
        </NavLink>
        <br />
        <NavLink to="/">Home</NavLink>
      </li>
    </div>
  );
}
