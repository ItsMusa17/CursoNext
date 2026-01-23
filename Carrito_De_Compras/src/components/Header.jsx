//Aqui podemos importar librerias o componentes

function Header () {
    //Aqui van a ir nuestras states o funciones

    const name = 'Monica'
    //Todo lo que este dentro del return se muestra
    return (
        //Para poder compilar codigo JS se necesita estar entre {}
        <p>Nombre: {name}</p>
    );
}

export default Header;
