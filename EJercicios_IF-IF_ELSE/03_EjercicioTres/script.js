let notaUsuario = prompt("Pon una nota de calificación entre 0 y 10");
try {
    if (notaUsuario > 0 || notaUsuario < 3) {
        alert("Muy deficiente")
    } else if (notaUsuario > 3 || notaUsuario < 5) {
        alert("Insuficiente")
    } else if (notaUsuario > 5 || notaUsuario < 6) {
        alert("Suficiente")
    } else if (notaUsuario > 6 || notaUsuario < 7) {
        alert("Bien")
    } else if (notaUsuario > 7 || notaUsuario < 9) {
        alert("Notable")
    } else if (notaUsuario > 9 || notaUsuario < 10) {
        alert("Excelente")
    } else {
        alert("Has introducido un número que no esta en el rango")
    }
} catch (e) {
    alert("Error ha ocurrido algo inesperado " + e)
}