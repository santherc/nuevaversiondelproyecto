//mi primer contacto//

let nombre = prompt("ingresar nombre");
let contrasena = prompt("ingresa tu contraseña")
let anodenacimiento = prompt("ingresa año de nacimiento")
let año = prompt("Ingresa el año actual")
let edad = año - anodenacimiento

if (contrasena.toLocaleLowerCase() == "misilesatierra2021") {
    alert(nombre + "," + " tu edad es" + " " + edad)
} else { console.log("la contraseña es incorrecta") }