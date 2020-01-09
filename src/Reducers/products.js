const initialState = {
  products: [],
  selectedProduct: {},
  cartItems: [],
  cartLength: 0
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "GET_PRODUCTS_SUCCESS":
      return Object.assign({}, state, { products: action.response });
    case "GET_PRODUCT_SUCCESS":
      return Object.assign({}, state, { selectedProduct: action.response });
    case "FILTER_PRODUCT_RESPONSE":
      return Object.assign({}, state, { products: action.response });
    case "GET_CART_ITEMS_SUCCESS": 
      return Object.assign({}, state, { cartItems: action.response });
    case "GET_CART_LENGTH":
      let cart = JSON.parse(localStorage.getItem('shoppingCartVT'));
      if(cart === null) {
        localStorage.setItem('shoppingCartVT', JSON.stringify([]))
        cart = []
      } 
      return Object.assign({}, state, { cartItems: cart, cartLength: cart.length });
    case "SET_CART_ITEM":
      return Object.assign({}, state, { cartLength: state.cartLength + 1 });
    default:
      return state
  }
}