import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  handleAdd = e => {
    const getProductId = e.target.name;
    const itemFromProducts = this.props.products[getProductId];

    const updatedProductItem = {
      id: itemFromProducts.id,
      title: itemFromProducts.title,
      price: itemFromProducts.price,
      inventory: itemFromProducts.inventory - 1
    };

    // this part is for the updated cart
    let updatedCartItem = {};
    if (this.props.cart[itemFromProducts.id]) {
      updatedCartItem = {
        id: itemFromProducts.id,
        title: itemFromProducts.title,
        price: itemFromProducts.price,
        inventory: this.props.cart[itemFromProducts.id].inventory + 1
      };
    } else {
      updatedCartItem = {
        id: itemFromProducts.id,
        title: itemFromProducts.title,
        price: itemFromProducts.price,
        inventory: 1
      };
    }

    // your payload is going to look like
    // this.props.add({updatedProductItem,updatedCartItem});
    // you can get these values in your reducer as
    // action.product.updatedProductItem AND action.product.updatedCartItem

    this.props.add({ updatedProductItem, updatedCartItem });
  };

  handleRemoveOne = e => {
    const getCartId = e.target.name;
    const itemFromCart = this.props.cart[getCartId];
    console.log("handleRemoveOne", itemFromCart);

    const removedCartItem = {
      id: itemFromCart.id,
      title: itemFromCart.title,
      price: itemFromCart.price,
      inventory: itemFromCart.inventory - 1
    };

    let removedProductItem = {};
    if (this.props.products[itemFromCart.id]) {
      removedProductItem = {
        id: itemFromCart.id,
        title: itemFromCart.title,
        price: itemFromCart.price,
        inventory: this.props.products[itemFromCart.id].inventory + 1
      };
    }

    this.props.removeOne({ removedCartItem, removedProductItem });
  };

  handleRemoveAll = e => {
    const getCartId = e.target.name;
    const itemFromCart = this.props.cart[getCartId];
    //console.log(itemFromCart);
    const removedAllCartItem = {
      id: itemFromCart.id,
      title: itemFromCart.title,
      price: itemFromCart.price,
      inventory: itemFromCart.inventory
    };

    let removedAllProductItem = {
      id: itemFromCart.id,
      title: itemFromCart.title,
      price: itemFromCart.price,
      inventory:
        this.props.products[itemFromCart.id].inventory +
        removedAllCartItem.inventory
    };

    this.props.removeAll({
      removedAllCartItem,

      removedAllProductItem
    });
  };

  handleCheckout = e => {
    this.props.checkout();
  };

  render() {
    const products = Object.values(this.props.products);
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

    const cart = Object.values(this.props.cart);
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

    const buyProducts = products.map(product => {
      return (
        <button onClick={this.handleCheckout} name={product.id}>
          Checkout
        </button>
      );
    });

    const totalPrice = cart.map(item => item.price * item.inventory);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // totalPrice.reduce((acc, cur) => acc + cur.Value,[]);
    console.log(totalPrice);
    //console.log("return render", cart);
    return (
      <div className="App">
        <div className="Component-container">
          {/* Shopping cart and Product list should go here */}

          <h3>Product List</h3>
          <div className="products">{productList}</div>
          <hr />
          <h3>Shopping List</h3>
          <div className="shoppingBasket">{shoppingList}</div>
          <hr />
          <p>
            Total: ${totalPrice.length > 0 ? totalPrice.reduce(reducer) : 0}
          </p>
          <button onClick={this.handleCheckout}>Checkout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: x => {
      dispatch({ type: "ADD_PRODUCT", product: x });
    },
    removeOne: x => {
      dispatch({ type: "REMOVE_ONE", product: x });
    },
    removeAll: x => {
      dispatch({ type: "REMOVE_ALL", product: x });
    },
    checkout: x => {
      dispatch({ type: "CHECKOUT" });
    },
    getTotal: x => {
      dispatch({ type: "GET_TOTAL", product: x });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
