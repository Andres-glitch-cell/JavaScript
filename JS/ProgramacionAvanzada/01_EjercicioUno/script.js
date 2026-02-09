/* ==============================
📌 Atajos personalizados de Andres 📌 
   ==============================
for       = andresfor
while     = andreswhile
do while  = andresdo
if        = andresif
else      = andreselse
else if   = andreselseif
switch    = andresswitch
alerta    = andresalert
funcion   = funcionclasica
flecha 1L = funcionflechaUnaLineaCodigo
flecha ML = funcionflechaMuchasLineasCodigo
   ============================== */

/*
Escribir un programa que almacene la cadena de caracteres contraseña en una variable, 
pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta. 
utilizando el while. La primera vez que introduces la contraseña utilizaremos el metodo 
confirm(), para decir que estamos de acuerdo con la contraseña, en caso contrario, nos 
pedirá la nueva contraseña.
*/

// Variables Creadas
let contraseñaUsuarioEscrita = "";
let verificarContraseña = "";

do {
    contraseñaUsuarioEscrita = prompt("Introduce la contraseña:");
    if (!contraseñaUsuarioEscrita || contraseñaUsuarioEscrita.trim() === "") {
        alert("No has introducido ninguna contraseña, vuelve al principio e introduce una.");
        continue; // vuelve al inicio del bucle
    }
    if (!confirm("¿Quieres continuar?")) {
        alert("Volviendo al principio...");
        continue; // vuelve al inicio del bucle
    }
    verificarContraseña = prompt("Vuelve a introducir tu contraseña:");
    if (contraseñaUsuarioEscrita === verificarContraseña) {
        alert("Las contraseñas coinciden, felicidades has acabado el script!");
        break; // termina el bucle
    } else {
        alert("No coinciden. Vuelve a intentarlo.");
    }
} while (true);




