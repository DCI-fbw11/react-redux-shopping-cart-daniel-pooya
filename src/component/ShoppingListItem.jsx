import React, { Component } from "react";
import { connect } from "react-redux";
import { removeOne, removeAll } from "../modules/actions";

class ShoppingListItem extends Component {
  render() {
    const { item, removeOne, removeAll } = this.props;
    return (
      <li key={item.id}>
        <p>
          Title: {item.title} | Price: ${item.price} | Inventory: x
          {item.inventory}
        </p>
        <div>
          <button onClick={() => removeOne(item)}>Remove One</button>
          <button onClick={() => removeAll(item)}>Remove All</button>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = {
  removeOne,
  removeAll
};

export default connect(
  null,
  mapDispatchToProps
)(ShoppingListItem);
