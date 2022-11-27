//Ejercicio 1

let edadElena = 50;
let edadLucia = edadElena / 3;
console.log(edadLucia);

//Ejercicio 2
let año1 = 2000;
let año2 = 2040;
let calcular;

if (año1 >= 2000 && año2 > año1) {
  calcular = año2 - año1
  console.log(calcular)
}else if(año1 < 2022){
  console.log("no puede ingresar un valor menor a dicho año para hacer el cálculo de la edad");
}

//Ejercicio 3
let añodematrimonio = 1970;
let edadAbuelo = 25;
let edadActual = 2022 - añodematrimonio + edadAbuelo;
console.log(edadActual);

//Ejercicio 4
function convertirCelsiusAFahrenheit (celsius) {
  let resultado = celsius * 9 /5.0 + 32;
  return resultado;
}
function convertirFahrenheitACelsius (fahrenheit) { 
  let resultado = (fahrenheit - 32) * 5 / 9.0;
  return resultado;
  }

let celsius = 32;
let resultado = convertirCelsiusAFahrenheit (celsius) ;
console.log (`${celsius} °C = ${resultado }°F`);

console.log ();

let fahrenheit = resultado;
resultado = convertirFahrenheitACelsius (fahrenheit);
console.log(`${fahrenheit}°F = ${resultado}°C`);

//Ejercicio 5
let producto = "Patatas";
let cantidad = 12;
let precio = 85;
let descuento1 = precio * 0.10;
let descuento2 = precio * 0.20;

if (cantidad == 3){
console.log("producto:",producto, "cantidad:",cantidad, "subtotal:",precio, "descuento del 10%", "total:",descuento1 );
}
else if (cantidad >= 5){
  console.log("producto:",producto, "cantidad:",cantidad, "subtotal:",precio, "descuento del 20%", "total:",descuento2);
}
//Ejercicio 6
let parcial = 90 ;
let parcial2 = 70;
let parcialfinal = 70;


let  nota = 100 / 25 * parcial;
let  nota2 = 100 / 35 * parcial2;
let  notafinal = 100 / 40 * parcialfinal;

const promedio = parcial + parcial + parcialfinal;

if ( promedio >= 59 && promedio <= 70){
  console.log("ampliación");
}else if (promedio <= 60){
 console.log ("reprueba el curso");
}else if (promedio > 70 && nota < 50 || nota2 < 50 || notafinal < 50 ){
  console.log ("ampliación por un examen de 50");
}else (promedio >= 71 && promedio <= 100); {
   console.log ("paso el curso");
}
