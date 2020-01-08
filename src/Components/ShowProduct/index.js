import React, { Component } from 'react';

import { TiShoppingCart } from 'react-icons/ti';

import {
  ProductContainer, 
  ProductTitle,
  ProductImagePriceContainer, 
  ProductPrice, 
  ActionsContainer, 
  ProductDescription,
  ActionButton
} from './styles';

class ShowProduct extends Component {
  render() {
    return(
      <ProductContainer>
        <ProductTitle>
          <span>Memória Corsair Vengeance RGB Pro, 16GB (2x8GB)</span>
        </ProductTitle>
        <ProductImagePriceContainer>
          <img src="/assets/memoriaram.jpg" alt="alterar depois" />
          <ActionsContainer>
            <ProductPrice>R$ 354,64</ProductPrice>
            <ProductDescription>
            A Memória RAM HyperX FURY DDR4 apresenta um visual incrível com um dissipador de calor atualizado. 
            </ProductDescription>
            <ActionButton>
              <TiShoppingCart /> Adicionar ao Carrinho
            </ActionButton>
          </ActionsContainer>
        </ProductImagePriceContainer>
      </ProductContainer>
    )
  }
} export default ShowProduct;