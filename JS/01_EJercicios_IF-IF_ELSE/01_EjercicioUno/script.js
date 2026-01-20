// let respuestaUsuarioCulpable = ""
// do {
//     respuestaUsuarioCulpable = prompt("Eres culpable?")
//     let respuestaEnMinuscula = respuestaUsuarioCulpable.toLowerCase()
//     if (respuestaEnMinuscula == "si") {
//         alert("Irás a la cárcel")
//     } else if (respuestaEnMinuscula == "no") {
//         alert("Irás a casa")
//     }
// } while (respuestaEnMinuscula == "")


let respuestaUsuarioCulpable = ""
// Condición para que te siga mostrando la alerta si se pone o introduce otra cosa diferente
do {
    respuestaUsuarioCulpable = prompt("¿Eres culpable? (si/no)")

    if (respuestaUsuarioCulpable == "sí" || respuestaUsuarioCulpable == "si") {
        respuestaUsuarioCulpable = respuestaUsuarioCulpable.toLowerCase()
        alert("Irás a la cárcel")
    } else if (respuestaUsuarioCulpable == "no") {
        alert("Irás a casa")
    } else {
        alert("La documentación por favor.")
    }
} while (respuestaUsuarioCulpable == "")



