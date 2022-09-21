import React from "react";
import { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  
  console.log('Carrito:', cart);
  const statusCart = (id) => cart.find(product => product.id === id) ? true : false;
  
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  const addProductCart = (product, usserQuantity) => {
    const usserCart = cart.filter(item => item.id !== product.id);
    usserCart.push({ ...product, quantity: usserQuantity});
    setCart(usserCart)
  }
  const cleanCart = () => setCart([]);

  const totalProducts = () =>  cart.reduce((empty, product) => empty + product.quantity, 0);
  
  const totalPrice = () => { return cart.reduce((empty, act) => empty + (act.quantity * act.price), 0); };
  
  
    return (
    <CartContext.Provider value={{
              
              statusCart,
              cleanCart,
              addProductCart,
              removeProduct,
              totalPrice,
              totalProducts,
              cart,
              setCart

           }}> 
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider