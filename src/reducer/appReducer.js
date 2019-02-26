import products from "../products.json";

const initState = {
  products,
  cart: {}
};

const appReducer = (state = initState, action) => {
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      products: {
        ...state.products,
        [action.product.updatedProductItem.id]:
          action.product.updatedProductItem
      },
      cart: {
        ...state.cart,
        [action.product.updatedCartItem.id]: action.product.updatedCartItem
      }
    };
  }

  if (action.type === "REMOVE_ONE") {
    if (action.product.removedCartItem.inventory === 0) {
      const tempCart = { ...state.cart };

      delete tempCart[action.product.removedCartItem.id];
      return {
        ...state,
        products: {
          ...state.products,
          [action.product.removedProductItem.id]:
            action.product.removedProductItem
        },

        cart: tempCart
      };
    } else
      return {
        ...state,
        products: {
          ...state.products,
          [action.product.removedProductItem.id]:
            action.product.removedProductItem
        },

        cart: {
          ...state.cart,
          [action.product.removedCartItem.id]: action.product.removedCartItem
        }
      };
  }

  if (action.type === "REMOVE_ALL") {
    const tempCart = { ...state.cart };
    delete tempCart[action.product.removedAllCartItem.id];
    return {
      ...state,
      products: {
        ...state.products,
        [action.product.removedAllProductItem.id]:
          action.product.removedAllProductItem
      },

      cart: tempCart
    };
  }
  if (action.type === "CHECKOUT") {
    return {
      ...state,
      products: { ...state.products },
      cart: {}
    };
  }
  if (action.type === "GET_TOTAL") {
    return { ...state };
  }
  return state;
};

export default appReducer;
