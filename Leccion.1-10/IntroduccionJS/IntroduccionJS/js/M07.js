//UNIR DOS O MAS OBJETOS

const producto = {
    nombre : 'Nintendo',
    precio : 1500, 
    disponible : false
}

const cliente = {
    nombre : 'Kilian',
    premium : true,
}

const carrito = {
    cantidad : 1,
    producto, //De esta manera estoy trayendo un OBJETO dentro de otro

    //...  Se le conoce como Spread Operator
    ...producto //De esta manera unimos las propiedades dentro del objeto
}

console.log(carrito.nombre) //Imprime el nombre 

//Unir producto y cliente en un mismo objeto
const nuevoObjeto = {
    producto,
    cliente,

    //Hay que tener cuidado, por que si, unimos las propiedades:
    ...producto,
    ...cliente
    //Esto hara que la propiedad nombre, solo aparezca una vez ya que la reenombra
}

console.log(nuevoObjeto)

/*Object assign <-- Esto nos ayuda a ahorrrar lineas de codigo */
const nuevoObjeto2 = Object.assign(producto,cliente) // == a nuevoObjeto
console.log(nuevoObjeto2)
