/*Ejercicio 1:
Escriba un programa que solicite un número al usuario e indique si es:
● Par o impar
● Divisible entre 3
● Divisible entre 5*/

// @ts-ignore
let numero = prompt("digite su numero");
{
  // @ts-ignore
  if (numero % 2 === 0) {
    console.log("par");
    // @ts-ignore
  } else if (numero % 2 === 1) console.log("impar");
}
// @ts-ignore
if (numero % 3 === 0) {
  console.log("divisible entre tres");
  // @ts-ignore
} else if (numero % 5 === 0) {
  console.log("divisible entre cinco");
}

/*Ejercicio 2:
Escriba un programa que solicite al usuario un número e imprima la suma de todos
los números desde 1 hasta ese número.*/
let valor = prompt("Ingrese un numero");
let suma = 0;
// @ts-ignore
for (let i = 1; i <= valor; i++) {
  suma = suma + i;
}
console.log(suma);
/* 
Ejercicio 3:
Escribe un programa que reciba un string y retorne el mismo string invertido. Utilice
un while para resolver este ejercicio. hola → aloh
*/
while (true) {
function invertir(str) {
    let nuevastring = "";
    for (let i = str.length - 1; i >= 0; i--) {
    nuevastring += str[i];
    }
    return nuevastring;
}
break;
}
// @ts-ignore
const string = prompt("ingrese una palabra: ");
// @ts-ignore
const resultado = invertir(string);
console.log(resultado);

/* Ejercicio 4:
Escriba un programa que reciba una frase y este debe de intercambiar las vocales
por la ‘i’. Ej, “esta es la entrada” → “isti is li intridi”. */

const remplazar = {
  a: 'i', e: 'i', i:'i', o: 'i', u: 'i',
  A: 'I', E: 'I', I:'I', O: 'I', U: 'I'
}

const cambiarvocales = (string) => {
  return string.replace(/[aeiou]/gi, match => remplazar[match])
}
console.log(cambiarvocales("esta es la entrada"));
/* ingresar datos por la consola*/

/*
Ejercicio 5:
Escriba un programa que reciba una palabra y reordene sus letras en orden
alfabético. Ej. hola → ahlo 
*/
function orden_alfabeto(str)
  {
return str.split('').sort().join('');
  }
console.log(orden_alfabeto("hola"));
/* ingresar datos por la consola*/