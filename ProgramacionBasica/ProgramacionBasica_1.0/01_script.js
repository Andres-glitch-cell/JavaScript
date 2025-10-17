/*
1. Introducir 5 números. Calcular la suma de todos ellos. Decir cuántos de ellos son
mayores de 100
*/
let arrayDeNumerosAString
let arrayUsuario = []
let totalSumaNumeros = 0
let numerosIntroducidosUsuario
for (let i = 0; i <= 5; i++) {
    try {
        numerosIntroducidosUsuario = Number(prompt("Introduce el número " + (i + 1) + ":"))
        arrayUsuario[i] = numerosIntroducidosUsuario
        totalSumaNumeros = totalSumaNumeros + numerosIntroducidosUsuario

        if (numerosIntroducidosUsuario > 100) {
            alert("El número " + numerosIntroducidosUsuario + " SI es mayor que 100");
        } else {
            alert("El número " + numerosIntroducidosUsuario + " NO es mayor que 100");
        }
        arrayDeNumerosAString = arrayUsuario.join(" + ")
    } catch (e) {
        alert("Error " + e)
    }
}
alert("La suma total de los números " + arrayDeNumerosAString + " es = " + totalSumaNumeros);