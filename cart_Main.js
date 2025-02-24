import React, { useState } from "react";

const products = [
  { name: "Printed Cotton Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Blue Faux Leather", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Tribal Waterfall Vest", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Braver Bomber Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Olive Drape Vest", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Black Denim Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Army Green Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
];

const ProductTable = () => {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (index) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="container">
      <h2 className="title">Products</h2>
      <div className="button-group">
        <button className="active">Active</button>
        <button className="inactive">Inactive</button>
        <button className="all">All</button>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Product</th>
            <th>Tags</th>
            <th>Var</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Low</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selected.includes(index)}
                  onChange={() => toggleSelect(index)}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.tags.join(", ")}</td>
              <td>{product.var}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.low}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
