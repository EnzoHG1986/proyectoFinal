import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({producto}) => {
    return (
        <div className='containerProducto'>
            <div className='containerImgProduc'>
                <img  className='imgProduc' src={producto.imagen} alt="Imagen del Producto" />
            </div>
            <h2 className='producNombre'>{producto.nombre}</h2>
            <h3 className='producPrecio'>Precio: {producto.precio}</h3>
            {/* 
            <p className='producDescripcion'>Descripcion: {producto.descripcion}</p>
            */}
            <Link  className='procutDetalle' to={'/detail/' + producto.id}>Ver Detalle</Link>
        </div>

    )
}

export default ProductCard