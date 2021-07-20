import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <section>
      <h1>The Products Page.</h1>
      <ul>
        <li>
          <Link to="/products/p1">House</Link>
        </li>
        <li>
          <Link to="/products/p2">Book</Link>
        </li>
        <li>
          <Link to="/products/p3">TV</Link>
        </li>
        <li>
          <Link to="/products/p4">Sofa</Link>
        </li>
        <li>
          <Link to="/products/p5">Swimming pool</Link>
        </li>
      </ul>
    </section>
  );
}

export default Products;
