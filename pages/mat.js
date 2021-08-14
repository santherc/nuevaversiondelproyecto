//mi primer carrito//

let categoria1 = "camiseta"
let categoria2 = "gorra"
let categoria3 = "disco"

class Producto {

    constructor(tipo, categoria, precio, stock, disp) {
        this.tipo = tipo;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
        this.disp = disp;

    }

    nuevoPrecio() {
        this.precio = Number(prompt("nuevo precio"))
    }
    cambiarMercancia() {
        this.categoria = prompt("cambiar de categoria")
    }

}

let merch = []

let producto1 = new Producto("logo banda", categoria1, 10, 40, true);
let producto2 = new Producto("gorra logo", categoria2, 15, 32, true);
let producto3 = new Producto("cover album", categoria3, 10, 25, true);
let producto4 = new Producto("logo oscuro", categoria1, 5, 30, true);
let producto5 = new Producto("gorra plana", categoria2, 50, 35, true);
let producto6 = new Producto("demo", categoria3, 10, 26, true);

merch.push(producto1)
merch.push(producto2)
merch.push(producto3)
merch.push(producto4)
merch.push(producto5)
merch.push(producto6)

console.log(merch)

//producto3.nuevoPrecio()
//producto4.cambiarMercancia()


let merchDelproducto1 = merch.filter(e => e.categoria === categoria1)
console.log(merchDelproducto1)
let merchDelproducto2 = merch.filter(e => e.categoria === categoria2)
console.log(merchDelproducto2)
let merchDelproducto3 = merch.filter(e => e.categoria === categoria3)
console.log(merchDelproducto3)

let menorPrecio = merch.find(e => e.precio > 0)