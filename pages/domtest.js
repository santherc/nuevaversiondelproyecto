// Api de divisas - dolar hoy//

const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
$.get(url, (respuesta, estado) => {
    if (estado === "success") {

        console.log(respuesta[1].casa.agencia)
        respuesta.forEach(e => {
            $("body").append(`
                <h1>${e.casa.nombre}</h1>
                <p>${e.casa.compra}</p>
                <p>${e.casa.venta}</p>
                
                `)
        })



    }
})