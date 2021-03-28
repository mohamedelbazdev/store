import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Product from "../product/Product";
import Title from "../title/Title";

class ProductList extends Component {
  render() {
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
