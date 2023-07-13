import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard } from '../../components'
import './HomePage.css'

const HomePage = () => {
    const {products} = useCustomContext()
    const [searchProduct, setSearchProduct] = useState('')
    const [max, setMax] = useState(1000000)
    const [min, setMin] = useState(0)
    const [currentProducts, setCurrentProducts] = useState(products)

    useEffect(() =>{
        setCurrentProducts(products.filter(
            producto => producto.nombre.toLowerCase().includes(searchProduct.toLowerCase()) &&  producto.precio >= min && producto.precio <= max
        ))
    }, [searchProduct, min, max])
    return (
        <div className='containerHomePage'>
            <div className='containerFiltro'>
                <div className='containerText'>
                    <h4 className='fitroTitulo'>Filtra tu producto:</h4>
                    <input className='inputFiltro' placeholder='Busca tu producto'value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)}/>
                </div>
                <div className='containerPrecio'>
                    <h4 className='fitroTitulo'>Filtro por precio:</h4>
                    <div className='containerMinMax'>
                        <input className='inputMinMax' type='text'value={min} onChange={(e) => setMin(Number(e.target.value))}/>
                        <input className='inputMinMax' type='text'value={max} onChange={(e) => setMax(Number(e.target.value))}/>
                    </div>
                </div>
            </div>


            <h1 className='homePageTitulo'>Lista de Productos</h1>
            <div className='containerProducHomePage'>
                {
                    currentProducts.length > 0
                    ?

                    currentProducts.map(producto =>(
                    <ProductCard producto={producto} key={producto.id}/>
                    ))
                    :
                    <h3>No Se encuentra ningun producto</h3>
                }
                
            </div>
        </div>
    )
}

export default HomePage