export function addProduct(product) {
  return {
    type: "ADD_PRODUCT",
    product
  };
}

export function checkout() {
  return {
    type: "CHECKOUT"
  };
}

export function removeOne(product) {
  return {
    type: "REMOVE_ONE",
    product
  };
}

export function removeAll(product) {
  return {
    type: "REMOVE_ALL",
    product
  };
}

export function getTotal(product) {
  return {
    type: "GET_TOTAL",
    product
  };
}
