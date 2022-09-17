import React from "react";
import { useState, useContext } from "react";
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
  const [emptyCart, setemptyCart] = useState([]);
  
  const statusCart = (id) => emptyCart.find(product => product.id === id) ? true : false;
  
  const removeProductCart = (id) => emptyCart.filter(product => product.id !== id);

  const addProductCart = (product, units) => {
    const usserCart = emptyCart.filter(item => item.id !== product.id);
    usserCart.push({ ...product, units: units});
    setemptyCart(usserCart)
  }
  const cleanCart = () => setemptyCart([]);

  console.log('carrito: ', emptyCart);
  
    return (
    <CartContext.Provider value={{statusCart, cleanCart, addProductCart, removeProductCart}}> 
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider