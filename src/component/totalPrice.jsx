import React from "react";

const TotalPrice = ({ cart }) => {
  const totalPrice = cart.map(item => item.price * item.inventory);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return (
    <p>Total: ${totalPrice.length > 0 ? totalPrice.reduce(reducer) : 0}</p>
  );
};

export default TotalPrice;
