var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numeroDNIUsuario = prompt("Introduce tu DNI (SIN LA LETRA)")

let letraDNIUsuario = prompt("Introduce tu letra del DNI")

let letraUsuarioDNI = numeroDNIUsuario % 23

if (letraDNIUsuario.toUpperCase() === letras[letraUsuarioDNI]) {
    alert("Tu letra es correcta")
} else {
    alert("Tu letra no es correcta")
}