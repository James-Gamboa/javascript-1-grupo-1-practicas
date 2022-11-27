//Ejercicio 1:
//Escriba un programa que calcule el factorial de un número de manera recursiva.
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5));
// ingresar datos por la consola

// Ejercicio 2:
// Un año es bisiesto si es divisible entre 4 pero no entre 100, excepto si es divisible entre
// 400. Por ejemplo, 1996 es bisiesto (divisible entre 4), 1900 no lo es (divisible entre 100)
// y 2000 sí lo es (divisible entre 400).
// Escriba un programa que solicite al usuario un año y le indique si es bisiesto o no.
let anio;
function Bisiesto(anio){
	if(anio%4==0 && (anio%100!=0 || anio%400==0)){
		return true;
	}
	else{
		return false;
	}
}
// Ejercicio 3:
// Escriba un programa que solicite al usuario un texto y un carácter y le indique al
// usuario cuántas veces aparece en el texto ese carácter.
let texto = prompt("Introduce un texto");
let caracter = prompt("Introduce un caracter");
// @ts-ignore
let contador = 0;

// @ts-ignore
for (let i = 0; i < texto.length; i++) {
  // @ts-ignore
  const element = texto[i];
  if(element == caracter){
    contador++;
  }
}
console.log("El caracter " + caracter + " aparece " + contador + " veces en el texto");
// Ejercicio 4:
// Escriba un programa que le solicite al usuario adivinar un número “secreto” del 1 al
// 100. El programa debe continuar preguntando por nuevos números al usuario hasta
// que lo adivine o ingrese un cero para salir. El programa debe indicar, cada vez que el
// usuario falle, si el número ingresado es mayor o menor que el número a adivinar.

let numSecreto = Math.round(Math.random() * (100 - 1) + 1);
// @ts-ignore
let contador = 0;
let num = prompt("Ingrese un número del 1 al 100:");

// @ts-ignore
while (num != numSecreto && num != 0) {
    // @ts-ignore
    if (num > numSecreto) {
        num = prompt("Numero ingresado es mayor al numero a adivinar");
    } else {
        num = prompt("Numero ingresado es  menor al numero a adivinar");
    }
    contador++;
}
if (num == 0) {
    alert("Saliendo del juego");
} else {
    alert("Felicitaciones, adivinaste el número secreto. Lo hiciste en " + contador + " intentos");
}
// Ejercicio 5:
// Escriba un programa que solicite un texto y lo imprima en la consola con todos los
// espacios en blanco removidos. Por ejemplo, si el usuario introduce “May the force be
// with you”, el programa debe retornar “Maytheforcebewithyou”.
// Ejercicio 5
let text=prompt("Ingrese un texto que desea unir");
// @ts-ignore
alert(text.replace(/\s/g,''));

function main(){
  // @ts-ignore
  // @ts-ignore
  anio = parseInt(prompt("Ingrese un año"));
	if(Bisiesto(anio)){
		alert(anio + " es bisiesto");
	}
	else{
		alert(anio + " no es bisiesto");
	}
}

main();