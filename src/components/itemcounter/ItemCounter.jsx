import { useState, useEffect } from "react";


const ItemCounter = ({initial, stock, onAdd}) => {
const [count, setCount] = useState(parseInt(initial));
const increase = () => { 
        setCount(count +1);
 };
 const decrease = () => { 
    setCount(count -1);
};

useEffect(() => {
    setCount(parseInt(initial));
}, [initial])
  return (
    <div className="counter-container">
       <div className="counter-counter">
        <button disabled={count <=1} onClick={decrease} className="counter-btn">-</button>
        <span className="counter-display">{count}</span>
        <button disabled={count >= stock} onClick={increase} className="counter-btn">+</button>
        </div>
        <div className="counter-addCart">
            <button disabled={stock <= 0} onClick={()=> onAdd(count)}>Agregar al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCounter