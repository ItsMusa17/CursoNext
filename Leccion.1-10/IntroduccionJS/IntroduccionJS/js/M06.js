//Como hacer el destructuring de dos o mas objetos

const producto = {
    nombre : 'Nintendo',
    precio : 1500, 
    disponible : false
}

const cliente = {
    nombre : 'Kilian',
    premium : true,
    //Objeto dentro de objeto 
    direccion: {
        calle: 'Calle mexico'
    }
}

const { nombre } = producto
//De esta manera accedemos a la propiedad dentro del objeto, pero se reenombra al salir 
const { nombre: nombreCliente} = cliente //Esto es una forma de reenombrar la variable
console.log (nombre)
console.log (nombreCliente)

//Acceder a un objeto dentro de otro objeto 
const {direccion:calle} = cliente //Esto hara que imprima todo el objeto direccion
const {direccion:{calle :calle2}} = cliente //Esto hara que imprima solo la propiedad calle
console.log (calle)
console.log (calle2)
 