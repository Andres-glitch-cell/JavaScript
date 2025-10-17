# ⚡ JavaScript desde Cero — Aprende, Practica y Domina ⚡

<p align="center">
  <img src="https://raw.githubusercontent.com/Andres-glitch-cell/JavaScript/main/assets/js-banner.png" alt="JavaScript Banner" width="100%" style="border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.2);" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/languages/top/Andres-glitch-cell/JavaScript?color=yellow&logo=javascript&style=for-the-badge" alt="Top Language" style="margin-right: 10px;"/>
  <img src="https://img.shields.io/github/last-commit/Andres-glitch-cell/JavaScript?style=for-the-badge" alt="Last Commit" style="margin-right: 10px;"/>
  <img src="https://img.shields.io/github/stars/Andres-glitch-cell/JavaScript?style=for-the-badge&color=brightgreen" alt="Stars" style="margin-right: 10px;"/>
  <img src="https://img.shields.io/github/license/Andres-glitch-cell/JavaScript?style=for-the-badge" alt="License" />
</p>

---

## 🚀 ¿Qué es este proyecto?

**JavaScript desde Cero** es la guía definitiva para todos los que quieren dominar el lenguaje más poderoso del desarrollo web sin complicaciones ni vueltas raras.

Aquí vas a aprender desde los fundamentos que nadie te explica bien, hasta técnicas modernas que usan las grandes empresas. Todo explicado claro, con ejemplos que funcionan, ejercicios que realmente valen la pena y mini proyectos que vas a querer presumir.

Ya basta de leer teoría aburrida, aquí se aprende haciendo y entendiendo. Esta guía es para:

- Novatos que se sienten perdidos y quieren una ruta clara  
- Programadores que quieren mejorar su nivel y pulir sus skills  
- Gente que quiere preparar entrevistas técnicas y petar la entrevista  
- Cualquier persona con ganas de entender JavaScript y no solo copiar y pegar  

---

## 🧠 ¿Por qué JavaScript?

Porque **JavaScript es la columna vertebral del desarrollo web moderno**. Es el lenguaje que mueve desde sitios simples hasta apps complejas, juegos, APIs, bots, y mucho más.

Aprender JavaScript no solo te abre puertas a frontend (navegadores) sino también backend con Node.js, desarrollo móvil, e incluso machine learning.

No es solo aprender un lenguaje, es meterte en un universo lleno de posibilidades infinitas.

---

## ✨ ¿Qué vas a aprender aquí?

1. **Bases sólidas**  
   Variables, tipos de datos, operadores, estructuras de control, funciones y objetos. Todo explicado para que entiendas qué pasa "bajo el capó".

2. **Programación orientada a objetos (POO)**  
   Prototipos, clases, herencia, encapsulación y polimorfismo en JS — explicado con ejemplos reales para que no suene a chino.

3. **Funciones avanzadas**  
   Closures, callbacks, currying, funciones puras y funciones de orden superior.

4. **Asincronía sin miedo**  
   Eventos, callbacks, promesas, async/await y cómo manejar todo eso sin volverte loco.

5. **Manipulación del DOM**  
   Cómo usar JavaScript para modificar páginas web en tiempo real, crear animaciones y hacer la experiencia del usuario única.

6. **Eventos y manejo de formularios**  
   Captura eventos, valida inputs y crea interfaces interactivas.

7. **Modularización y buenas prácticas**  
   Cómo organizar tu código para que sea fácil de mantener, reutilizable y escalable.

8. **Herramientas del desarrollador**  
   Uso de consola, depuración, testing básico, y configuración de entornos de desarrollo.

9. **Mini proyectos**  
   Apps reales como To-Do List, juegos simples, calculadoras y más, para aplicar lo que aprendes desde el día uno.

10. **Preparación para frameworks y librerías**  
    Fundamentos que necesitas para entender React, Vue, Angular, Node.js y más.

---

## 💡 Conceptos clave en JavaScript que dominarás

### Variables y tipos de datos  
Saber cuándo usar `var`, `let` o `const`. Tipos primitivos vs objetos, coerción de tipos, y por qué JavaScript puede ser tanto tu mejor amigo como tu peor enemigo.

### Scope y Hoisting  
Comprende qué variables están disponibles dónde y cómo funciona la elevación de declaraciones en JS.

### Prototipos y herencia prototípica  
Entiende cómo JavaScript implementa herencia, y no solo copias la sintaxis de las clases modernas.

### Closures  
Uno de los conceptos más poderosos y confusos que te permitirá crear funciones con memoria.

### Asincronía y event loop  
Aprende qué demonios pasa cuando haces peticiones, escuchas eventos o usas `setTimeout`, y cómo funciona el motor de JavaScript.

### Manejo de errores  
Try/catch y patrones para capturar errores sin que tu aplicación se caiga.

---

## 🔥 Ejemplo rápido — Closure explicado fácil

```js
function contador() {
  let cuenta = 0;
  return function() {
    cuenta++;
    console.log(cuenta);
  };
}

const cuentaIncrementada = contador();
cuentaIncrementada(); // 1
cuentaIncrementada(); // 2
cuentaIncrementada(); // 3
