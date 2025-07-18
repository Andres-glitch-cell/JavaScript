/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// Comentario en una línea

// 2. Escribe un comentario en varias líneas
/*
Comentario
en
varias
lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let miInt = 1
let miDecimal = 1.1
let miString = "Andres"
let mibigInt = 31298409348570329423489n
let miBoolean = true
let undefinedValue = undefined
let nullValue = null
let mySymbol = Symbol("mysymbol")
let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)

// 4. Imprime por consola el valor de todas las variables
console.log(miInt)
console.log(miDecimal)
console.log(mibigInt)
console.log(miBoolean)
console.log(undefinedValue)
console.log(nullValue)
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof miInt)
console.log(typeof miDecimal)
console.log(typeof miBoolean)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
// Error
// miInt = 5
// miDecimal = 10.0
// miBoolean = false

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
// Error
// miInt = 10.0
// miDecimal = 10
// miBoolean = 99
// undefinedValue = "String"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const miNumero = 1
const miDecimal2 = 10

// 9. A continuación, modifica los valores de las constantes
// Error no puedes cambiar el valor de una variable hecha con CONST por que no puede ser variable una vez le asignas un valor
// fijo
// miDecimal2 = 20
// miNumero = 20

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// Hecho