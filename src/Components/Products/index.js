import React, { Component } from 'react';
import { connect } from "react-redux";

import ProductItem from './ProductItem';
import { ProductListContainer, ProductListItemLi } from './styles';
import { getProducts } from '../../Actions/products';

class Products extends Component {

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return(
      <ProductListContainer>
        { this.props.products.map(product => {
            return <ProductListItemLi key={product.id}><ProductItem product={product} /></ProductListItemLi>
          })
        }
      </ProductListContainer>
    )
  }
} 

function mapStateToProps(state) {
  return {
    products: state.products.products,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => {
      dispatch(getProducts())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)