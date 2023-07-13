import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './Counter.css'

const Counter = ({initialValue, stock, id}) => {
    const {addProductCart } = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
    const onClickAddProduct = () =>{
        addProductCart(id, quantity)
        Swal.fire(
            'Producto Agregado al Carrito',
        )
    }


    return (
    <div className='containerCounter'>
        <div className='containerMenosMas'>
            <button  className='btnMenosMas' onClick={() => setQuantity(quantity >1 ? quantity -1 : quantity)}><i class="bi-bag-dash-fill btnIco"></i></button>
            <span className='counterQuanity'>{quantity}</span>
            <button className='btnMenosMas' onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1)}><i class="bi-bag-plus-fill btnIco"></i></button>
        </div>
            <button className='btnConfirCompra' onClick={onClickAddProduct}>Confirmar</button>
    </div>
)
}

export default Counter