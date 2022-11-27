/*Ejercicio 1: Escriba una función que reciba un numero y retorne el factorial de ese número: Ej. 5 -> 120. El factorial se calcula multiplicando todos los numero entre la entrada y 1 */

function factorialize(num) {
  let resultado = num 
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    resultado  = resultado * i; 
  }
  return resultado;
}
console.log(factorialize(5));


/* Ejercicio 2: Escriba una función que reciba un numero y retorne el factorial de ese número: Ej. 5 -> 120. El factorial se calcula multiplicando todos los numero entre la entrada y 1. Debe de resolverse con una funcion recursiva*/
function fibonacciRecursivo(n){
  if (n <= 1){
      return 1;
  }
  else{
      return n * fibonacciRecursivo(n-1);
  }
}
console.log(fibonacciRecursivo(5));


/* Ejercicio 3: Escriba una funcion que reciba un numero y de manera recursiva retorne un string especificando si el numero es par o impar. Para este caso no es posible utilizar / o %.*/
function imparOPar (number) {
  if (number === 0) {
      return 'Par';
  } else if (number === 1) {
      return 'Impar';
  } else {
      return imparOPar(number - 2);
  }
};
console.log(imparOPar(18));
console.log(imparOPar(45));