type Guitar = {
    id : number
    name : String
    image : string
    description : string
    price : number
}

//Sintaxis de type separado
type GuitarProps = {
    guitar : Guitar,
    addToCart : (item: Guitar) => void
}

//Sintaxis de typeline
//export default function Guitar({guitar, addToCart} : {guitar : Guitar, addToCart:(item : Guitar) => void}){

export default function Guitar({guitar, addToCart} : GuitarProps){

    //Aplicamos un arreglo con los objetos 
    const {name, image, description, price} = guitar

    return (
        <div className= "col-md-6 col-lg-4 my-4 row align-items-center">
                <div className= "col-4">
                    <img className= "img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
                </div>
                <div className= "col-8">
                    <h3 className= "text-black fs-4 fw-bold text-uppercase">{name}</h3> {/*Mandamos solo el atributo Name del objeto*/}
                    <p>{description}</p>
                    <p className= "fw-black text-primary fs-3">${price}</p>
                    <button 
                        type="button"
                        className= "btn btn-dark w-100"
                        //Agregamos el evento, en donde  tomamos lo previo al carrito y sumamos algo nuevo
                        onClick={() => addToCart(guitar)}
                    >Agregar al Carrito</button>    
                </div>
            </div>
    )
}