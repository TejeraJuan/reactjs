import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) =>{

    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
      const itemAgregado = {...item, cantidad};
    
      const nuevoCarrito = [...carrito];
      const productoAgregado = carrito.find((producto) => producto.id === itemAgregado.id);
    
      if(productoAgregado) {
        productoAgregado.cantidad += cantidad;
        
      }else {
        setCarrito([...carrito, itemAgregado]);
        nuevoCarrito.push(itemAgregado);
      }
      setCarrito(nuevoCarrito);
      
            
    }
  
    const vaciarCarrito = () => {
      setCarrito([]);
    }
  
    const cantidadEnCarrito = () => {
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }
  
    const precioTotal = () => {
      return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

      useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }, [carrito])
      

    return(
        <CartContext.Provider value={{carrito, agregarAlCarrito, vaciarCarrito, cantidadEnCarrito, precioTotal}}>
            {children}
        </CartContext.Provider>
    )
}