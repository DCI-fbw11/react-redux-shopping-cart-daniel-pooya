import React, { Component } from "react";
import { connect } from "react-redux";

import ProductListItem from "./ProductListItem";

class ProductList extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(item => (
          <ProductListItem item={item} key={item.id} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  items: Object.values(state.products)
});

export default connect(mapStateToProps)(ProductList);
