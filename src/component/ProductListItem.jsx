import React, { Component } from "react";
import { connect } from "react-redux";

import { addProduct } from "../modules/actions";

class ProductListItem extends Component {
  render() {
    const { item, addProduct } = this.props;
    return (
      <li>
        <p>
          {item.title} | ${item.price}{" "}
          {item.inventory > 0 ? `| x${item.inventory}` : ""}
        </p>
        <div>
          <button
            onClick={() => addProduct(item)}
            disabled={item.inventory === 0}
          >
            {item.inventory > 0 ? "Add to cart" : "Sold out"}
          </button>
        </div>
      </li>
    );
  }
}
const mapDispatchToProps = {
  addProduct
};

export default connect(
  null,
  mapDispatchToProps
)(ProductListItem);
