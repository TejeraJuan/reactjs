import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (

    <div className='container'>

        <h1 className='main-title'>Carrito</h1>

    {
        carrito.map((prod) => (
            <div key={prod.id}>
                <br />
                <h3>{prod.titulo}</h3>
                <p>Precio por unidad: ${prod.precio}</p>
                <p>Precio total: ${prod.precio * prod.cantidad}</p>
                <p>cantidad: {prod.cantidad}</p>
                <br />
            </div>
        ))
    }
    {
        carrito.length > 0  ?  <>
        <h2> Precio total: ${precioTotal()}</h2>
        <button onClick={handleVaciar}>Vaciar Carrito</button>
     </> : <h2>Carrito vacio</h2>
     }

    </div>

  )
}

export default Carrito