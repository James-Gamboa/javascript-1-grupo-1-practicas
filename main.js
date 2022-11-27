// Ejercicio 1:
// Escriba un programa que imprima, utilizando ciclos, un cuadrado de 10x10
// caracteres, formado por 2 triángulos, uno con el carácter '#' y el otro con el carácter
// '*':
// **********
// *********#
// ********##
// *******###
// ******####
// *****#####
// ****######
// ***#######
// **########
// *#########
function ej1(){
  for (let i = 1; i <= 10; i++) {
    let triangulo = "";
    for (let j = 1; j <= 10; j++) {
      if (i >= j) {
        triangulo += "#";
      } else {
        triangulo += "*";
      }
    }
    console.log(triangulo);
  }
}
// Ejercicio 2:
// Escriba una función que calcule el valor de un número N elevado por otro número
// M. (La función debe de recibir ambos parámetros).
function ej2 (N,M) {
  let resultado = Math.pow(N,M);
  return resultado;
  }
  console.log(ej2(7,2));
// Ejercicio 3:
// Escriba una función que resuelve el problema del ejercicio anterior de manera
// recursiva.
function ej3(N,M){
  if (M == 0){
      return 1;
  }
  else {
      return N * ej3(N,M-1);
  }
}
console.log(ej3(5,3));

// Ejercicio 4:
// Escriba una función recursiva que reciba un arreglo y calcule la suma de sus
// elementos.
function ej4(arreglo) {
  if (arreglo.length === 0) {
    return 0;
  }
  return arreglo[0] + ej4(arreglo.slice(1));
}
console.log(ej4([2,3,4]));

function main (){
  ej1()
  // @ts-ignore
  ej2(N,M)
  // @ts-ignore
  ej3(N,M)
  // @ts-ignore
  ej4(arreglo);
}
main ()