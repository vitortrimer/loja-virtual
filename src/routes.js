import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Products from './Components/Products';
import ShowProduct from './Components/ShowProduct';

export default function Routes() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/show" component={ShowProduct} />
      </Switch>
    </BrowserRouter>
  );
}
