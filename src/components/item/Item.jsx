import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";

const Item = ({spec}) => {
  const productCart = useContext(CartContext);
  console.log('Item: ', productCart);
  return (
    <article>
      <Link to={`/detail/${spec.id}`} className="">
        <h3>{spec.name}</h3>
        <p>{spec.img}</p>
        </Link>
    </article>
   
  )
}

export default Item