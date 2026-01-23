//--OPERADORES TERNARIOS
const saldo = 300
const pagar = 500
const tarjeta = true
const autenticado = true

//Condicion                              lo que se ejeucta
//                      si se cumple                            no se cumple
autenticado  ? console.log('Usuario autenticado') : console.log('Usuario no autenticado')

//El operador ? funciona como un ENTONCES 
saldo > pagar || tarjeta ?
        console.log('Si, si puedo pagar') : //Los ':' funcionan como un else
        console.log('No, no puedo pagar')

/*Opcional chanining '?'
    Este termino nos va a permitir acceder a las propiedades de un objeto sin revisar si existen o no*/
const alumno = {
    nombre: 'Monica',
    clase: 'programacion',
    aprobado: true
}
//El operador ? nos indica que aunque no exista la propiedad, continue ejecutando
console.log(alumno.examenes?.examenes1) 
console.log('Este es un ALUMNO')

/*Nullish coalescing'??' 
    Este operador nos va a ayudar a que retorne el valor de la derecha/izquierda cuando
    el valor de izquierda/derecha no exista*/
const pagina = null ?? 1
console.log(pagina)