//EVALUACION DE CORTO CIRCUITO &&

const user = true

//los && es para evaluar una condicion si existe sin necesidad de if 
user && console.log()

//---ECMAScript Esto funciona para no tener varias importaciones
import multiplicar, {sumar} from './funciones.js'
const resultado = sumar(10,5)
console.log(resultado)

/*Sintaxis para evitar la colision de importaciones en caso de que 
    estas tengan el mismo nombre*/ 
import {restar as funcionrestar} from './funciones.js'
const resultado2 = funcionrestar(10,5)
console.log(resultado2)

//Importar una funcion default
import a, {/*sumar, restar*/} from './funciones.js'
const resultado3 = a(10,5)
console.log(resultado3)