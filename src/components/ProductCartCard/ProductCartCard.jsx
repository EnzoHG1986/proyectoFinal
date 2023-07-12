import React from 'react'
import './ProductCartCard.css'

const ProductCartCard = ({producto}) => {
  return (
    <div className='containerProductoCarrrito'>
      <div className='containerCarritoImg'>
        <img className='carritoImg' src={producto.imagen}/>
      </div>
      <div className='containerProductoDescripcion'>
        <h2 className='carritoNombre'>{producto.nombre}</h2>
        <p className='carritoCantidad'>Cantidad: {producto.quantity}</p>
        <h3 className='carritoPrecio'>Precio: {producto.precio}</h3>
      </div>
    </div>
  )
}

export default ProductCartCard