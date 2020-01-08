import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { FaSearch } from 'react-icons/fa';

import {
  HeaderContainer, 
  Logo, SearchBar, 
  SearchBarContainer, 
  CartItems, 
  UserName
} from './styles';

class Header extends Component {
  handleRedirect = () => {
    this.props.history.push('/')
  }

  handleCart = () => {
    this.props.history.push('/cart')
  }

  render() {
    return(
      <HeaderContainer>
        <Logo onClick={this.handleRedirect}>
          reactshop
        </Logo>
        <SearchBarContainer>
        <FaSearch />
        <SearchBar 
          type="text"
          placeholder="Pesquisar..."
        />
        </SearchBarContainer>
        <div>
        <CartItems onClick={this.handleCart}>0</CartItems>
        <UserName >
          Usuário
        </UserName>
        </div>
      </HeaderContainer>
    )
  }
} export default withRouter(Header);