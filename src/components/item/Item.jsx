import { Link } from "react-router-dom"


const Item = ({spec}) => {
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