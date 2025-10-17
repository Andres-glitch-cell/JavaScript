/* ==============================
📌 Atajos personalizados de Andres 📌 
   ==============================
for       = andresfor
while     = andreswhile
do while  = andresdo
if        = andresif
else      = andreselse
else if   = andreselseif
switch    = andresswitch
alerta    = andresalert
funcion   = funcionclasica
flecha 1L = funcionflechaUnaLineaCodigo
flecha ML = funcionflechaMuchasLineasCodigo
   ============================== */

/*
Crear una calculadora utilizando funciones para cada una de sus
acciones(sumar, restar, dividir, multiplicar, calcular cociente,calcular
porcentaje) y
utilizando la sentencia SWITCH para organizarlo. Utiliza el metodo confirm ()
para verificar que la opción seleccionada es la correcta.
*/

// Funciones flecha y clásicas

// Funcion flecha =>
const resultadoSuma = (num1, num2) => num1 + num2;

// Funcion Clásica
function restaCalculadora(num1, num2) {
    const resultadoResta = num1 - num2;
    return resultadoResta;
}

// Funcion flecha =>
const resultadoMultiplicacion = (num1, num2) => num1 * num2;

// Funcion Clásica
function divisionCalculadora(num1, num2) {
    const resultadoDivision = num1 / num2;
    return resultadoDivision;
}

// Funcion Flecha =>
const resultadoResto = (num1, num2) => num1 % num2;

// Variables usadas
let opcionUsuario
let num1
let num2
let resultado
let seguirOperando

do {
    // Mostramos un menú para elegir la operación
    opcionUsuario = Number(prompt(
        "Elige la operación:\n" +
        "1 - Sumar.\n" +
        "- - - - - - - - - - -\n" +
        "2 - Restar.\n" +
        "- - - - - - - - - - -\n" +
        "3 - Multiplicar.\n" +
        "- - - - - - - - - - -\n" +
        "4 - Dividir.\n" +
        "- - - - - - - - - - -\n" +
        "5 - Resto (módulo).\n" +
        "- - - - - - - - - - -\n" +
        "6 - Salir.\n" +
        "- - - - - - - - - - -\n"
    ));
    try {
        let num1 = parseFloat(prompt("Ingresa el primer número: "));
        let num2 = parseFloat(prompt("Ingresa el segundo número: "));

        // Verificamos si los valores son válidos
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Alguno de los valores ingresados no es un número válido.");
        }

        alert("Los números ingresados son: " + num1 + " y " + num2);
    } catch (e) {
        alert("Error: " + e.message);
    }

    switch (opcionUsuario) {
        case 1:
            resultado = resultadoSuma(num1, num2);
            alert("La suma de los números " + num1 + " y " + num2 + " es: " + resultado);
            seguirOperando = confirm("Quieres seguir operando con las operaciones?")
            break;

        case 2:
            resultado = restaCalculadora(num1, num2);
            alert("La resta de los números " + num1 + " y " + num2 + " es: " + resultado);
            seguirOperando = confirm("Quieres seguir operando con las operaciones?")
            break;

        case 3:
            resultado = resultadoMultiplicacion(num1, num2);
            alert("La multiplicación de los números " + num1 + " y " + num2 + " es: " + resultado);
            seguirOperando = confirm("Quieres seguir operando con las operaciones?")
            break;

        case 4:
            resultado = divisionCalculadora(num1, num2);
            alert("La división de los números " + num1 + " y " + num2 + " es: " + resultado);
            seguirOperando = confirm("Quieres seguir operando con las operaciones?")
            break;

        case 5:
            resultado = resultadoResto(num1, num2);
            alert("El resto de los números " + num1 + " y " + num2 + " es: " + resultado);
            seguirOperando = confirm("Quieres seguir operando con las operaciones?")
            break;

        case 6:
            alert("Has elegido salir, saliendo de la Calculadora...")
            break;
        default:
            alert("Opción no válida. Por favor, elige un número del 1 al 5.");
            break;
    }
} while (opcionUsuario != 6)