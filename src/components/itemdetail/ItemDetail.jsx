import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCounter from '../itemcounter/ItemCounter';
import  { useCartContext } from '../../context/CartContext';


export const ItemDetail = ({data}) => {
    const [addToCart, setaddToCart] = useState(false);
    const {addProductCart} = useCartContext();

    const onAdd = (quantity) => { 
        setaddToCart(true);
        addProductCart(data, quantity);
           }
 return (
    <div className="itemDetail-container">
        <img src={data.img} alt="" />
        <h3>{data.name}</h3>
                
        {
           addToCart ? <Link to='/cart'>Finalizar Compra</Link> : <ItemCounter initial={1} stock={5} onAdd={onAdd} />
    }
    <p>{data.description}</p>
    </div>
  )
}
