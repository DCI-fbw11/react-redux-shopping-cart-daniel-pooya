import React, { Component } from "react";
import { connect } from "react-redux";
import { checkout } from "../modules/actions";

import ShoppingListItem from "./ShoppingListItem";

class ShoppingList extends Component {
  render() {
    const { items, checkout } = this.props;

    return (
      <div>
        <ul>
          {items.map(item => (
            <ShoppingListItem item={item} key={item.id} />
          ))}
        </ul>
        <p>
          Total: $
          {items.reduce((sum, item) => sum + item.price * item.quantity, 0)}
        </p>
        <div>
          <button onClick={checkout}>Checkout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: Object.values(state.cart)
});

const mapActionsToProps = {
  checkout
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ShoppingList);
