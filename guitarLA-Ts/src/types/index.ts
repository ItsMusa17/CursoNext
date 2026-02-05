export type Guitar = {
    id : number
    name : String
    image : string
    description : string
    price : number
}

//De esta manera hacemos que CartItem herede atributos de Guitar
export type CartItem = Guitar & {
    quantity : number
}

//UTILITY TYPER funciona cuando quieres heredar solo ciertos atributos
/*Uso de pick, selecciona cuales atributos se usan
export type CartItem = Pick <Guitar, 'id' | 'name' | 'price'> & {
    quantity : number
}*/

/*Uso de Omit, selecciona cuales atributos no se necesitan
export type CartItem = Omit <Guitar, 'id' | 'name' | 'price'> & {
    quantity : number
}*/

