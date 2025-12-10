var valores = [true, 5, false, "hola", "adios", 2]
/*
let palabraHola = valores[3]
let palabraAdios = valores[4]

if (valores[3] > valores[4]) {
    alert("La palabra de la posición 4 es mayor la palabra es " + valores[3])
}
*/

// 1.
let resultado = valores[3] > valores[4]
alert(resultado)

// 2.
let result = valores[0] || valores[2]
alert(result)

let result2 = valores[0] && valores[2]
alert(result2)

// 3.
let num1 = valores[1]
let num2 = valores[5]

let resultadoSuma = num1 + num2
alert(resultadoSuma)

let resultadoResta = num1 - num2
alert(resultadoResta)

let resultadoMultiplicacion = num1 * num2
alert(resultadoMultiplicacion)

let resultadoDivision = num1 / num2
alert(resultadoDivision)

let resultadoResto = num1 % num2
alert(resultadoResto)