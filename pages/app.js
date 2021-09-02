//mi primer contacto//

/*

let nombre = prompt("ingresar nombre");
let contrasena = prompt("ingresa tu contraseña")
let anodenacimiento = prompt("ingresa año de nacimiento")
let año = prompt("Ingresa el año actual")
let edad = año - anodenacimiento

if (contrasena.toLocaleLowerCase() == "misilesatierra2021") {
    alert(nombre + "," + " tu edad es" + " " + edad)
} else { console.log("la contraseña es incorrecta") }

*/

class Person {
    constructor({
        firstName = "",
        lastName = "",
        email = "",
        phone = 0,
    }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }
}

$("#btn").on("click", (e) => {
    e.preventDefault()

    const User = new Person({
        lastName: $("#lastName").val(),
        email: $("#email").val(),
        firstName: $("#firstName").val(),
        phone: $("#phone").val(),
    })

    const { firstName, lastName, email, phone } = User

    $("#print").append(`
            ${firstName} ${lastName} thanks for your contact data ${phone} and ${email}, we'll be in contact soon!</p>
        `);
})