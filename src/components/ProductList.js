import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;