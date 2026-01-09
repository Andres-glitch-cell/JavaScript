let cuantosProductosUsuario;
let nombreProductoUsuario;
let arrayProductosUsuario = [];
let precioProductoUsuario;
let arrayPreciosUsuario = [];
let seguirAñadiendoProductos;
let hasAcabado;
let precioUsuario;

alert(
  "Introduce el nombre de los artículos que quieres añadir (Presiona Intro para Continuar): "
);
cuantosProductosUsuario = Number(prompt("Cuantos productos quieres añadir?"));
// De momento aqui todo bien.
if (cuantosProductosUsuario == 0) {
  alert("Si has introducido 0, para que ejecutas el código, bobo.");
} else if (cuantosProductosUsuario < 0) {
  alert("Hay que ser MU tonto, para introducir un número negativo");
} else {
  for (let i = 0; i < cuantosProductosUsuario; i++) {
    nombreProductoUsuario = prompt(
      "Introduce el nombre del producto " + (+i + 1) + ":"
    );
    /* !!! IMPORTANTE !!!! */
    // |
    // |  Aquí estaba el error, que no añadía los productos a la array.
    // v
    // nombreProductoUsuario = arrayProductosUsuario[i] ❌
    // arrayProductosUsuario[i] = nombreProductoUsuario
    arrayProductosUsuario[i] = nombreProductoUsuario;
  }

  // Hasta aqui todo bien.
  if (arrayProductosUsuario.length == null) {
    alert("La array esta vacía");
  } else if (arrayProductosUsuario.length > 0) {
    alert("Continua...");

    // Todo bien hasta aqui

    while (true) {
      hasAcabado = prompt("Has acabado de añadir productos? (S/N)");
      hasAcabado = hasAcabado.trim().toLowerCase();
      if (hasAcabado != "n" && hasAcabado != "s") {
        // Si pulsó cancelar, puedes decidir si romper o seguir preguntando
        alert("Debes responder S o N");
        continue;
      } else if (hasAcabado === "s") {
        alert("Ya que has acabado... (Presiona Intro para Continuar)");
        alert("Ahora introduce el precio de los artículos que has añadido.");
        for (let y = 0; y < arrayProductosUsuario.length; y++) {
          precioProductoUsuario = Number(prompt("Introduce el precio del artículo " + arrayProductosUsuario[y]));
          arrayPreciosUsuario[y] = precioUsuario;
        }
        alert("Has acbado de añadir todos tus productos, tanto nombre de producto como del precio!")
        alert("Tus productos con sus respectivos precios son: ")
        for (let a = 0; a < arrayProductosUsuario; a++) {
          alert("/n" + "Nombre Producto:" + arrayProductosUsuario[a]
            + "Precio Producto: " + arrayPreciosUsuario[a])
        }
      } else if (hasAcabado === "n") {
        alert("Sigue añadiendo productos entonces hasta que acabes...");
        let cantidadSeguirAñadiendoProductos = Number(prompt("Cuantos productos te faltan por añadir?"))
        for (let j = 0; j < cantidadSeguirAñadiendoProductos; j++) {
          seguirAñadiendoProductos = prompt("Introduce el nombre del producto " + (+j + 1) + ":");
          arrayProductosUsuario.push(seguirAñadiendoProductos);
          if (arrayProductosUsuario.indexOf()){
    
          }
        }
      } else {
        alert("Error inesperado, reinicia la página.");
      }
    }
  }
}
