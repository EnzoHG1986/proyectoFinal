import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../components'

const DetailPage = () => {
  const {id} = useParams()
  const {getProductById, addProductCart, isInCart, cart} = useCustomContext()
  const productDetail = getProductById(id)
  const [productIsInCart, setProductIsInCart] = useState(isInCart(id))
  

  return (
    <div>
      <h1>{productDetail.nombre}</h1>
      <h2>{productDetail.precio}</h2>
      <p>Descripcion: {productDetail.descripcion}</p>
      <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id}/>


    </div>
  )
}

export default DetailPage