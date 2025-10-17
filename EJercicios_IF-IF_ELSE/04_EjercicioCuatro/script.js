let diametroRuedaUsuario = prompt("Escribeme el diametro de la rueda (en metros)")
let grosorRuedaUsuario = prompt("Escribeme ahora el grosor de la rueda")

if (diametroRuedaUsuario > 1.4) {
    alert("La rueda es para un vehículo grande")
} else if (diametroRuedaUsuario <= 1.4 && diametroRuedaUsuario > 0.8) {
    alert("La rueda es para un vehículo mediano")
} else {
    alert("La rueda es para un vehículo pequeño")
}

if (diametroRuedaUsuario > 1.4 && grosorRuedaUsuario < 0.4 ||
    diametroRuedaUsuario <= 1.4 && diametroRuedaUsuario > 0.8 && grosorRuedaUsuario < 0.25) {
    alert("El grosor para esta rueda es inferior al recomendado")
}