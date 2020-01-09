import React, { Component } from 'react'; 
import { connect } from "react-redux";
import _ from 'lodash';

import { 
  CartItemContainer,
  InfosContainer,
  TitleSpan,
  PriceSpan,
  AddItemButton,
  RemoveItemButton,
  QuantityInput,
  RemoveFromCartButton
} from './styles';
import {getProduct} from '../../Actions/products'

class CartItem extends Component {
  state = {
    cartItem: {
      id: 0,
      quantity: 0
    },
    product: {
      id: 0,
      description: "",
      picturePath: "",
      title: "",
      price: "",
      isAvaliable: false
    },
    gotItem: false
  }

  componentDidMount() {
    this.setState({
      cartItem: this.props.cartItem
    })
    this.props.getProduct(this.props.cartItem.id)
  }

  componentDidUpdate(prevProps) {
    if(!_.isEqual(prevProps.product, this.props.product) && !this.state.gotItem) {
      this.setState({
        product: this.props.product,
        gotItem: true
      })
    }
  }

  handleQuantity = (type) => {
    let cartItem = this.state.cartItem
    let cartItems = JSON.parse(localStorage.getItem("shoppingCartVT"))
      cartItems.forEach((item, index) => {
        if(item.id === cartItems.id) {
          if(type === 'rm') {
            if(cartItems[index].quantity > 0) {
              cartItem.quantity = cartItems[index].quantity -= 1
            }
            else {
              cartItems.splice(index, 1)
            }
          }
          if(type === 'add') {
            cartItem.quantity = cartItems[index].quantity += 1
          }
        }
      })
      this.setState({
        cartItem
      })
  }

  handleChange = event => {
    let cartItem = this.state.cartItem
    cartItem.quantity = event.target.value
    this.setState({
      cartItem
    })
  }

  render() {
    const {product} = this.state
    return(
      <CartItemContainer>
        <img src={product.picturePath} alt={product.title} />
        <InfosContainer>
          <TitleSpan>{product.title}</TitleSpan>
          <PriceSpan>R$: {product.price}</PriceSpan>
          <div>
            <span>Qtd.</span>
            <AddItemButton onClick={() => this.handleQuantity('add')}>+</AddItemButton>
            <QuantityInput type="text" value={this.state.cartItem.quantity} onChange={this.handleChange}/>
            <RemoveItemButton onClick={() => this.handleQuantity('rm')}>-</RemoveItemButton>
          </div>
          <div>
            <RemoveFromCartButton>
              Remover Item
            </RemoveFromCartButton>
          </div>
        </InfosContainer>
      </CartItemContainer>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)