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
    <div className="itemDetailCard-container">
      <div className='itemDetail-img'>
        <img src={data.img} alt="" />
        </div>
        <div className='itemDetail-name'>
        <h2>{data.name}</h2>
        </div>
        <div className='itemDetail-counter'>
        {
           addToCart ? <Link to='/cart'>Finalizar Compra</Link> : <ItemCounter initial={1} stock={5} onAdd={onAdd} />
    }
    </div>
    <div className='itemDetail-detail'>
    <p>{data.description}</p>
    </div>
    </div>
  )
}
