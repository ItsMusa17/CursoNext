//OBJETOS Y DESTRUCTURING

const producto = {
    //Lo primero es llamado key y lo segundo es un valor
    nombre : 'Nintendo', //A todo junto se le llama propiedad
    precio : 1500, //Si queremos colocar otra proedad se termina la anterior con una coma
    disponible : false
}

console.log(producto)//Nos va a imprimir todo el objeto seguido
console.table(producto)//Nos va a imprimir el objeto en una tabla 

console.table(producto.nombre)//Nos permite imprimir solo una propiedad
console.table(producto.descuento)// Nos imprimira un undefined debido a que no existe la propiedad

//Desctructuring   nos permite ahorrar variables a la hora de extraer un valor del objeto
const {nombre, precio, disponible} = producto
console.log(nombre, precio, disponible)

//Obejtect literal Enhament sirve para mandar propiedades dentro de un obejto, mandarlas ahi 
const autenticado = true
const usuario = 'Monica'

const nuevoObjeto = {
    //Opcion 1, cuando la propiedad es de diferente nombre
    au : autenticado, //De esta manera traemos una variable de afuera para asignarla a una propiedad de un objeto 
    us : usuario,

    //Opcion 2, cuando la propiedad y variable tienen un nombre igual
    autenticado,
    usuario
}

console.log(nuevoObjeto)