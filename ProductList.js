import React from "react";

function ProductList({ products, onProductSelect }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Product List</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
            <button onClick={() => onProductSelect(product)}>
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
