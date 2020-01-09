import React, { Component } from 'react';

import { 
  CartContent, 
  CartTitle, 
} from './styles';
import CartItem from './CartItem';

class Cart extends Component {

  state = {
    cartItems: []
  }

  componentDidMount() {
    this.setState({
      cartItems: JSON.parse(localStorage.getItem("shoppingCartVT"))
    })
  }

  render() {
    return(
      <CartContent>
        
        <CartTitle>
          <span>
            Carrinho de compras
          </span>
        </CartTitle>
        { this.state.cartItems.map(cartItem => {
            return <CartItem key={cartItem.id} cartItem={cartItem}/>
          })
        }
      </CartContent>
    )
  }
} export default Cart