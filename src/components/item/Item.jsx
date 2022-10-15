import React from "react";
import { Link } from "react-router-dom";


const Item = ({spec}) => {
  

  return (
  
    <div className="item-container">
      <Link to={`/detail/${spec.id}`}>
        <div className="img-container">
        <img src={spec.img} alt={spec.description} />
        </div>
        <h3>{spec.name}</h3>
        <p>$ {spec.price}</p>
      </Link>
    </div>
   
  )
}

export default Item