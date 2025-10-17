const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("¿Cómo te llamas? ", (nombre) => {
  console.log(`Hola, ${nombre}`);

  rl.question("¿Cuántos años tienes? ", (edad) => {
    console.log(`Tienes ${edad} años.`);
    rl.close();
  });
});