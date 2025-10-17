let numeros = [];  // Aquí guardaremos los 5 números

for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt("Introduce el número " + (i + 1) + ":"));
    numeros.push(num); // Añadimnos los números al array
}

// Paso 2: recorrer con for…in
for (indice in numeros) {
    // indice es un string que representa 0,1,2,3,4
    let valor = numeros[indice];
    alert(valor + " x 3 = " + (valor * 3));
}
