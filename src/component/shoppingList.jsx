import React from "react";

const ShoppingList = ({ products, cart, handleRemoveOne, handleRemoveAll }) => {
  cart = Object.values(this.props.cart);
  //console.log("render", this.props.cart);

  const shoppingList = cart.map(cart => {
    return (
      <div key={cart.id}>
        <p>
          Title: {cart.title} | Price: ${cart.price} | Inventory: x
          {cart.inventory}
        </p>

        <button onClick={this.handleRemoveOne} name={cart.id}>
          Remove One
        </button>
        <button onClick={this.handleRemoveAll} name={cart.id}>
          Remove All
        </button>
      </div>
    );
  });
};

export default ShoppingList;
