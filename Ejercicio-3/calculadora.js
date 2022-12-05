// En archivos aparte a las dos respuestas anteriores, escriba el HTML necesario para
// realizar una calculadora que pueda sumar, restar, multiplicar, dividir. La
// página(HTML) debe de mostrar dos campos de texto donde el usuario pueda
// escribir dos números de entrada y un botón para cada operación que se ejecute al
// hacer click. El número de resultado se puede mostrar en la página(HTML)
// o por medio de la consola/alerta.
// Nota: No es necesario aplicar ningún tipo de estilos(CSS).

function sumar() {
  // @ts-ignore
  let primerNumero = document.getElementById("primerNumero").value;
  // @ts-ignore
  let segundoNumero = document.getElementById("segundoNumero").value;
  let resultado = parseFloat(primerNumero) + parseFloat(segundoNumero);
  // @ts-ignore
  document.getElementById("resultado").innerHTML = resultado;
}

function restar() {
  // @ts-ignore
  let primerNumero = document.getElementById("primerNumero").value;
  // @ts-ignore
  let segundoNumero = document.getElementById("segundoNumero").value;
  let resultado = parseFloat(primerNumero) - parseFloat(segundoNumero);
  // @ts-ignore
  document.getElementById("resultado").innerHTML = resultado;
}

function multiplicar() {
  // @ts-ignore
  let primerNumero = document.getElementById("primerNumero").value;
  // @ts-ignore
  let segundoNumero = document.getElementById("segundoNumero").value;
  let resultado = parseFloat(primerNumero) * parseFloat(segundoNumero);
  // @ts-ignore
  document.getElementById("resultado").innerHTML = resultado;
}

function dividir() {
  // @ts-ignore
  let primerNumero = document.getElementById("primerNumero").value;
  // @ts-ignore
  let segundoNumero = document.getElementById("segundoNumero").value;
  let resultado = parseFloat(primerNumero) / parseFloat(segundoNumero);
  // @ts-ignore
  document.getElementById("resultado").innerHTML = resultado;
}
