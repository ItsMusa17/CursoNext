export function sumar(n1, n2){
    return n1+n2
}

function restar(n1, n2){
    return n1-n2
}

//Otra forma de exportar funciones es:
export{
    restar
}

/*EXPORT DEFAULT
  1. Solamente puede haber un export default por archivo
  2. Se puede importar y nombrar como se desee*/

export default function multiplicar(n1, n2){
    return n1 * n2
}

/*Cambiar el anterior codigo a arrow function 
    export const sumar = (n1, n2) => return n1+n2
    export const restar = (n1, n2) => return n1-n2
    
    (Para las default se hace lo siguiente)
    const multiplicar = (n1, n2) => return n1*n2
    export default multiplicar
    */
