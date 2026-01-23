/*USO DE DOOM (JavaScript intermedio)
    > Selectores (todas las interacciones que hacemos dentro de DOM empieza por uno)
        - Elementos de CSS que podemos modificar 
    > DOOM (Atributos que tiene un elemento)
    */
   
//Aqui se inicializa el elemnto el cual vamos a estar modificando 
const heading = document.querySelector('.heading')

//De esta amnera vemos que atributos tienen llamandolos por su tipo
console.log(heading)
console.log(heading.tagName)
console.log(heading.textContent)

//El 'ALL' al final de querySelector nos dice que vamos a tomar todos los elementos
const enlaces = document.querySelectorAll('.navegacion a') //Muestra todos los enlaces 
const enlaces2 = document.querySelector('.navegacion a') //Muestra solo el primer elnace
console.log(enlaces)
console.log(enlaces2)

//--MANIPULACION DE ELEMENTOS HTML con JS
/*Lo que hacemos es llamar al heading como si fuera un 
    objeto y su textContent como si fuer auna propiedad*/
heading.textContent = 'Un nuevo heading'
heading.id = 'Un nuevo ID'

//Con remuve podemos eliminar ciertas condiciones
heading.removeAttribute('class')

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un nuevo valor'

//Manipular una lista de elementos por ejemplos por links 
console.log(enlaces) //Nos imprime la lista como si fuera un arreglo
enlaces[0].textContent = 'Nuevo enlace' //Tendremos que elegir una posicion

//Esto es como si recorriera todo el arreglo para cambiar todos los enlaces de una
enlaces.forEach( enlace => enlace.textContent = 'Nuevo enlace2')
