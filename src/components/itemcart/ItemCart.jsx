import React from 'react';
import { useCartContext } from '../../context/CartContext';


const ItemCart = ({product}) => {
  const { removeProduct } = useCartContext();
 
  return (
    <div className='itemCart-container'>
        <p>Producto: {product.name}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio u.: {product.price}</p>
        <p>Subtotal: {product.quantity*product.price}</p>
        <button onClick={()=> removeProduct(product.id)}>Eliminar</button>
    </div>
  )
}

export default ItemCart