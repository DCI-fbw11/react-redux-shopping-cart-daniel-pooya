import React from "react";

const ProductList = ({ products, cart, handleAdd }) => {
  products = Object.values(this.props.products);
  const productList = products.map(product => {
    return (
      <div key={product.id}>
        <p>
          Title: {product.title} | Price: ${product.price} | Inventory: x
          {product.inventory}
        </p>
        <button
          onClick={this.handleAdd}
          name={product.id}
          disabled={product.inventory < 1 ? true : false}
        >
          Add to Cart
        </button>
      </div>
    );
  });
};

export default ProductList;
