
import Header from './components/Header.jsx'
import Guitar from './components/Guitar.jsx'
import {db} from './data/db.js'
import {useEffect, useState} from 'react'

function App() { //Los componentes son funciones y estos siempre deben de comenzar por mayuscula
    //USO DE useState
    //const [autenticador, setAutenticador] = useState([])

    //USO DE useEffect
    //useEffect (() => {
      //  console.log('Componente listo')
    //},[autenticador])

    //Inicializar la database
    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [data] = useState(db) //Su valor inicial es el arreglo de informacion con el que contamos 
    const [cart, setCart] = useState([initialCart]) //Creamos un prop para poner tomar los datos y mandalros al carrito

     //Funcion para tener un guardado local
    useEffect(() =>{
        //Solo guarda strings
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]) // De esta manera le decimos que solo haga esta accion cuando el evento ya haya finalizado


    function addToCart(item){
        //findIndex identifica si el iteam ya existe de no ser asi, manda un -1, si eciste manda la posicion de dicho item
        const itemExist = cart.findIndex((guitar) => guitar.id === item.id)

        if(itemExist >= 0 ){ //Verifica si el iteam ya existe
            if(cart[itemExist].quantity >= 5) return
            const updateCart = [...cart] //Esta es una copia del carrito
            updateCart[itemExist].quantity++
            setCart(updateCart) //Le enviamos todo el carrito nuevamente
        }else{
            item.quantity = 1 //Agregamos una propiedad que nos indica la cantodad de ese mismo item
            setCart([...cart, item])
        }

    }

    //Funcion para eliminar un item del carrito
    function removeFromCart(id){
        //Buscamos los elementos diferentes, debido a que solo queremos eliminar 
        //el que se esta presionando
        setCart(prevCart => prevCart.filter(guitar => guitar.id != id))
    }

    //Uso de boton +
    function increaseQuantity(id){
        const updateCart = cart.map(item => {
            if(item.id === id && item.quantity < 5){
                return{
                    ...item, //Copia todo nuestro item y solo modifica
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updateCart)
    }

    //Reto 1 decremento de cantidades 
    function decrementQuantity(id){
        const updateCart = cart.map(item => {
            if(item.id === id && item.quantity > 1){
                return{
                    ...item,
                    quantity: item.quantity -1
                }
            }
            return item
        })
        setCart(updateCart)
    }

    //Funcion que nos ayuda a limpiar el carrito
    function clearCart (){
        setCart ([])
    }

   

    return (
        <>
        <Header 
            cart = {cart}
            removeFromCart = {removeFromCart}
            increaseQuantity = {increaseQuantity}
            decrementQuantity = {decrementQuantity}
            clearCart = {clearCart}
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
                        setCart={setCart}
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
