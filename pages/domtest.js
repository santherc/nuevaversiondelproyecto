const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes/5"

$.get(url, (respuesta, estado) => {
    if (estado === "success") {

        console.log(respuesta[1].author);
        respuesta.forEach(e => {
            $("body").append(`
                <p>${e.quote}</p>
                <p>${e.author}</p>
                
                
                `)
        })



    }
})