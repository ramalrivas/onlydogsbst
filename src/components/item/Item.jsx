import React from "react";
import { Link } from "react-router-dom";


const Item = ({spec}) => {
  

  return (
    <article>
      <Link to={`/detail/${spec.id}`} className="">
        <img src={spec.img} alt="" />
        <h3>{spec.name}</h3>
        <p>{spec.price}</p>
        <p>{spec.quantity}</p>
        </Link>
    </article>
   
  )
}

export default Item