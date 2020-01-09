import productsApi from "../Api/productsApi";

export function getProducts() {
  return function(dispatch) {
    return productsApi.getProducts().then(response => {
      dispatch(getProductsSuccess(response))
    }).catch(error => {
      console.log(error)
    })
  }
};

export function getProduct(id) {
  return function(dispatch) {
    return productsApi.getProduct(id).then(response => {
      dispatch(getProductSuccess(response))
    }).catch(error => {
      console.log(error)
    })
  }
};

export function filterProducts(filter) {
  return function(dispatch) {
    return productsApi.filterProducts(filter).then(response => {
      dispatch(filterProductResponse(response))
    }).catch(error => {
      console.log(error)
    })
  }
}

export function getCartItems(items) {
  return function(dispatch) {
    return productsApi.getCartItems(items).then(response => {
      dispatch(getCartItemsSuccess(response))
    }).catch(error => {
      console.log(error)
    })
  }
}

function getProductsSuccess(response) {
  return { type: "GET_PRODUCTS_SUCCESS", response }
};

function getProductSuccess(response) {
  return { type: "GET_PRODUCT_SUCCESS", response }
}

function filterProductResponse(response) {
  return { type: "FILTER_PRODUCT_RESPONSE", response }
}

function getCartItemsSuccess(response) {
  return { type: "GET_CART_ITEMS_SUCCESS", response}
}

export function setCartItem() {
  return { type: "SET_CART_ITEM" }
}

export function removeFromCart() {
  return { type: "REMOVE_CART_ITEM" }
}

export function getCartLength() {
  return { type: "GET_CART_LENGTH" }
}
