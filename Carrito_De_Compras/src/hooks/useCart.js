//Estps hooks funcionan como funciones de js
import {db} from '../db.js'
import {useEffect, useState} from 'react'
import { useMemo } from "react";

export const useCart = () => {
    //Inicializar la database
    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }
    const [data] = useState(db) //Su valor inicial es el arreglo de informacion con el que contamos 
    const [cart, setCart] = useState(initialCart) //Creamos un prop para poner tomar los datos y mandalros al carrito

     //Funcion para tener un guardado local
    useEffect(() => {
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
        setCart([])
    }

    //State Derivado
    /*useMemo, nos permite que cuando se precione el boton no se haga un render de la aplicacion
    completa, si no que solo de este state*/
    const isEmpty = useMemo(() => cart.length === 0, [cart]) //Cuando el carrito cambie

    /*Funcion para obtener el total del carrito y mandarlo a mostrar
        total funciona como variable al igual que item, de manera que sumamos lo que ya tenemos*/
    //const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0))

    //Siempre se recomienda tener un return que sea un objeto
    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decrementQuantity,
        isEmpty,
        cartTotal
        
    }
}
