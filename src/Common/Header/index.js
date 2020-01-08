import React, { Component } from 'react';

import { FaSearch } from 'react-icons/fa';

import {HeaderContainer, Logo, SearchBar, SearchBarContainer, CartItems, UserName} from './styles';

class Header extends Component {
  render() {
    return(
      <HeaderContainer>
        <Logo>
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
        <CartItems>0</CartItems>
        <UserName>
          Usuário
        </UserName>
        </div>
      </HeaderContainer>
    )
  }
} export default Header;