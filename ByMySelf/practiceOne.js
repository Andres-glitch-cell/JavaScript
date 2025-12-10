// Importa una libreria que te permite leer texto desde la console (como Scanner en Java)
const prompt = require('prompt-sync')();

// Constante para usar para el consoleLog()
const cl = console.log

// Introducir números
let num1 = prompt("Introduce el primer número: ");

// Convierte el String a número (parseInt()) el prompt siempre devolvera String
num1 = parseInt(num1);

// Hacer comparación si es mayor que 5
try {
    try {
        cl("\nAqui empieza el principio del Script Sencillo")
        if (num1 > 5) {
            console.log("El número " + num1 + " es mayor a 5")
        } else if (num1 == 5) {
            console.log("El número " + num1 + " es igual a 5")
        } else {
            cl("El número " + num1 + " es menor a 5")
        }

        let num2 = prompt("Introduce el segundo número: ");
        num2 = parseInt(num2);

        if (num2 > 5) {
            console.log("El número " + num2 + " es mayor a 5")
        } else if (num2 == 5) {
            console.log("El número " + num2 + " es igual a 5")
        } else {
            cl("El número " + num2 + " es menor a 5")
        }
        cl("Aqui termina el principio del Script Sencillo")
    } catch (e) {
        cl("Error: " + e)
    }

    // ---------------------------------------------------------------------------------------- //
    let respuestaUsuario
    const respuestaUsuarioContinuar = null
    do {
        // cl("Has puesto algo que no es correcto, debes de (Presionar Intro || escribir Continuar || Salir para salir del Script.")
        cl("Introduciras otros números para calcular de acuerdo? (Presiona Intro || Continuar, para seguir O Salir, para salir del Script)")
        // Crea una variable que le asigna lo de para que el usuario pueda escribir + que la pasa a minuscula para que se pueda
        // comparar con si es exactamente a la palabra salir y no por ejemplo ssalir (DATO: todo lo que haya puesto el usuario
        // ya estará todo puesto a minúscula.)
        respuestaUsuario = prompt().toLowerCase()
        if (respuestaUsuario === "salir") {
            cl("Has decidido acabar el Script, hasta pronto.")
            process.exit(1)
            // El triple = es para indicar que si es un String o un int.
        } else if (respuestaUsuario.trim === "continuar" || respuestaUsuario.trim === "") { // El trim quita espacios en blanco
            // Guarda la respuesta del usuario con la palabra "continuar en la variable respuestaUsuarioContinuar"
            respuestaUsuarioContinuar = respuestaUsuario
            try {
                do {
                    cl("Has introducido " + respuestaUsuarioContinuar + " y depende de lo que hayas escrito te tocara ejecutar, varias opciones:")
                    cl("\nAqui es el principio del Script Complejo con Js")
                    cl("\nIntroduce una opcion de las que ves.")
                    cl("1. Sumar numeros")
                    cl("2. Restar numeros")
                    cl("3. Multiplicar numeros")
                    cl("4. Dividir números")
                    cl("5. Salir")

                    let opcion = parseInt(prompt("Introduce una opcion: ")); // ERROR: Faltaba declarar 'let' y pedir la opción
                    switch (opcion) {
                        case 1:
                            cl("Introduce un número: ")
                            num1 = parseInt(prompt()) // ERROR: Sintaxis incorrecta, corregida
                            cl("Introduce otro número: ")
                            num2 = parseInt(prompt()) // ERROR: Sintaxis incorrecta, corregida
                            console.log("Resultado suma: " + (num1 + num2));
                            break;
                        case 2:
                            cl("Introduce un número: ")
                            num1 = parseInt(prompt()) // ERROR: Sintaxis incorrecta, corregida
                            cl("Introduce otro número: ")
                            num2 = parseInt(prompt()) // ERROR: Sintaxis incorrecta, corregida
                            console.log("Resultado: resta: " + (num1 - num2));
                            break;
                        case 3:
                            cl("Introduce un número: ")
                            num1 = parseInt(prompt()) // ERROR: Sintaxis incorrecta, corregida
                            cl("Introduce otro número: ")
                            num2 = parseInt(prompt()) // ERROR: Sintaxis incorrecta, corregida
                            console.log("Resultado multiplicación: " + (num1 * num2));
                            break;
                        case 4:
                            cl("Introduce un número: ")
                            num1 = parseInt(prompt()) // ERROR: Sintaxis incorrecta, corregida
                            cl("Introduce otro número: ")
                            num2 = parseInt(prompt()) // ERROR: Sintaxis incorrecta, corregida
                            cl("Resultado división: " + (num1 / num2));
                            break;
                        case 5:
                            cl("Saliendo...")
                            break;
                        default:
                            console.log("Opción no válida");
                            break;
                    }
                } while (opcion != 5)
            } catch (error) {
                cl("Error " + error)
            }
            if (opcion == 5) {
                cl("Gracias por ejecutar el Script.")
            }
        }
        // Mientras la respuesta del usuario sea diferente a los Strings salir, continuar y String vacio ("")
    } while (respuestaUsuario !== "salir" || respuestaUsuario !== "continuar" || respuestaUsuario !== "")
} catch (e) {
    cl("Error " + e)
}

