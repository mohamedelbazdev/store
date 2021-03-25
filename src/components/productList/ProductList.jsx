import React, { Component } from "react";
import Product from "../product/product";

class ProductList extends Component {
  render() {
    return (
      <div style={{ padding: "100px 0" }}>
        <h3>This Is Product List</h3>
        <Product />
      </div>
    );
  }
}

export default ProductList;
