import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemdetail/ItemDetail";
import {getFirestore, doc, getDoc } from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detailId} = useParams();

  useEffect(() => {
    const dataBase = getFirestore();
    const dataDoc = doc(dataBase, 'products', detailId);
    getDoc(dataDoc)
    .then(res => setData({id: res.id, ...res.data()}))
  }, [detailId])


    return (
   <div className="itemDetail-container">
    <ItemDetail data={data} />
    </div>
    
  )
}

export default ItemDetailContainer