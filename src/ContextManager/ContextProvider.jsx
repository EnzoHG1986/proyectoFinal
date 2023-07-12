import React,{createContext, useContext, useState} from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
    const products =[
        {
            nombre: 'Notebook HP 15-ef2529la plata natural 15.6"',
            precio: 290999,
            id:1,
            stock: 8,
            imagen:'https://http2.mlstatic.com/D_NQ_NP_2X_877931-MLA69378170816_052023-F.webp',
            descripcion: "La notebook HP 15-ef2529la es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.    Su pantalla de 15.6 y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.Su procesador AMD Ryzen 5 de 6 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar"
        },
        {
            nombre: 'Asus TUF Gaming F15 FX506LHB-HN324 - Bonfire black',
            precio: 656999,
            id:2,
            stock: 20,
            imagen:'https://http2.mlstatic.com/D_NQ_NP_847596-MLA51231972332_082022-O.webp',
            descripcion: "Sumérgete en el mundo de los videojuegos con la Notebook gamer Asus TUF Gaming F15 FX506LHB en color bonfire black. Equipada con un potente procesador Intel Core i5 10300H y 16GB de RAM DDR4, esta máquina te permitirá disfrutar de tus juegos favoritos sin interrupciones ni demoras. La capacidad de 512GB SSD asegura un almacenamiento rápido y eficiente para todos tus archivos y programas.La pantalla de 15.6 Full HD (1920x1080px) con tecnología IPS y una frecuencia de actualización de 144Hz te brinda imágenes nítidas y fluidas, mientras que la tarjeta gráfica NVIDIA GeForce GTX 1650 con 4GB de memoria de video GDDR6 garantiza un rendimiento gráfico excepcional. Además, la pantalla antirreflejo te permitirá jugar cómodamente en cualquier ambiente sin molestias por reflejos."
        },
        {
            nombre: 'Notebook Asus Tuf A15 Amd Ryzen 5',
            precio: 439999,
            id:3,
            stock: 10,
            imagen:'https://http2.mlstatic.com/D_NQ_NP_952011-MLA70135312034_062023-O.webp',
            descripcion: "ASUS TUF Gaming A15 notebook 4600H Computadora portátil 39.6 cm (15.6) Full HD AMD Ryzen 5 16 GB DDR4-SDRAM 512 GB SSD NVIDIA GeForce GTX 1650 Wi-Fi 6 (802.11ax) FreeDOS Graphite Black"
        },
        {
            nombre: 'Auriculares gamer HyperX Cloud Stinger S HHSS1S-AA negro',
            precio: 33899,
            id:4,
            stock: 12,
            imagen:'https://http2.mlstatic.com/D_NQ_NP_726736-MLA47216608971_082021-O.webp',
            descripcion: "Experimentá la adrenalina de sumergirte en la escena de otra manera. Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los HyperX Stinger S no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.El formato perfecto para vos.El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena."
        },
        {
            nombre: 'Auriculares Gamer Corsair Hs80 Rgb Usb 7.1 Dolby Usb Black',
            precio: 72674,
            id:5,
            stock: 21,
            imagen:'https://http2.mlstatic.com/D_NQ_NP_670505-MLA54359328202_032023-O.webp',
            descripcion: "Los auriculares para juegos CORSAIR HS80 RGB USB ofrecen un sonido increíblemente rico en matices a través de los transductores de audio de neodimio de 50 mm de ajuste personalizado con sonido envolvente Dolby Audio 7.1. Desde un débil susurro hasta una explosión estruendosa, un par de transductores de audio de neodimio de alta densidad de 50 mm y ajuste personalizado captan cada sonido con todo detalle, con un rango de frecuencia ampliado de 20 Hz-40.000 Hz. Los controladores de audio de neodimio de 50 mm, de alta calidad y ajustados a medida, ofrecen un sonido excelente con el rango necesario para oírlo todo en el campo de batalla. La conexión USB posibilita una experiencia de audio multicanal y le sitúa justo en el centro de la acción del juego."
        },
        {
            nombre: 'Auriculares gamer inalámbricos Logitech G Series G935 G935 negro y azul con luz rgb LED',
            precio: 72276,
            id:6,
            stock: 10,
            imagen:'https://http2.mlstatic.com/D_NQ_NP_801842-MLA41083724996_032020-O.webp',
            descripcion: "Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Logitech G935 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores. El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena."
        },
        {
            nombre: 'Monitor Gamer Led 24 Fullhd Ips 75hz Samsung',
            precio: 66059,
            id:7,
            stock: 23,
            imagen:'https://http2.mlstatic.com/D_NQ_NP_882543-MLA53789882212_022023-O.webp',
            descripcion: "Samsung está fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa líder en la industria tecnológica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendrás y disfrutarás de una gran experiencia visual en todo momento. Con tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas Este monitor de 24' te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 5 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos."
        },
        {
            nombre: 'Monitor Gamer Philips 27 Curvo 271e1sca/55',
            precio: 124999,
            id:8,
            stock: 3,
            imagen:'https://http2.mlstatic.com/D_NQ_NP_990408-MLA52364993901_112022-O.webp',
            descripcion: "La pantalla curva E-Line de 27” ofrece una experiencia verdaderamente envolvente con un diseño elegante. Disfrutá de imágenes Full HD nítidas y una acción suave gracias a la tecnología AMD FreeSync."
        },
        {
            nombre: 'Monitor Gaming 25 Fhd 240hz Con Panel Ips',
            precio: 146000,
            id:9,
            stock: 17,
            imagen:'https://http2.mlstatic.com/D_NQ_NP_793187-MLU69614346853_052023-O.webp',
            descripcion: "Samsung está fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa líder en la industria tecnológica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendrás y disfrutarás de una gran experiencia visual en todo momento. Este monitor de 25' te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1.92 x 1.08 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad."
        },
        
    ]


    const getProductById = (id) =>{
        return products.find(producto => producto.id === Number(id))
    }
    const getProductCartById = (id) => {
        return cart.find(producto => producto.id === Number(id))
    }


    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.some(producto => producto.id === Number(id))

    const addProductCart = (id, quantity) =>{
        if(isInCart(id)){
            setCart(cart.map(product =>{
                if(product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            setCart([...cart, {...getProductById(id), quantity:quantity}])
        }
    }

    const getTotal = () => {
        let total =0
        cart.forEach(product => total += product.precio * product.quantity )
        return total
    }
    return (
        <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
            {children}
        </Context.Provider>
    )
}
export const useCustomContext = () => useContext(Context)

export default ContextProvider