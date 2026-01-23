/*ARREGLOS EN JS
   Esto es un arreglo o una lista*/

// Un objeto ocupa {}
// Un arreglo necesita []
const tecnologias = [20, 50, 90] 
console.table(tecnologias) //Imprime todo el array
console.log(tecnologias[2]) //Imprime solo una posicion del array empezando desde 0

//MODIFICAR VALORES EN EL ARRAY
const tecnologias2 = ['HTML', 'Node.js', 'CSS', 'JavaScript'] 
tecnologias2[3] = 'Nest.js'
tecnologias2[4] = 'Nest.js'
tecnologias2[10] = 'Nest.js' //Esto nos indica que no genera valores en blanco si no que salta
console.table(tecnologias2)

const nuevoarreglo = [...tecnologias2, 'Ruby' ] //Esta sintaxis es la mas recomedable para no
console.table(nuevoarreglo)                     //mutar el codigo

//FILTER nos ayuda a recorrer todo el arreglo
const tecnologias3 = tecnologias2.filter(function(tech){ //TECH accede a los valores
    console.log(tech) //Imprime los valores individuales
    //if(tech !=='HTML') //va a sacar a html de la impresion
    if(tech =='HTML'){ //solo imprime html
        return tech
    }
})
console.log(tecnologias3)

//MAP esto nos permite acceder a un elemento del arreglo y modificarlo
const tecnologias4 = tecnologias2.map(function(tech){ 
    if(tech ==='Node.js'){  //Si solo dejamos el if lo que hace es igngorar lo demas
            return 'Nest.js'
        } else{ //Este else nos permite imprimir todo lo demas, despues de modificar
            return tech
        }
})
console.log(tecnologias4)
