import React,{createContext, useContext, useState} from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
    const products =[
        {
            nombre: 'monitor curvo samsung 24"',
            precio: 90000,
            id:1,
            stock: 8,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur tempora quibusdam suscipit quasi itaque explicabo nobis deserunt quae excepturi dolor iste deleniti quod saepe voluptatibus, corporis illo temporibus reiciendis."
        },
        {
            nombre: 'monitor curvo samsung 27"',
            precio: 120000,
            id:2,
            stock: 10,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur tempora quibusdam suscipit quasi itaque explicabo nobis deserunt quae excepturi dolor iste deleniti quod saepe voluptatibus, corporis illo temporibus reiciendis."
        },
        
        {
            nombre: 'monitor curvo samsung 29"',
            precio: 140000,
            id:3,
            stock: 23,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur tempora quibusdam suscipit quasi itaque explicabo nobis deserunt quae excepturi dolor iste deleniti quod saepe voluptatibus, corporis illo temporibus reiciendis."
        },
    ]


    const getProductById = (id) =>{
        return products.find(producto => producto.id === Number(id))
    }

    const [cart, setCart] = useState([])
    const isInCart = (id) => cart.some(producto => producto.id === Number(id))
    const addProductCart = (id, quantity) =>{
        if(isInCart(id)){
            console.log('ya esta agregado')
        } else{
            setCart([...cart, {...getProductById(id), quantity: quantity}])
        }
    }

    return (
        <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart}}>
            {children}
        </Context.Provider>
    )
}
export const useCustomContext = () => useContext(Context)

export default ContextProvider