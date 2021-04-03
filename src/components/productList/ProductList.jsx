import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Product from "../product/Product";
import Title from "../title/Title";
import { storeProducts } from "../data/data.js";

class ProductList extends Component {
  state = {
    products: storeProducts,
  };

  render() {
    console.log(this.state.products);
    return (
      <>
        <Title title="Our Product" />
        <Container>
          <Product />
        </Container>
      </>
    );
  }
}

export default ProductList;
