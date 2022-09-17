import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCounter from '../itemcounter/ItemCounter';
import  { useCartContext }  from '../../context/CartContext';


export const ItemDetail = ({data}) => {
    const [addToCart, setaddToCart] = useState(false);
    const {addProductCart} = useCartContext();

    const onAdd = (units) => { 
        setaddToCart(true);
        addProductCart(data, units);
           }
 return (
    <div className="itemDetail-container">
        <h3>{data.name}</h3>
        <p>{data.detail}</p>
        {
           addToCart ? <Link to='/cart'>Finalizar Compra</Link> : <ItemCounter initial={1} stock={5} onAdd={onAdd} />
    }
    </div>
  )
}
