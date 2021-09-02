// Variables

const dataBase = [{
        id: 1,
        nombre: 'camiseta',
        precio: 40,
        imagen: '../media/camisetalogo.jpg'
    },
    {
        id: 2,
        nombre: 'gorra',
        precio: 30,
        imagen: '../media/gorralogo.jpg'
    },
    {
        id: 3,
        nombre: 'disco',
        precio: 15,
        imagen: '../media/portadaalbum.jpg'
    },
    {
        id: 4,
        nombre: 'poster de pared',
        precio: 5,
        imagen: '../media/logoband.jpg'
    }

];

// Declarando variables //

let carrito = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones //

// Función añadida que encontré y me pareció interesante aplicar //

function reloadProductos() {
    dataBase.forEach((info) => {
        // Estructura
        const myMerch = document.createElement('div');
        myMerch.classList.add('card', 'col-sm-4');
        // Body
        const myMerchCardBody = document.createElement('div');
        myMerchCardBody.classList.add('card-body');
        // Titulo
        const myMerchTitle = document.createElement('h5');
        myMerchTitle.classList.add('card-title');
        myMerchTitle.textContent = info.nombre;
        // Imagen
        const myMerchImagen = document.createElement('img');
        myMerchImagen.classList.add('img-fluid');
        myMerchImagen.setAttribute('src', info.imagen);
        // Precio
        const myMerchPrecio = document.createElement('p');
        myMerchPrecio.classList.add('card-text');
        myMerchPrecio.textContent = '€' + info.precio;
        // Boton 
        const myMerchBoton = document.createElement('button');
        myMerchBoton.classList.add('btn', 'btn-primary');
        myMerchBoton.textContent = '+';
        myMerchBoton.setAttribute('marcador', info.id);
        myMerchBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        myMerchCardBody.appendChild(myMerchImagen);
        myMerchCardBody.appendChild(myMerchTitle);
        myMerchCardBody.appendChild(myMerchPrecio);
        myMerchCardBody.appendChild(myMerchBoton);
        myMerch.appendChild(myMerchCardBody);
        DOMitems.appendChild(myMerch);
    });
}

// Añadir el producto al carrito //

function anyadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'))

    calcularTotal();

    reloadCarrito();

}


function reloadCarrito() {

    DOMcarrito.textContent = '';

    const carritoSinDuplicados = [...new Set(carrito)];

    carritoSinDuplicados.forEach((item) => {

        const miItem = dataBase.filter((itemDataBase) => {

            return itemDataBase.id === parseInt(item);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {

            return itemId === item ? total += 1 : total;
        }, 0);

        const myMerch = document.createElement('li');
        myMerch.classList.add('list-group-item', 'text-right', 'mx-2');
        myMerch.textContent = `€${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}`;

        const mBtn = document.createElement('button');
        mBtn.classList.add('btn', 'btn-danger', 'mx-5');
        mBtn.textContent = 'X';
        mBtn.style.marginLeft = '1rem';
        mBtn.dataset.item = item;
        mBtn.addEventListener('click', borrarItemCarrito);

        myMerch.appendChild(mBtn);
        DOMcarrito.appendChild(myMerch);
    });
}

// Actualiza carrito //

function borrarItemCarrito(evento) {

    const id = evento.target.dataset.item;

    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });

    reloadCarrito();

    calcularTotal();
}

// Función calculo con productos duplicados //

function calcularTotal() {

    total = 0;

    carrito.forEach((item) => {

        const miItem = dataBase.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        total = total + miItem[0].precio;
    });

    DOMtotal.textContent = total.toFixed(2);
}

// Vaciar carrito //

function vaciarCarrito() {

    carrito = [];

    reloadCarrito();
    calcularTotal();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
reloadProductos();

$("h2")

let h2 = $("h2")

console.log(h2)