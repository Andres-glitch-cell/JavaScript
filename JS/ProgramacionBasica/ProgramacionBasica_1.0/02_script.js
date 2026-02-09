/*
2. Almacena en un array los números 7,8,2,9,10. Calcular la suma de los números mayores
de 8
*/

let arrayUsuario = [7, 8, 2, 9, 10]
let totalSumaNumerosMayQueOcho = 0

for (i in arrayUsuario) {
    if (arrayUsuario[i] > 8) {
        totalSumaNumerosMayQueOcho = totalSumaNumerosMayQueOcho + arrayUsuario[i]
    }
}


alert(totalSumaNumerosMayQueOcho)
