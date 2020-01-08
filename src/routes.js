import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './Common/Header';
import Footer from './Common/Footer';
import Products from './Components/Products';
import ShowProduct from './Components/ShowProduct';
import Cart from './Components/Cart'

export default function Routes() {
  
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/show" component={ShowProduct} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
