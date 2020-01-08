import React, { Component } from 'react';

import { ItemContainer, ItemTitle, AvaliableButton, ItemPrice } from './styles';

export default class ProductItem extends Component {

  handleclick = () => {
    console.log("click")
  }
  render() {
    return(
      <ItemContainer onClick={this.handleclick}>
        <img src="/assets/memoriaram.jpg" alt="Alterar alt"/>
        <ItemTitle>
          Memória Corsair Vengeance RGB Pro, 16GB (2x8GB)
        </ItemTitle>
        <ItemPrice>
          R$: 430,32
        </ItemPrice>
        <AvaliableButton>
          Disponível
        </AvaliableButton>
      </ItemContainer>
    )
  }
}
