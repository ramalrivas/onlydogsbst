import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../itemcart/ItemCart";


const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name:'Roberto',
      email:'roberto@gmail.com',
      adress:'Evergreen 1234'
    },
    products: cart.map(product => ({name: product.name, quantity: product.quantity, price: product.price})),
    total: totalPrice(),
  }
  
  const handleClick = () => {
    const fireDb = getFirestore();
    const buyOrders = collection(fireDb, 'orders');
    addDoc(buyOrders, order)
    .then(({id}) => console.log(id))
  }
  
  if (cart.length === 0) {
    return (
      <>
        <p>Su carrito esta vacio.</p>
        <Link to='/'> Continuar Comprando</Link>
      </>
    )
  } 
  
  return (
 <div className="cartOrder-container">
  <div className="cartOrder-order">
 {
  cart.map(product => <ItemCart key={product.id} product={product} />)
}
  <p>Total: $ { totalPrice() }</p>
  <button onClick={handleClick}>Generar Pedido</button>
  <p>Ver el pedido x Consola y se guarda en Firebase!</p>
  </div>
  </div>
    
  )
}

export default Cart