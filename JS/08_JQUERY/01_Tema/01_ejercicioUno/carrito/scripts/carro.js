// * Ejercicio 2
$(document).ready(function () {
  setTimeout(() => {
    console.log("Cargando Página...");
    setTimeout(() => {
      console.log("Página Cargada");
    }, 3500);
  }, 3000);
});

/* 
* Ejercicio 3 
& (Hecho, solo inspeccionar F12) ^
*/

/*
* Ejercicio 4 
& Cambia a gris (#cecece) el color de fondo (background-color) de los artículos (items).
*/
$(document).ready(function () {
  $(".back").css("background-color", "#cecece");
});

// TODO: FORMA MAS CORTA
$(function () {
  // ^ TODO lo que pongas aquí dentro se ejecutará ^
  // ! SOLO cuando el HTML esté listo.
  $(".back").css("background-color", "#cecece");
});

/*
* Ejercicio 5
& Pon  un  borde  (border)  sólido,  de  color  negro  y  4  píxeles  de  grosor  (4px solid black) al elemento con id cart_items.
*/
$(function () {
  $("#cart_items").css("border", "4px black, solid")
})

/*
* Ejercicio 6
& Pon un borde (border) sólido, de color azul y  1 píxel de grosor  (1px solid blue) a todas las imágenes de la página. 
*/
$(function () {
  $("img").css("border", "1px blue solid")
})
/*
* Ejercicio 7
& Subraya (text-decoration:underline) los <label> que sean hijos directos de un elemento de la clase item.
*/
$(function () {
  $(".item > label").css("text-decoration", "underline")
})

/*
* Ejercicio 8
& Pon la fuente de color rojo (color:red) a todos los botones (<button>) que estén dentro del cart_container. 
*/
$(function () {
  $("#cart_container button").css("color", "red")
})
/*
* Ejercicio 9
& Pon  la  fuente  de  color  blanco  (color:white)  a todos  los  <label>  que  estén adyacentes a otro <label> y estén dentro de un elemento de la clase item.
*/
$(function () {
  $("label + label").css("color", "white")
})

/*
* Ejercicio 10
& Pon  la  fuente  de  color  verde  (color:green)  a  todos  los  elementos  que contengan en el texto el símbolo ‘€’ y a todos los <input> de la página.
*/
$(function () {
  // TODO: Importante, cuando se modifican filtros y/o atributos que tener en cuenta de como se usan ya que depende de que tengas que usar si son <input> que son etiquetas para INTRODUCIR TEXTO no es texto como hay una <p> o un <br>
  // ! INCORRECTA ! 
  // $("input:contains('€')").css("color", "green")
  // * FORMA CORRECTA *
  $(":contains('€'), input").css("color", "green");
})

/*
* Ejercicio 11
& Pon el fondo de color amarillo a todos los <div> que estén vacíos. 
*/
$(function () {
  $("div:empty").css("background-color", "yellow")
})
/*
* Ejercicio 12
& Pon el fondo de color rojo al primer y último elemento de la clase item.
*/
$(function () {
  $(".item:first, .item:last").css("background-color", "red")
})
/*
* Ejercicio 13
& Pon  el  borde  de  color  verde  (border-color:green)  a  las  imágenes de camisetas.
*/
$(function () {
  // Busca el src="" de la etiqueta <img> que tenga el nombre o que contenga camiseta
  // ! También se puede hacer con :contains
  $("img[src*='camiseta']").css({
    "border-color": "green",
    "border-style": "solid",
    "border-width": "1px"
  })
})