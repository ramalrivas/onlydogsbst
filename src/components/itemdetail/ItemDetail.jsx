import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCounter from '../itemcounter/ItemCounter';


export const ItemDetail = ({data}) => {
    const [addToCart, setaddToCart] = useState(false);

    const onAdd = () => { 
        setaddToCart(true);
           }

  return (
    <div className="itemdetail-container">
        <h3>{data.name}</h3>
        <p>{data.detail}</p>
        {
           addToCart ? <Link to='/cart'>Finalizar Compra</Link> : <ItemCounter initial={1} stock={5} onAdd={onAdd} />
    }
    </div>
  )
}
