

const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {

  return (
    <div>
        <div className='item-count'>
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button onClick={handleAgregar} className="agregar-al-carrito">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount