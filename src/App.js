import React, { Component } from "react";
import "./App.css";
import ProductList from "./component/ProductList";
import ShoppingList from "./component/ShoppingList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Component-container">
          <h3>Product List</h3>
          <ProductList />
          <hr />
          <h3>Shopping List</h3>
          <ShoppingList />
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
