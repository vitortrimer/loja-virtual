import React, { Component } from 'react';
import { connect } from "react-redux";

import { 
  CartContent, 
  CartTitle, 
  CartTotals,
  EmptyCart
} from './styles';
import CartItem from './CartItem';
import {removeFromCart} from '../../Actions/products'

class Cart extends Component {

  state = {
    cartItems: []
  }

  componentDidMount() {
    this.setState({
      cartItems: JSON.parse(localStorage.getItem("shoppingCartVT"))
    })
  }


  handleQuantity = (type, cartItem) => {
    let cartItems = this.state.cartItems
    const index = cartItems.findIndex(i => i.id.toString() === cartItem.id.toString());
    if(type === "rm" && cartItem.quantity === 1) {
      cartItems.splice(index, 1)
    } else {
      if(type === "rm") {
        cartItems[index].quantity -= 1
      }
      if(type === "add") {
        cartItems[index].quantity += 1
      }
    }
    localStorage.setItem("shoppingCartVT", JSON.stringify(cartItems))
    
    this.setState({
      cartItems
    })
  }


  handleRemoveItem = (cartItem) => {
    let cartItems = this.state.cartItems
    const index = cartItems.findIndex(i => i.id.toString() === cartItem.id.toString());
    cartItems.splice(index, 1)
    this.props.removeFromCart()
    localStorage.setItem("shoppingCartVT", JSON.stringify(cartItems))
    this.setState({
      cartItems
    })
  }

  calculateTotal = () => {
    let total = 0
    if(this.state.cartItems.length > 0) {
      this.state.cartItems.forEach(item => {
        total += (parseFloat(item.price) * parseFloat(item.quantity))
      })
      return total.toFixed(2)
    } else {
      return 0
    }
    
  }

  render() {
    const total = this.calculateTotal()
    return(
      <CartContent>
        
        <CartTitle>
          <span>
            Carrinho de compras
          </span>
        </CartTitle>
        { this.state.cartItems.length === 0 ?
          <EmptyCart>Você ainda não possui itens no carrinho</EmptyCart>
          :
          this.state.cartItems.map(cartItem => {
            return <CartItem 
              key={cartItem.id} 
              cartItem={cartItem}
              handleRemoveItem={this.handleRemoveItem}
              handleQuantity={this.handleQuantity}
            />
          })
        }
        {this.state.cartItems.length > 0 &&
          <CartTotals>
            <span>
              Total: R$ {total}
            </span>
          </CartTotals>
        }
      </CartContent>
    )
  }
} 

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: () => {
      dispatch(removeFromCart())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)