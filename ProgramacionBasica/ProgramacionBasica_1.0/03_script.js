let mesUsuario;

do {
    mesUsuario = prompt("Dime un mes del año").toLowerCase();

    if (mesUsuario === "diciembre" || mesUsuario === "enero" || mesUsuario === "febrero") {
        alert("Invierno");
    } else if (mesUsuario === "marzo" || mesUsuario === "abril" || mesUsuario === "mayo") {
        alert("Primavera");
    } else if (mesUsuario === "junio" || mesUsuario === "julio" || mesUsuario === "agosto") {
        alert("Verano");
    } else if (mesUsuario === "septiembre" || mesUsuario === "octubre" || mesUsuario === "noviembre") {
        alert("Otoño");
    } else {
        alert("Has introducido un mes no válido o que no existe.");
    }

} while (!(mesUsuario === "enero" || mesUsuario === "febrero" || mesUsuario === "marzo" ||
    mesUsuario === "abril" || mesUsuario === "mayo" || mesUsuario === "junio" ||
    mesUsuario === "julio" || mesUsuario === "agosto" || mesUsuario === "septiembre" ||
    mesUsuario === "octubre" || mesUsuario === "noviembre" || mesUsuario === "diciembre"));
