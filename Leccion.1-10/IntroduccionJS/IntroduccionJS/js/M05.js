//MANIPULACION DE OBJETOS 
//Lo que haremos sera cambiar el valor de ciertas propiedades dentro del objeto

const producto = {
    nombre : 'Nintendo',
    precio : 1500, 
    disponible : false
}

//Reescribir un valor
producto.disponible = true

//Agregar una nueva propiedad si no existe
producto.imagen = 'Imagen.jpg'

//Eliminar una propiedad con DELETE 
delete producto.precio
console.log(producto)

//FREEZE-- bloquear el objeto para que nadie pueda modificarlo 
Object.freeze(producto)
producto.nombre = 'Monica'
console.log(producto)

//SEAL-- Nos permite modificar los valores, pero no borrar ni añadir
Object.seal(producto)
