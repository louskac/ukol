import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-52 shadow-lg rounded-lg text-left p-2">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-auto block rounded-t-lg mb-2" 
      />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-4">{product.subtitle}</p>
      <div className="flex justify-left items-center mb-2">
        <div className="flex text-green-500">
          {[...Array(5)].map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>
        <span className="ml-2 text-gray-800 text-sm font-semibold">{product.rating}</span>
      </div>
      <p className="text-green-500 text-xs underline mb-2">{product.reviews} reviews</p>

      <p className="text-lg font-bold text-gray-800 mb-3">${product.price.toFixed(2)}</p>
      <button className="btn-gradient w-[95%]">Add to Cart</button>
    </div>
  );
};

export default ProductCard;