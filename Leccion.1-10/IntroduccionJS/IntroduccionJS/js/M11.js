//DECLARACION DE FUNCIONES

//Esto es declarar una funcion
function suma(){ //El programa primero lee todas las funciones declaradas de esta manera
    console.log(1+1)
}

//Y para imprimirla necesitamos mandar a llamar la funcion
suma()

//USO DE FUNCIONES CON PARAMETROS
function suma2(num,num2){
    console.log(num + num2)
}
suma2(10, 20)

//FUNCIONES CON PARAMETROS DEFINIDOS
function suma3(num = 0,num2 = 6){ 
    console.log(num - num2)
}
suma3()

//OTRA FORMA DE CREAR FUNCIONES  Para ello se usa FUNCTION EXPRESSION
const multipicacion = function (num1, num2){ //Para ejecutarlo esta funcion se lee como una variable
    console.log(num1 * num2)
}
multipicacion(10, 20)

/*USO DE ARROW FUNCTION
    Suelen usarse usualmente cuando la funcion cuenta con solo una sola linea*/
const resta = (num1, num2) => console.log(num1 - num2)
resta(25, 20)

//RETORNAR VALORES POR MEDIO DE FUNCIONES
const division = function (num1, num2){ //Para ejecutarlo esta funcion se lee como una variable
    return num1/num2
}
const div = division(13, 5)//Mandamos a llamar la funcion y retorna un valor que guarda en una variable
console.log(div)

//const resta = (num1, num2) => num1 - num2 -Para las arrow, solo se necesita quitar el console.log


