import React from 'react'
import Item from '../item/Item'

const ItemList = ({data =[]}) => {
  return (
    data.map(product => <Item key={product.id} spec={product}  />)
  )
}

export default ItemList