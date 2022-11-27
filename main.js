// Ejercicio 1:
// Escriba un programa que solicite un número al usuario e imprima en la consola si el
// número es primo (solo divisible entre 1 y él mismo) o no.
const numero = prompt("Ingrese un número");
let contador = 0;

// @ts-ignore
for (let i = 1; i <= numero; i++) {
  // @ts-ignore
  if (numero % i === 0) {
    contador++;
  }
}

if (contador == 2) {
  console.log("El número " + numero + " es primo");
} else {
  console.log(
    "El número " + numero + " no es primo porque se divide entre: " + contador
  );
}

// Ejercicio 2:
// Escriba un programa que permita encontrar las soluciones de una ecuación
// cuadrática:
// Implemente detección de errores para verificar que el usuario introduzca valores
// correctos
// para a, b y c. Además, debe detectarse el caso en el que la ecuación no tiene
// soluciones
// (cuando b ac 0 ) y notificarlo al usuario.
let a = prompt("Ingrese valor para a");
let b = prompt("Ingrese valor para b");
let c = prompt("Ingrese valor para c");

// @ts-ignore
if (a === 0) {
    console.log("a debe ser diferente de 0");
// @ts-ignore
} else if (b === 0 && c === 0) {
    console.log("La ecuación no tiene soluciónes");
// @ts-ignore
} else if (b === 0) {
    console.log("La ecuación no tiene soluciónes");
// @ts-ignore
} else if (c === 0) {
    console.log("La ecuación no tiene soluciónes");
} else {
    // @ts-ignore
    let discriminante = (b + Math.sqrt(Math.pow(b, 2) + (4 * a * c))) / (2 * a);
    // @ts-ignore
    let cuadratica  = -(b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    console.log(discriminante);
    console.log(cuadratica );
}

// Ejercicio 3:
// Escriba un programa que imprima todos los números del 1 al 100, uno por línea.
for (var i = 1; i <= 100; i++) {
  console.log(i);
}
// Ejercicio 4:
// Modifique el programa anterior para que sólo imprima los números pares.
for (var i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Ejercicio 5:
// Modifique el programa del ejercicio 4 para que imprima 10 números por línea,
// separados por
// un espacio. La primera línea tendrá los números del 1 al 10, la segunda del 11 al 20,
// la tercera
// del 21 al 30 y así hasta llegar a 100.
for (var i = 1; i <= 100; i++) {
  console.log(i);

  if (i % 10 === 0) {
      console.log("");
  }
}