/*CONCATENACION Y TEMPLATE STRINGS
        Vamos a unir valores con otros y crear nuevos valores a partir de anteriores*/

const producto = 'Nintendo Switch 2'
const precio = 15000
const marca = 'Marca Nintendo'

//Este tipo de concatenacion es anterior y ocupa mucho codigo
console.log('El producto es: ' + producto   )//Se puede usar '+' o una ','

/*las `` se llaman template strings
    Estas funcionan para concatenar variables y ahorrar codigo*/
console.log(`El producto es: ${producto}`)
console.log(`${producto} $${precio} Dolares, marca ${marca}`)