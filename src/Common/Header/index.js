import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { FaSearch } from 'react-icons/fa';

import {
  HeaderContainer, 
  Logo, SearchBar, 
  SearchBarContainer, 
  CartItems, 
  UserName
} from './styles';
import {filterProducts, getCartLength} from '../../Actions/products'

class Header extends Component {
  state = {
    search: ""
  }

  handleRedirect = () => {
    this.props.history.push('/')
  }

  handleCart = () => {
    this.props.history.push('/cart')
  }

  handleSearch = event => {
    const search = event.target.value
    this.props.filterProducts(search);
    this.setState({
      search
    })
  }

  componentDidMount() {
    this.props.getCartLength()
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
          onChange={this.handleSearch}
          value={this.state.search}
        />
        </SearchBarContainer>
        <div>
        <CartItems onClick={this.handleCart}>{this.props.cartLength}</CartItems>
        <UserName >
          Usuário
        </UserName>
        </div>
      </HeaderContainer>
    )
  }
} 
function mapStateToProps(state) {
  return {
    cartLength: state.products.cartLength
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterProducts: (filter) => {
      dispatch(filterProducts(filter))
    },
    getCartLength: () => {
      dispatch(getCartLength())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))