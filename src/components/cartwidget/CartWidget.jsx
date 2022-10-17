import React from "react";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {
const {totalProducts} = useCartContext();

  return (
    <div className="cartWidget-widget">
        <i className="bi bi-bag">Items: </i>
        <span className="cartWidget-items">{totalProducts() || ''}</span>
    </div>
  )
}

export default CartWidget