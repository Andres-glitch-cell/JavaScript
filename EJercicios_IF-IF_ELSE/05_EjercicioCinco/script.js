/* IMPORTANTE DECLARAR LAS VARIABLES PARA BUCLE INFINITO FUERA DEL BUCLE */

let quieresCogerUnHelado
do {
    quieresCogerUnHelado = prompt("Quieres coger un helado?")
    quieresCogerUnHelado.toLowerCase()

    if (quieresCogerUnHelado == "si") {
        try {
            let dineroUsuario = prompt("Introduce la cantidad de € que llevas encima: ")
            alert("Precio Helados:")
            alert("Fresa - 0.6 €")
            let datosFresa = "Helado de Fresa - Precio 2.9"
            alert("Chocolate - 1 €")
            let datosChocolate = "Helado de Chocolate - Precio 2.9"
            alert("Nata - 1.6 €")
            let datosNata = "Helado de Nata - Precio 2.9"
            alert("Vainilla - 1.7 €")
            let datosVainilla = "Helado de Vainilla - Precio 2.9"
            alert("Mora - 1.8 €")
            let datosMora = "Helado de Mora - Precio 2.9"
            alert("Piña - 2.9 €")
            let datosPiña = "Helado de Piña - Precio 2.9"
            alert("Pomelo 2.9 €")
            let datosPomelo = "Helado de Pomelo - Precio 2.9"

            if (dineroUsuario > 2.9) {
                alert("Los helados que puedes son " + datosPiña + "  y " + datosPomelo)
                let dineroRestante = dineroUsuario - datosPomelo - datosPiña
                alert("Te queda " + dineroRestante + " euros.")


            } else if (dineroUsuario < 2.9 && dineroUsuario > 1.8) {
                alert("El helado que puedes coger es el de " + datosMora)
                dineroRestante = dineroUsuario - datosMora
                alert("Te queda " + dineroRestante + " euros.")


            } else if (dineroUsuario < 1.8 && dineroUsuario > 1.7) {
                alert("El helado que puedes coger es el de " + datosVainilla)
                dineroRestante = dineroUsuario - datosVainilla
                alert("Te queda " + dineroRestante + " euros.")


            } else if (dineroUsuario < 1.7 && dineroUsuario > 1.6) {
                alert("El helado que puedes coger es el de " + datosNata)
                dineroRestante = dineroUsuario - datosNata
                alert("Te queda " + dineroRestante + " euros.")


            } else if (dineroUsuario < 1.6 && dineroUsuario > 1) {
                alert("El helado que puedes coger es el de " + datosChocolate)
                dineroRestante = dineroUsuario - datosChocolate
                alert("Te queda " + dineroRestante + " euros.")


            } else if (dineroUsuario < 1 && dineroUsuario > 0.6) {
                alert("El helado que puedes coger es el de " + datosFresa)
                dineroRestante = dineroUsuario - datosFresa
                alert("Te queda " + dineroRestante + " euros.")

            } else {
                alert("No has cogido ningun helado correcto, ni el adecuado para este ejercicio.")
            }
        } catch (e) {
            alert("Error por este motivo " + e)
        }
    } else if (quieresCogerUnHelado == "no") {
        alert("Gracias por al menos ejecutar el código, un saludo!")
    }
} while (quieresCogerUnHelado !== "si" || quieresCogerUnHelado !== "no")

