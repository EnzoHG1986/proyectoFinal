import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, ProductCartCard } from '../../components'

const CartPage = () => {
    const {cart, getTotal} = useCustomContext()
  return (
    <div>
        {cart.length > 0
        ?
      <>
      <div>
            {cart.map(product =>(
                <ProductCartCard key={product.id} producto={product}/>
            ))}
        </div>
        <div>
          Total: ${getTotal()}
        </div>
      </>
      :
      <h3>No has comprado nada por el momento</h3>}
        
    </div>
  )
}

export default CartPage