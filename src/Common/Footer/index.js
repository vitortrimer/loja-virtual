import React, { Component } from 'react';

import {StoreFooter} from './styles';

export default class Footer extends Component {
  render() {
    return(
      <StoreFooter>
        <p>Feito por Vitor Trimer</p>
        <p>React, Redux, Styled Components</p>
        <p>2020</p>
      </StoreFooter>
    )
  }
}