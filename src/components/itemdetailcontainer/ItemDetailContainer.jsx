import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemdetail/ItemDetail"


const products = [
  {
      id: 1,
      name: "Correa",
      price: 500,
      quantity: 5,
      img: "aca va la imagen",
      category: "transport"
  },
  {
      id: 2,
      name: "Bosal",
      price: 600,
      quantity: 5,
      img: "aca va la imagen2",
      category: "transport"
  },
  {
      id: 3,
      name: "Old Prince 15kg",
      price: 7000,
      quantity: 5,
      img: "aca va la imagen3",
      category: "eat"
  },
  {
    id: 4,
    name: "ProPlan 15kg",
    price: 12000,
    quantity: 5,
    img: "aca va la imagen4",
    category: "eat"
}
];

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detailId} = useParams();

    useEffect(() => {
     const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
     });

     getData.then(res => setData(res.find(product => product.id === parseInt(detailId))));
  
    }, [detailId]);

    return (
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer