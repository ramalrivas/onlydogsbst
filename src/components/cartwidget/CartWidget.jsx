import React from "react";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {
const {totalProducts} = useCartContext();

  return (
    <div className="cartWidget-widget">
        <i className="bi bi-bag">Carrito</i>
        <span>{totalProducts() || ''}</span>
    </div>
  )
}

export default CartWidget