//--FETCH API CON PROMISES
// url: https://jsonplaceholder.typicode.com/

const url = 'https://jsonplaceholder.typicode.com/comments'

//Se lee de la siguiente forma:
fetch(url) //Quiero obtener los datos de esta url
    .then((response) => { //Entonces, pueden existir varios, como si fueran opciones
        if(response.ok){
             return response.json()
        }
        throw new Error("Hubo un error...") //De esta forma le indicamos al usuario que hubo un error 
    }) 
    //USO DE ARROWS 
    .then((data) => console.log(data))
    //Solamente se ejecuta cuando hay problemas de red
    .catch((error) => console.log(error.message))

//--USO DE FETCH CON ASYNC AWAIT Y TRY CATCH

//Async await   (es necesario usarse con una funcion)
const consultarAPI = async() => {
    try { //El codigo intenta realizar las acciones que estan dentro de aqui
         //Ese await nos dice que vamos a esperar, todo el tiempo que se necesite ejecutarse
        const response = await fetch(url) 
        if (!response.ok) {
            throw new Error('Hubo un error...')
        }
        const data = await response.json() 
        console.log(data)
    } catch (error) { //En caso de que no se pueda o ocurra un fallo, se lanza el error
        console.log(error)
    }
}
consultarAPI()