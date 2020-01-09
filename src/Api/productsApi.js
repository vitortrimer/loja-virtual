import products from '../backend/products'

class productsApi {
   static getProducts = async () => {
    return products
  };

  static getProduct = async (id) => {
    const product = products.find(f => f.id.toString() === id.toString());
    return product
  };

  static filterProducts = async (filter) => {
    let filtered;
    if(filter === "") {
      filtered = products
    } 
    else {
      filtered = products.filter(f => f.id.toString() === filter || f.title.toLowerCase().includes(filter.toLowerCase()))
    }
    return filtered;
  }

  static getCartItems = async (items) => {
    let cartItems = []
    if(items.length > 0) {
      items.forEach(item => {
        products.forEach(product => {
          if(product.id === item.id) {
            cartItems.push(Object.assign({}, product, { quantity: item.quantity }))
          }
        })
      });
    }
    console.log(cartItems)
    return cartItems
  }
};

export default productsApi;
