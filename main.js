/*Practica de javascript

let entrada = prompt("Ingresar tu nombre completo");
let salida = "Bienvenido" + " " + entrada;
alert(salida);

let mensajeDeBienvenida = "Gracias por dejarnos tu nombre, ya eres bienvenido" + " " + entrada;

console.log(mensajeDeBienvenida); */

/* segunda clase javascrip */

/* let altura = prompt("Ingresar altura en 3 digitos y sin comas");
let edad = prompt("Ingresa tu edad");

if (altura < 120) {
    alert("Sos un minion de " + edad + " años.");
}
else if (altura < 160) {
    alert("Sos un petiso/a de " + edad + " años.");
}
else if (altura < 180) {
    alert("Tu altura es promedio");
}
else if (altura <= 189) {
    alert("Sos un gigante de " + edad + " años.");
}
else if (altura => 190) {
    alert("Agachate que pasa un avion");
} */

/* TERCERA CLASE - CICLOS */

let gusto = prompt("Ingresar un gusto de Ginevré para saber el precio");
let cantidad = prompt("Ingresar cantidad de botellas de 600ml")
let precioDry = "1000";
let precioBlue = "1000";
let precioRosado = "1000";
let precioGold = "1300";
let precioCitric = "1200";
//Repetimos hasta que se ingresa "ESC"
while (gusto != "ESC") {
    switch (gusto) {
        case "dry":
            alert("El precio total seria " + precioDry * cantidad);
            break;
        case "blue":
            alert("El precio total seria " + precioBlue * cantidad);
            break;
        case "rosado":
            alert("El precio total seria " + precioRosado * cantidad);
            break;
        case "citric":
            alert("El precio total seria " + precioCitric * cantidad);
            break;
        case "gold":
            alert("El precio total seria " + precioGold * cantidad);
            break;
        default:
            alert("Ese no es un gusto de Ginevré, intentalo de vuelta.");
            break;

            
    }
    gusto = prompt("Ingresar un gusto de Ginevré para saber el precio");
    cantidad = prompt("Ingresar cantidad de botellas de 600ml");

    
}
