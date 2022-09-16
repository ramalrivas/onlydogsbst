
import { useState, useEffect } from "react";
import Greetings from "../greeting/Greetings"
import ItemCounter from "../itemcounter/ItemCounter"
import ItemList from "../itemlist/ItemList";

const products = [
    {
        id: 1,
        name: "Pepino",
        img: "aca va la imagen"
    },
    {
        id: 2,
        name: "Pera",
        img: "aca va la imagen2"
    },
    {
        id: 3,
        name: "Palta",
        img: "aca va la imagen3"
    }
];


const ItemListContainer = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
   const getData = new Promise(resolve => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
   });
   getData.then(res => setData(res));

  }, []);

  const onAdd = (quantity) => { 
    console.log(`Compraste ${quantity} unidades`);

   }
    return (
    <>
    <Greetings saludo='Bienvenido!'/>
    <ItemCounter initial={1} stock={5} onAdd={onAdd} />
    <ItemList data={data} />
    </>
  )
}

export default ItemListContainer