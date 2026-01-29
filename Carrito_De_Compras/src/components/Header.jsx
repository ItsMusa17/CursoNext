//Aqui podemos importar librerias o componentes
import { useMemo } from "react";

function Header ({cart, removeFromCart, increaseQuantity, decrementQuantity, clearCart}) {
    //Aqui van a ir nuestras states o funciones
    //const name = 'Monica'
    //Todo lo que este dentro del return se muestra

    //State Derivado
    /*useMemo, nos permite que cuando se precione el boton no se haga un render de la aplicacion
    completa, si no que solo de este state*/
    const isEmpty = useMemo(() => cart.length === 0, [cart]) //Cuando el carrito cambie

    /*Funcion para obtener el total del carrito y mandarlo a mostrar
        total funciona como variable al igual que item, de manera que sumamos lo que ya tenemos*/
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0))
    return (
        //Para poder compilar codigo JS se necesita estar entre {}
        //<p>Nombre: {name}</p>
        <header className= "py-5 header">
        <div className= "container-xl">
            <div className= "row justify-content-center justify-content-md-between">
                <div className= "col-8 col-md-3">
                    <a href="index.html">
                        <img className= "img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                    </a>
                </div>
                <nav className= "col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className= "carrito"
                    >
                        <img className= "img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className= "bg-white p-3">
                            
                            {isEmpty ? (
                                <p className= "text-center">El carrito esta vacio</p>
                            ):(
                            <>
                                <table className= "w-100 table">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {/*recordemos que de esta manera va a repetir el codigo
                                        por cada elemento que tengamos en el arreglo*/}
                                        {cart.map(guitar => (
                                            <tr key={guitar.id}>
                                                <td>
                                                    <img className= "img-fluid" 
                                                    src={`/img/${guitar.image}.jpg`}
                                                    alt="imagen guitarra" />
                                                </td>
                                                <td>{guitar.name}</td>
                                                <td className= "fw-bold">
                                                        ${guitar.price}
                                                </td>
                                                <td className= "flex align-items-start gap-4">
                                                    <button
                                                        type="button"
                                                        className= "btn btn-dark"
                                                        onClick={() => decrementQuantity(guitar.id)}
                                                    >
                                                        -
                                                    </button>
                                                        {guitar.quantity}
                                                    <button
                                                        type="button"
                                                        className= "btn btn-dark"
                                                        onClick={() => increaseQuantity(guitar.id)}
                                                    >
                                                        +
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        className= "btn btn-danger"
                                                        type="button"
                                                        onClick={() => removeFromCart(guitar.id)}
                                                    >
                                                        X
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                
                                <p className= "text-end">Total pagar: <span className= "fw-bold">${cartTotal}</span></p>
                            </>
                        )}  
                        <button 
                        className= "btn btn-dark w-100 mt-3 p-2"
                        onClick={clearCart}
                        >
                        Vaciar Carrito</button>                    
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    );
}

export default Header;
