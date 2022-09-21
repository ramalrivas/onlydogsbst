import React from "react";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {
const {totalProducts} = useCartContext();

  return (
    <div className="cartwidget-container">
        <i className="bi bi-bag"></i>
        <span>{totalProducts() || ''}</span>
    </div>
  )
}

export default CartWidget