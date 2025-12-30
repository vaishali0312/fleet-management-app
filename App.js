import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

function App() {
  const [counter, setCounter] = useState(0);

  // Large products array
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Keyboard", price: 2000 }
  ];

  /* ---------------- useMemo ----------------
     Total price calculation is expensive.
     It will recompute ONLY when products change.
  */
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  /* ---------------- useCallback ----------------
     Memoized function reference.
     Prevents ProductList re-render due to new function instance.
  */
  const handleProductSelect = useCallback((product) => {
    console.log("Selected Product:", product.name);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Performance Optimization</h2>

      <h3>Total Price: ₹{totalPrice}</h3>

      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </button>
      <p>Counter Value: {counter}</p>

      <ProductList
        products={products}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}

export default App;
