// Capturar elementos de html
let productos = document.querySelectorAll('img')
let carrito = document.querySelector('button')
let contenidoModal = document.querySelector('.modal-content')

// Definir un set vacio
// Se usa set para simplifiar el trabajo sin elementos repetidos
let mostrar = new Set();

//Se capturan los elementos del arreglo productos y se les asigna un listener para cada evento necesario
productos.forEach(function (producto) {

    // En caso de doble click se elimina del carrito y se le quita la opacidad
    producto.addEventListener("dblclick", function () {
        mostrar.delete(producto.getAttribute('src'))

        producto.style.opacity = "1"
    });
    // En caso de click se agrega al carrito y se le agrega opacidad
    producto.addEventListener('click', function () {
        mostrar.add(producto.getAttribute('src'))
        producto.style.opacity = "0.5"
    })

})

//Listener sobre el boton del carrito para el evento click
carrito.addEventListener('click', function () {
    // Se crea un arreglo a partir del set carrito
    const conteidoCarrito = Array.from(mostrar)
    //Se quita contenido del modal para evitar concatenacion en cada click sobre el carrito
    contenidoModal.innerHTML = ''

    if (conteidoCarrito.length !== 0) {
        // En caso de que hayan elementos en el carrito se agregan las imagenes al modal
        conteidoCarrito.forEach(function (productoCarrito) {
            contenidoModal.innerHTML += `<img src="${productoCarrito}"  width="200rem">`

        })
    } else {
        // En caso de no haber elementos en el carrito se muestra un mensaje
        contenidoModal.innerHTML = '<h3 class="text-danger">¡Carrito vacío!</h3>'
    }

    //Se instancia la clase modal de Bootstrap con el elemto de id Modal
    let modal = new bootstrap.Modal(document.getElementById('Modal'));
    //Se muestra el modal
    modal.show();
})