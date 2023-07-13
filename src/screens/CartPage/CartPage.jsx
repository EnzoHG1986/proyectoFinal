import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, ProductCartCard } from '../../components'
import './CartPage.css'

const CartPage = () => {
    const {cart, getTotal} = useCustomContext()
  return (
    <div>
        {cart.length > 0
        ?
      <>
      <div>
      <h3 className='titulocarrito'>Detalle de la orden de compra:</h3>

            {cart.map(product =>(
                <ProductCartCard key={product.id} producto={product}/>
            ))}
        </div>
        <div className='totalCartPage'>
          Total: ${getTotal()}
        </div>
      </>
      :
      <div className='containerCarritoVacio'>
        <i className="bi-cart4"></i>
        <h3 className='carritoVacio'>Tu carrito se encuentra vacio.</h3>
      </div>
      }
        
    </div>
  )
}

export default CartPage