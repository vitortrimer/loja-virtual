import React, { Component } from 'react';

import ProductItem from './ProductItem';
import { ProductListContainer } from './styles';

class Products extends Component {
  handleClick = () => {
    console.log("clicking")
  }

  render() {
    return(
      <ProductListContainer>
        <ProductItem/>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ProductListContainer>
    )
  }
} export default Products;