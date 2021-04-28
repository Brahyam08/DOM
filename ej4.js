let nombre = window.prompt('dime tu nombre');
let edad = parseInt(window.prompt('dime tu edad'));


if (edad < 18) {
    document.getElementById("div1").innerHTML = `<h1>Hola ${nombre} eres menor de edad</h1>`
    document.getElementById("div1").style.color = "red"
} else if (edad >= 18) {
    document.getElementById("div1").innerHTML = `<h1>Hola ${nombre} eres mayor de edad</h1>`
    document.getElementById("div1").style.color = "green"
}

// aqui faltaria un case por cada edad asi que solo he puesto la edad limite para que te diga si eres menor o mayor
switch (edad) {
    case 17:
        document.getElementById("div2").innerHTML = `<p>Hola ${nombre} eres menor de edad Switch</p>`
        document.getElementById("div2").style.color = "red"
        break;
    case 18:
        document.getElementById("div2").innerHTML = `<h2>Hola ${nombre} eres mayor de edad Switch</h2>`
        document.getElementById("div2").style.color = "green"
        break;
}

edad < 18 ? (document.getElementById("div3").innerHTML = `<p>Hola ${nombre} eres menor de edad ternario</p>`)(document.getElementById("div3").style.color = "red") : (document.getElementById("div3").innerHTML = `<h2>Hola ${nombre} eres mayor de edad ternario</h2>`)(document.getElementById("div3").style.color = "green");