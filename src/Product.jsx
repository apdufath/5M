
import React from 'react';

function Product(props) {
  return (
    <div className="product-card">
      <p>{props.name}</p>
      <h2>{props.product}</h2>
      <h3>{props.value}</h3>

      <button>View Product</button>
    </div>
  );
}

export default Product;
