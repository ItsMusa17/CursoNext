//--EVENTOS CON CLICK
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

//Existen muchas formas, pero es como si añadieras una funcion a un elemento
heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo heading al dar click'
})

//Recordemos que los enlaces son un arreglo, y se usa el foreach
enlaces.forEach(enlace => {
    //La variable e nos va a yudar a reportar el evento que tenemos 
    enlace.addEventListener('click', (e) => {
        //Nos ayuda a prevenir la accion que ya venga default
        e.preventDefault()
        e.target.textContent = 'Diste clik...'
    })  
})

//--EVENTOS CON INPUT
const inputNombre2 = document.querySelector('#nombre') //Despues del # viene el id de lo que queremos modificar
inputNombre2.addEventListener('input', (e) => {
    //con value, se lee lo que el usuario aesta ingresando, por ejemplo un nombre
    console.log(e.target.value)
})

const inputPassword = document.querySelector('#password')

//Tambien podemos hacer que llame una funcion 
inputPassword.addEventListener('input', password)

function password(){
    inputPassword.type = 'text'
     
    //Lo que hacemos es ponerle un time, para que se vea brevemente lo que se escribe
    setTimeout(() => {
        inputPassword.type = 'password'
    }, 300)//Cada 1s = 1000
}


//--EVENTOS CON SUMIT (Existe comunmente con los formulario)
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    //Lo que hacemos es tomar el nombre cuando se mande el formulario
    const nombre = document.querySelector('#nombre').value //Si colocamos el .value se accede a su atributo
    const con = document.querySelector('#password').value

    //Prevenir que se manden multiples alertas
    const alertaprevia = document.querySelector('.alerta')
    alertaprevia?.remove()

    //Generar elementos HTML con js
    const alerta = document.createElement('DIV')
    alerta.textContent = 'Contenido de alerta' //Contenido adentro de div
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')

    //Validacion de formulario vacio
    if(nombre === '' || con === ''){
        alerta.textContent = 'No puedes dejar campos vacios'
        alerta.classList.add('bg-red-500')
    }else{
        //Obtener el nombre y la contraseña en la consola
        console.log(nombre)
        console.log(con)
        alerta.textContent = 'Formuario enviado'
        alerta.classList.add('bg-green-500')
    }

    //Lo que hace es agregarlo a los hijos del formulario
    formulario.appendChild(alerta)

    setTimeout(() => {
        //Remover el aviso de alerta despues de unos segundos
        alerta.remove(alerta)
    }, 300)

})