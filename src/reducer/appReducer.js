/* const appReducer = (state = {}, action) => {
  const { cart, products } = state;
  const { product } = action;
  const { id, title, price } = product || {};
  let quantity, inventory, newCart;

  switch (action.type) {
    case "ADD_PRODUCT": {
      quantity = cart[id] ? cart[id].quantity : 0;
      inventory =
        product.inventory > 0 ? product.inventory - 1 : product.inventory;

      const nextState = Object.assign({}, state, {
        products: {
         ...products[id], inventory-- }
        ,
        cart: {product}
      });
      return nextState;
    }

    case "CHECKOUT":
      return {
        ...state,
        cart: {}
      };

    case "REMOVE_ONE": {
      inventory = product[id].inventory;
      quantity = product.quantity;
      newCart = { ...cart };

      if (cart[id].quantity > 1) {
        return newCart[id].quantity - 1;
      } else {
        delete newCart[id];
      }

      const nextState = Object.assign({}, state, {
        cart: newCart,
        products: {
          [id]: {
            ...products[id],
            inventory: products[id].inventory + 1
          }
        }
      });

      return nextState;
    }

    case "REMOVE_ALL": {
      inventory = product[id].inventory;
      quantity = product.quantity;
      newCart = { ...cart };

      delete newCart[id];

      const nextState = Object.assign({}, state, {
        cart: newCart,
        products: {
          [id]: {
            ...products[id],
            inventory: products[id].inventory + quantity
          }
        }
      });

      return nextState;
    }

    default:
      return state;
  }
};

export default appReducer;
 */

const appReducer = (state = {}, action) => {
  const { cart, products } = state;
  const { product } = action;
  const { id, title, price } = product || {};
  let quantity, inventory, newCart;

  switch (action.type) {
    case "ADD_PRODUCT":
      quantity = cart[id] ? cart[id].quantity : 0;
      inventory =
        product.inventory > 0 ? product.inventory - 1 : product.inventory;

      return {
        ...state,
        products: {
          ...products,
          [id]: {
            ...product,
            inventory
          }
        },
        cart: {
          ...cart,
          [id]: {
            id,
            title,
            price,
            quantity: quantity + 1
          }
        }
      };

    case "CHECKOUT":
      return {
        ...state,
        cart: {}
      };

    case "REMOVE_ONE":
      inventory = products[id].inventory;
      quantity = product.quantity;

      newCart = { ...cart };
      delete newCart[id];

      return {
        ...state,
        cart:
          quantity > 1
            ? {
                ...cart,
                [id]: {
                  ...product,
                  quantity: quantity - 1
                }
              }
            : newCart,
        products: {
          ...products,
          [id]: {
            ...products[id],
            inventory: inventory + 1
          }
        }
      };

    case "REMOVE_ALL":
      inventory = products[id].inventory;
      quantity = product.quantity;

      newCart = { ...cart };
      delete newCart[id];

      return {
        ...state,
        products: {
          ...products,
          [id]: {
            ...products[id],
            inventory: inventory + quantity
          }
        },
        cart: newCart
      };

    default:
      return state;
  }
};

export default appReducer;
