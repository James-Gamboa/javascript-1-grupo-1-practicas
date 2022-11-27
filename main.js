// Ejercicio 1
// Cree un programa que reciba como parámetro un array de números, y verifique la lista de manera que retorne el número mayor
let numero = [10,20,30,40,50,65];
let mayor = 0;
// @ts-ignore
for (i = 0; i < numero.length; i++) {
    // @ts-ignore
    if (numero[i] > mayor) {
        // @ts-ignore
        mayor = numero[i];
    }
}
console.log(mayor);

// Ejercicio 2
//Cree un programa que reciba como parámetro una palabra y verifique si dicha palabra es palíndromo, es decir, la palabra se lee igual de izquierda a 
//derecha o de derecha a izquierda, o no. Para la resolución de dicho problema debe utilizar ciclo for
  let arr = [];
function palindromo(string) {
  for (let i = string.length - 1; i >= 0; i--) {
    arr.push(string[i]);
  }
  const invert = arr.join("");
  if (invert === string) {
    return "Si es palindromo";
  } else {
    return "No es palindromo";
  }
}
console.log(palindromo("reconocer"));
//ingresar datos ala consola para saber  si es palindromo o no 

// Ejercicio 3
// Dada la siguiente matriz [ [1,0,0], [0,1,1], [0,1,0] ], haga un programa que cuente e imprima la cantidad de ceros totales en dicha matriz. Debe utilizar ciclos for
function sumar() {
  const matriz = [ [1, 0, 0], [0, 1, 1],[0, 1, 0],];
  let contador = 0;
  for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
          if (matriz[i][j] == 0) {
              contador = contador + 1
          }
      }
  }
  return "Los ceros en total son:" + contador
}
console.log(sumar());

// Ejercicio 4
//Cree un programa que reciba un array de números, verifique cuáles números están repetidos y retorne un array con dichos números(los que estan 
//duplicados), si no hay números repetidos en el array debe retornar el
//siguiente mensaje: “No se encontraron números repetidos en la lista de números recibida”.Debe usar un ciclo for.
const numeros = [1,15,2,3,4,8,7,5,15,9,8,1];
function repetidos(array) {
  let contador = [], number = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        contador.push(array[i])
        number = 1;
      }
    }
  }
  if (number === 0) {
    return "No se encontraron números repetidos en la lista de números recibida";
  } else {
    return contador;
  }
}
console.log(repetidos(numeros));

// Ejercicio 5
// Haga un programa que reciba un parámetro numérico x, el cual debe ser  mayor o igual a 5, y que imprima un patrón, que simule un triángulo de
// asteriscos, como el siguiente. Debe utilizar ciclos for para la solución del  problema.
for(let i = 1; i<= 10; ++i) {
  let resultado = " ";
  for(let x = 1; x <= i; ++x){
    resultado += " * " ;
  }
  console.log(resultado)
}