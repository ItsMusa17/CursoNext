//Tipo de datos

//--- DATO UNDEFINED 
let cliente
console.log(cliente)
console.log(typeof cliente) //typeof es una forma de saber el tipo de dato de una variable

//--- DATO CADENA/STRING
const alumno = "juan"
console.log(alumno)
console.log(typeof alumno)

// Pueden estar en medio de comillas simples o dobles, pero no pueden combinarse
const producto = "Grafica 4060 Nvidia"
console.log(producto)
console.log(typeof producto)

//--- DATO NUMERO, en javascrip, todos los numeros son iguales aun si tienen decimales o no 
const num1 = 30
const num2 = -30
const num3 = 30.30
console.log(num1,num2,num3)
console.log(typeof num1,typeof num2,typeof num3)

const num4 = "30" //Si el numero esta entre comillas es un string
console.log(typeof num4)
console.log(num4 + num1) // No hace la suma por que uno es string y otro un numero, por lo que lo concatena

//--- DATO BIGINT esto es un constructor pero no es muy utilizado
const numG = BigInt(66165161656561665651665) //Utiliza el constructor BigInt
console.log(typeof numG)

//--- DATO BOLEANO    Nos va a dar un TRUE o un FALSE
const descuento = true
console.log(typeof descuento)

//--- DATO NULL    es un valor que no es nada, no existe
const Nada = null //Si quieres un valor null, la constante debe de ir definida
console.log(Nada)

let N3 //En undefined no se necesita colocarle nada
console.log(N3)

//--- DATO SYMBOL  Funciona para librerias
const PrimerSymbol = Symbol(30) //Este dato tiene la caracteristica de que si comparas 
const SegundoSymbol = Symbol(30) //Etos son diferentes entre si, por lo que son UNICOS
console.log(PrimerSymbol === SegundoSymbol) // Retorna un FALSE