// var (son variables globales, digamos variables que afectan a todo el script)

var helloWorld = "Hello, JavaScript!"
console.log(helloWorld); // Output: Hello, JavaScript!

helloWorld = "Hola de nuevo Javascript!"

console.log(helloWorld); // Output: Hola de nuevo Javascript!


// let (son variables de bloque, digamos variables locales que solo afectan a la clase o función donde se declaran)

let helloWorld2 = "Hello, JavaScript!"
console.log(helloWorld); // Output: Hello, JavaScript!

helloWorld2 = "Hola de nuevo Javascript!"

console.log(helloWorld2); // Output: Hola de nuevo Javascript!


// const (son constantes, variables que no cambian su valor una vez asignado)

const helloWorld3 = "Hello, JavaScript3!"
console.log(helloWorld3); // Output: Hello, JavaScript3!

helloWorld3 = "Hola de nuevo Javascript3!" // Esto causará un error porque helloWorld3 es una constante (valor fijo)
console.log(helloWorld3); // Output: Hello, JavaScript3! (no se ejecutará la línea anterior)