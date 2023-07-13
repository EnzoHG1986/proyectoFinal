import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../components'
import './DetailPage.css'

const DetailPage = () => {
  const {id} = useParams()
  const {getProductById, addProductCart, isInCart, getProductCartById} = useCustomContext()

const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))

const [productIsInCart, setProductIsInCart] = useState(isInCart(id))
  
  return (
    <div className='containerGeneralDetalPage'>
      <div className='containerDetalPage'>
        <div className='containerImagenDetalPage'>
          <img className='DetalPageImg' src={productDetail.imagen} alt="imagen del producto" />
          <h3 className='DetalPagePrecio'>${productDetail.precio}</h3>
        </div>
        <div className='containerDescripcionDetalPage'>
          <h2 className='nombreDetalPage'>{productDetail.nombre}</h2>
          <p className='descripcionDetalPage'>Descripcion: {productDetail.descripcion}</p>
        </div>
      </div>
      <div className='containerGeneralConuter'>
        {
          isInCart(id)
          ?
          <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id}/>
          :
          <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id}/>
        }
      </div>
    </div>
  )
}

export default DetailPage