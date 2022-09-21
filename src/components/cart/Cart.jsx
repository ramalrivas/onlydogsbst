import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../itemcart/ItemCart";


const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>Su carrito esta vacio.</p>
        <Link to='/'> Continuar Comprando</Link>
      </>
    )
  } 
  
  return (
 <>
 {
  cart.map(product => <ItemCart key={product.id} product={product} />)
}
  <p>Total: $ { totalPrice() }</p>
  </>
    
  )
}

export default Cart