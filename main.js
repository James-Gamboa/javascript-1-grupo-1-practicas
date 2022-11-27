// Escriba un programa que solicite al usuario una lista de números y que, a partir de ellos,
// calcule e imprima en la consola los siguientes valores estadísticos:
// - Promedio
// - Mediana
// - Valor mínimo
// - Valor máximo
// El programa debe solicitar números al usuario y almacenarlos en un array. El programa
// continuará solicitando números hasta que el usuario ingrese un string vacío. Cuando esto
// ocurra se calcularán e imprimirán los resultados.
// Si el usuario ingresa algún valor que no sea un número, este será ignorado y no se
// agregará al array.

let numbers = [];
function validarDatos() {
  while (true) {
    let validacion = prompt('Por Favor Ingrese Un Numero')
    if (validacion === "") {
      alert('Es String Vacio');
      break;
    } else {
      alert('Es Un Numero');
      // @ts-ignore
      numbers.push(parseInt(validacion));
    }
  }
}
validarDatos()

function minimo() {
  let arrMin = Math.min(...numbers);
  return arrMin;
}

function maximo() {
  let arrMax = Math.max(...numbers);
  return arrMax;
}


function promedio() {
  let sum = 0;
  // @ts-ignore
  for (i = 0; i < numbers.length; i++) {
    // @ts-ignore
    sum += numbers[i];
  }
  return sum / numbers.length;
}

function mediana() {
  if (numbers.length % 2 === 0) {
    let medio1 = Math.floor(numbers.length / 2);
    return ((numbers[medio1 - 1] + numbers[medio1]) / 2).toFixed(2);
  } else {
    let medio2 = Math.floor((numbers.length + 1) / 2);
    return numbers[medio2 - 1].toFixed(2);
  }
}
console.log("su valor maximo es " +  maximo());
console.log("su valor minimo es " +  minimo());
console.log("promedio es: " + promedio());
console.log("mediana es: " + mediana());