import React from 'react';

import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

import RootReducer from './Reducers/root';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./routes";
import Header from './Common/Header';
import Footer from './Common/Footer';

function App() {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    RootReducer, composeEnhancers(applyMiddleware(thunk))
  )

  return (
    <React.Fragment>
      <Header />
      <Provider store={ store }>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
      <Footer />
    </React.Fragment>
  );
}

export default App;
