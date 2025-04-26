import React, { useState } from "react";
import SubNavbar from "../components/SubNavbar";
import Product1 from "./products/Product1"
import Product2 from "./products/Product2"

const Products = () => {
  const [current, setCurrent] = useState(
    window.location.hash.replace("#", "") || ""
  );
  const products = [
    { name: "Product 1", id: "product1", element: <Product1 /> },
    { name: "Product 2", id: "product2", element: <Product2 /> },
    { name: "Product 3", id: "product3" },
  ];

  return (
    <div
      style={{
        marginTop: "4rem",
      }}
    >
      <SubNavbar items={products} current={current} setCurrent={setCurrent} />
      {products.map((product) => (
        <div
          key={product.id}
          id={product.id}
          style={{scrollMarginTop: "6.8rem"}}
        >
          {product.element}
        </div>
      ))}
    </div>
  );
};

export default Products;
