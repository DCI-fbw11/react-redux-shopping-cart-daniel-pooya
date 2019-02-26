import React, { Component } from "react";
import { connect } from "react-redux";
//import ProductList from "./component/productList";
//import ShoppingList from "./component/shoppingList";
//import TotalPrice from "./component/totalPrice";
import "./App.css";
import { addProduct, removeOne, removeAll, checkout } from "./modules/actions";

const App = props => {
  const { addProduct, removeOne, removeAll, checkout } = props;
  const products = Object.values(props.products);
  const cart = Object.values(props.cart);

  const productList = products.map(product => {
    return (
      <div key={product.id}>
        <p>
          Title: {product.title} | Price: ${product.price} | Inventory: x
          {product.inventory}
        </p>
        <button
          onClick={() => addProduct(product)}
          name={product.id}
          disabled={product.inventory < 1 ? true : false}
        >
          Add to Cart
        </button>
      </div>
    );
  });

  //console.log("render", this.props.cart);
  const shoppingList = () => {
    console.log(Object.keys(props.cart));
    return cart.map(cart => {
      return (
        <div key={cart.id}>
          <p>
            Title: {cart.title} | Price: ${cart.price} | Inventory: x
            {cart.inventory}
          </p>

          <button onClick={() => removeOne(cart)} name={cart.id}>
            Remove One
          </button>
          <button onClick={() => removeAll(cart)} name={cart.id}>
            Remove All
          </button>
        </div>
      );
    });
  };

  const totalPrice = cart.map(item => item.price * item.inventory);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return (
    <div className="App">
      <div className="Component-container">
        {/* Shopping cart and Product list should go here */}
        <h3>Product List</h3>
        <div className="products">{productList}</div>
        <hr />
        <h3>Shopping List</h3>
        <div className="shoppingBasket">{shoppingList()}</div>
        <hr />
        <p>Total: ${totalPrice.length > 0 ? totalPrice.reduce(reducer) : 0}</p>
        <button onClick={() => checkout()}>Checkout</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { products, cart } = state;
  return {
    products,
    cart
  };
};

const mapDispatchToProps = {
  addProduct,
  removeOne,
  removeAll,
  checkout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
