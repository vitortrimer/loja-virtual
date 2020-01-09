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
import {getProduct, removeFromCart} from '../../Actions/products'

class CartItem extends Component {
  state = {
    cartItem: {
      id: 0,
      quantity: 0,
      price: 0,
    },
    product: {
      id: null,
      description: "",
      picturePath: "",
      title: "",
      price: "",
      isAvaliable: false
    },
  }

  componentDidMount() {
    this.setState({
      cartItem: this.props.cartItem
    })

    if(!_.isEmpty(this.props.product) && (this.props.product.id.toString() === this.props.cartItem.id.toString())) {
      this.setState({
        product: this.props.product,
      })
    } else {
      this.props.getProduct(this.props.cartItem.id)
    }
  }

  componentDidUpdate(prevProps) {
    if(this.state.product.id === null && (this.props.product.id === this.props.cartItem.id)) {
      this.setState({
        product: this.props.product,
      })
    }
    if(!_.isEqual(this.props.cartItem, prevProps.cartItem)) {
      this.setState({
        cartItem: this.props.cartItem
      })
    }
  }

  handleChange = event => {
    let cartItems = JSON.parse(localStorage.getItem("shoppingCartVT"))
    let cartItem = this.state.cartItem
    const index = cartItems.findIndex(i => i.id.toString() === cartItem.id.toString());
    if(event.target.value === "0") { 
      cartItems.splice(index, 1)
    } else {
      cartItems[index].quantity = parseInt(event.target.value)
    }
    cartItem.quantity = event.target.value
    localStorage.setItem("shoppingCartVT", JSON.stringify(cartItems))
    this.setState({
      cartItem
    })
    
  }

  handleQuantity = (type) => {
    let cartItem = this.state.cartItem
    this.props.handleQuantity(type, this.state.cartItem)
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
            <RemoveFromCartButton onClick={() => this.props.handleRemoveItem(this.state.cartItem)}>
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
    removeFromCart: () => {
      dispatch(removeFromCart())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)