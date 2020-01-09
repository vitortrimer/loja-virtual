import React, { Component } from 'react';

import { ItemContainer, ItemTitle, AvaliableButton, ItemPrice, NotAvaliableButton } from './styles';
import { withRouter } from "react-router-dom";

class ProductItem extends Component {
  state = {
    product: {
      id: 0,
      description: "",
      picturePath: "",
      title: "",
      price: "",
      isAvaliable: false
    }
  }
  handleclick = () => {
    this.props.history.push(`/show/${this.state.product.id}`)
  }

  componentDidMount() {
    if(this.props.product) {
      this.setState({
        product: this.props.product
      })
    }
  }

  render() {

    const { product } = this.state;

    return(
      <ItemContainer onClick={this.handleclick}>
        <img src={product.picturePath} alt={product.title}/>
        <ItemTitle>
          {product.title}
        </ItemTitle>
        <ItemPrice>
          R$: {product.price}
        </ItemPrice>
        { product.isAvaliable ?
          <AvaliableButton>
            Disponível
          </AvaliableButton>
          :
          <NotAvaliableButton>
            Indisponível
          </NotAvaliableButton>
        }
        
      </ItemContainer>
    )
  }
} export default withRouter(ProductItem);
