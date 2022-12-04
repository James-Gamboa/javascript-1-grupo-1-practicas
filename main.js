// Ejercicio 1:
// Escriba un programa que reciba y genere una matriz del tamaño de la entrada y que
// contenga una X representada por medio de ‘x’.




// Ejercicio 2:
// Escriba un programa que reciba dos arreglos con elementos y verifique si ambos
// arreglos contienen los mismos elementos. Si ambos arreglos contienen lo mismo
// imprima: ‘Los arreglos son iguales’ o si no, imprima los elementos diferentes entre
// los dos arreglos.

function ej2(arreglo1, arreglo2) {
  let resultado = true;
  let elementosDiferentes = [];

  if (arreglo1.length === arreglo2.length) {
    for (let i = 0; i < arreglo1.length; i++) {
      if (arreglo1[i] !== arreglo2[i]) {
        resultado = false;
        elementosDiferentes.push(arreglo1[i]);
      }
    }
  } else {
    resultado = false;
  }

  if (resultado) {
    console.log("Los arreglos son iguales");
  } else {
    console.log(`Los elementos diferentes entre los dos arreglos son: ${elementosDiferentes}`);
  }
}


let arreglo1 = [6, 8, 7, 8, 9];
let arreglo2 = [1, 2, 3, 4, 5];

ej2(arreglo1, arreglo2);


function main (){
  // @ts-ignore
  ej1()
  // @ts-ignore
  ej2(N,M)
  // @ts-ignore
}
main ()