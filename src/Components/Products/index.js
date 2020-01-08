import React, { Component } from 'react';

import ProductItem from './ProductItem';
import { ProductListContainer, ProductListItemLi } from './styles';

class Products extends Component {

  render() {
    return(
      <ProductListContainer>
        <ProductListItemLi><ProductItem/></ProductListItemLi>
        <ProductListItemLi><ProductItem /></ProductListItemLi>
        <ProductListItemLi><ProductItem /></ProductListItemLi>
        <ProductListItemLi><ProductItem /></ProductListItemLi>
      </ProductListContainer>
    )
  }
} export default Products;