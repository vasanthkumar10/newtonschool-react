import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        nulla!
      </p>
      <li>
        <Link to="/products">Go to Product</Link>
      </li>
    </div>
  );
}
