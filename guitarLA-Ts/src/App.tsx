
import Header from './components/Header.js'
import Guitar from './components/Guitar.js'
import { useCart } from './hooks/useCart.js'

function App() { //Los componentes son funciones y estos siempre deben de comenzar por mayuscula
    //USO DE useState
    //const [autenticador, setAutenticador] = useState([])

    //USO DE useEffect
    //useEffect (() => {
      //  console.log('Componente listo')
    //},[autenticador])

    const { data, cart, addToCart, removeFromCart, clearCart, increaseQuantity, decrementQuantity,isEmpty,
        cartTotal} = useCart()

    return (

        <>
        <Header 
            cart = {cart}
            removeFromCart = {removeFromCart}
            increaseQuantity = {increaseQuantity}
            decrementQuantity = {decrementQuantity}
            clearCart = {clearCart}
            isEmpty = {isEmpty}
            cartTotal = {cartTotal}
        />

        <main className= "container-xl mt-5">
            <h2 className= "text-center">Nuestra Colección</h2>

            {/* Row funciona de manera que alinea los elementos en filas */}
            <div className= "row mt-5">
                {/*Lo que haremos es com .map crear un arreglo por cada objeto, creando un componente*/}
                {/*Cada que iteramos usando .map,*/}
                {data.map((guitar) => ( //Podemos tomar diferentes objetos
                    <Guitar
                        /*Cada que iteramos usando .map, necesitamos un id unico llamdo key*/
                        key={guitar.id}
                        guitar={guitar} //Asignamos el objeto a un promp
                        addToCart={addToCart}
                    /> 
                ))}
            </div>
        </main>


        <footer className= "bg-dark mt-5 py-5">
            <div className= "container-xl">
                <p className= "text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
            </div>
        </footer>

        </>
    )
}

export default App
