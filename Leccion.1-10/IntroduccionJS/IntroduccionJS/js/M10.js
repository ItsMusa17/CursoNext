//USO DE DESTRUCTURING EN ARRAYS
const tecnologias = ['HTML', 'Node.js', 'CSS', 'JavaScript', 'Ruby', 'Python'] 

//Se asigna la variable conforma a la posicion
const [tec1, tec2] = tecnologias
console.log(tec2) //Imprimime Node,js

//En caso de que solo ocupes una en especifico, se agregan comas
const [ , , , , , tec6] = tecnologias
console.log(tec6 ) //Imprimime Python

/*USO DE ITERACIONES EN ARRAYS
    Para ello vamos a utilizar lengh para que sea dinamico*/

for (let i=0; i < tecnologias.length;i++ ){
    console.log(tecnologias[i])
}

/*USO DE FOREACH  Esta funcion ya sabe cuantas posiciones existen en el arreglo
    por lo que ejecuta una funcion por la cantidad de veces que tiene un arreglo*/
tecnologias.forEach(function(tecnologia){
     console.log(tecnologia)
})

/*USO DE MAP  Esta funcion crea un nuevo arreglo en base a las caracteristicas que le demos
    ademas de que map mpdifica el arreglo que tenemos*/
const arrayMap = tecnologias.map(function(tecnologia){
     return tecnologia
})

/*USO DE FOR ...OF Esta sintaxis ejecuta un bloque de codigo POR CADA variante del arreglo*/
for(let tech of tecnologias){
    console.log(tech)
}



