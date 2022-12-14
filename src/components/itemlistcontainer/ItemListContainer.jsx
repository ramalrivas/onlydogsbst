import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Greetings from "../greeting/Greetings";
import ItemList from "../itemlist/ItemList";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";




export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const {categoryId} = useParams();

  useEffect(() => {
    const dataBase = getFirestore();
    const dataCollection = collection(dataBase, 'products');
    
   if (categoryId) {
    const dataCategory = query(dataCollection, where('category', '==', categoryId))
    getDocs(dataCategory)
    .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))

   } else {
    getDocs(dataCollection)
    .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
    
   }
  }, [categoryId]);

    return (
    <div className="itemListContainer-container">
    <div className="greetings-container">
    <Greetings saludo={'Bienvenido!!'}/>
    </div>
    <div className="itemList-container">
    <ItemList data={data} />
    </div>
    </div>
  )
}

export default ItemListContainer