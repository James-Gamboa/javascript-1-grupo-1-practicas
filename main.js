//Escriba un programa que convierta un //número dado a horas y minutos. Ej 220 = 3 //horas y 40 minutes
let numero = prompt("ingrese numero en minutos");
function convertirHoras(numero){
  // @ts-ignore
  let horas = parseInt(numero / 60);
  let minutos = numero % 60;
  return horas + " horas " + minutos + " minutos ";
}

console.log(convertirHoras(numero));