/*Practica de javascript

let entrada = prompt("Ingresar tu nombre completo");
let salida = "Bienvenido" + " " + entrada;
alert(salida);

let mensajeDeBienvenida = "Gracias por dejarnos tu nombre, ya eres bienvenido" + " " + entrada;

console.log(mensajeDeBienvenida); */

/* segunda clase javascrip */

let altura = prompt("Ingresar altura en 3 digitos y sin comas");
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
}