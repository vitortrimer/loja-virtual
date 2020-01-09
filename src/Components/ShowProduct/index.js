import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from "react-redux";

import { TiShoppingCart } from 'react-icons/ti';

import {
  ProductContainer, 
  ProductTitle,
  ProductImagePriceContainer, 
  ProductPrice, 
  ActionsContainer, 
  ProductDescription,
  ActionButton,
  DisabledActionButton,
  AddedItem
} from './styles';
import {getProduct, setCartItem} from '../../Actions/products'

class ShowProduct extends Component {

  state = {
    product: {
      id: 0,
      description: "",
      picturePath: "",
      title: "",
      price: "",
      isAvaliable: false
    },
    addedToCart: false
  }

  componentDidMount() {
    this.props.getProduct(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    if(!_.isEqual(prevProps.product, this.props.product)) {
      this.setState({
        product: this.props.product
      })
    }
  }

  handleAddCartItem = () => {
    let currentCart = JSON.parse(localStorage.getItem('shoppingCartVT'))
    let alreadyInCart = false;
    currentCart.forEach((ci, index) => {
      if(ci.id === this.state.product.id) {
        currentCart[index].quantity += 1
        alreadyInCart = true
      }
    })
    
    if(!alreadyInCart) {
      this.props.setCartItem()
      currentCart.push({id: this.state.product.id, quantity: 1})
    } 

    localStorage.setItem('shoppingCartVT', JSON.stringify(currentCart))
    this.setState({
      addedToCart: true
    })
  }

  render() {

    const { product } = this.state;

    return(
      <ProductContainer>
        <ProductTitle>
          <span>{product.title}</span>
        </ProductTitle>
        <ProductImagePriceContainer>
          <img src={product.picturePath} alt={product.title} />
          <ActionsContainer>
            <ProductPrice>R$ {product.price}</ProductPrice>
            <ProductDescription>
              {product.description}
            </ProductDescription>
            { product.isAvaliable ? 
              <ActionButton onClick={this.handleAddCartItem} >
                <TiShoppingCart /> Adicionar ao Carrinho 
              </ActionButton>
            :
              <DisabledActionButton>
                Indisponível no momento
              </DisabledActionButton>
            }
            {this.state.addedToCart && <AddedItem>Item adicionado ao carrinho</AddedItem>}
          </ActionsContainer>
        </ProductImagePriceContainer>
      </ProductContainer>
    )
  }
} 

function mapStateToProps(state) {
  return {
    product: state.products.selectedProduct,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProduct: (id) => {
      dispatch(getProduct(id))
    },
    setCartItem: () => {
      dispatch(setCartItem())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct)