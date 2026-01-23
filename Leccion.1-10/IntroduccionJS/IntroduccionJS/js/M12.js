//---- USO DE METODOS PARA LOS ARRAY
const array1 = ['Azul', 'Rojo', 'Verde', 'Morado', 'Negro']
const array2 = [ 15, 10, 17, 4, 102]

//FILTER - nos ayuda a sacar un solo elemento o a obtener un solo elemento
const nuevoarray = array1.filter((colores) => colores !== 'Rojo')
console.log(nuevoarray)

//INCLUDE - revisa si es que existe algun elemento en el arreglo
const resultado = array1.includes('Azul') //Imprime TRUE, por que si existe
console.log(resultado)

//SOME - Devuelve si al menos 1 cumple la condicion
const resultado2 = array2.some(num => num > 15)
console.log(resultado2)

//FIND - Devuelve el primer elemento que cumple una condicion 
const resultado3 = array2.find(num => num < 15)
console.log(resultado3)

//EVERY - Retorna TRUE o FALSE si todos cumplen la condicion
const resultado4 = array2.every(num => num > 2)
console.log(resultado4)

//REDUCE - Retorna, un acumulado del total
const resultado5 = array2.reduce((total, num) => total + num)
console.log(resultado5)

//--- USO DE CONDICIONALES
const disponible = 2000
const retirar = 500
const autenticado = true

/* CONDICIONALES BASICOS:
  > Mayor que     >= Mayor o igual que     == Igual
  < Menor que     <= Menor o igual que     === Igual estricto
                    !== Diferente a */
if(disponible > retirar ){
    //Se cumple la condicion
    console.log('El usuario puede retirar')
}else{
        //No se cumple la condicion
    console.log('El usuario no puede retirar')
}

//Diferencia entre == y ===
const num = 20
const num2 = '20'

//== Comparador no estricto (Solo compara el mismo valor)
if(num == num ){ 
    console.log('si, son iguales')
}

//=== Comparador estricto (Compara el valor y el tipo de dato)
if(num === num ){ 
    console.log('no, no son iguales')
}

//-- CONDICIONALES OR Y AND
const saldo = 300
const pagar = 500
const tarjeta = 600
if (saldo > pagar || tarjeta > saldo){
    console.log('Si, si puedes pagar')
}