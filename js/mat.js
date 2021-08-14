//mi primer carrito//

let producto1 = "camiseta"
let producto2 = "gorra"
let producto3 = "disco"

class Producto {

    constructor(tipo, categoria, precio, stock, disp) {
        this.tipo = tipo;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
        this.disp = disp;

    }
}

let producto = []

const producto1 = new Producto("Camiseta", "logo banda", 10, 40, true)
const producto1 = new Producto("Gorra", "gorra logo", 15, 32, true)
const producto1 = new Producto("Camiseta", "cover album", 10, 2500, true)

console.log(producto1);