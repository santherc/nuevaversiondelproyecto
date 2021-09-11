$("#theme").on("click", () => {
    if (localStorage.getItem("theme") == "dark") {
        lightTheme()
    } else {
        darkTheme()
    }
})


const darkTheme = () => {

    $("nav").css("background-color", "white")
    $("a").css("color", "black")
    $("footer").css({
        "background-color": " white",
        "color": "black"
    })
    $("h1").css("color", "white")
    $("h2").css("color", "white")
    $("h3").css("color", "white")
    $("p").css("color", "white")
    $("body").css("background-color", "black")

    localStorage.setItem("theme", "dark")
}

const lightTheme = () => {

    $("nav").css("background-color", "black")
    $("a").css("color", "white")
    $("footer").css({
        "background-color": " black",
        "color": "white"
    })
    $("h1").css("color", "black")
    $("h2").css("color", "black")
    $("h3").css("color", "black")
    $("p").css("color", "black")
    $("body").css("background-color", "white")

    localStorage.setItem("theme", "light")
}