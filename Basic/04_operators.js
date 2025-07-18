let a = 4
let b = 2

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División
console.log(a % b) // Módulo (resto de la división)
console.log(a ** b) // Exponente (a elevado a la b)

a++
console.log(a)

b--
console.log(b)

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

// Operadores de comparación
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a == b) // Igualdad (valor)
console.log(a === b) // Igualdad estricta (valor y tipo)
console.log(a != b) // Desigualdad (valor)
console.log(a !== b) // Desigualdad estricta (valor y tipo)

// Operadores ternarios
    // Funciona igual que un if (condicion < || > || != || = etc) {
                        //   then
                        //       sys...("texto")
                        //        }
const estaLloviendo = true
    estaLloviendo ? console.log("Esta lloviendo") 
                    : console.log ("No esta lloviendo")