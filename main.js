//2. Escribir tres maneras de accederlos por clase, id y selector.
//obtiene  el  elemento  de una clase específica
document.getElementsByClassName("elemento3");
//obtiene  el  elemento  de un id específica
document.getElementById("elemento2");
//regresa  el primer elemento que cumpla con el selector que le hemos indicado
document.querySelector(".elemento1");
//3. Crear un elemento nuevo con texto.
//esto nos permite crear nuevo elemento HTML en el DOM en este caso creamos un nuevo div
document.createElement("div");
//desto nos permite asignarle contenido al elemento que acabamos de crear
document.createTextNode("text");
//4. Remover la clase de un elemento y agregarle una clase nueva.
// @ts-ignore
// primero seleccionamos el elemento que deseamos borrar y luego de esto elimina la clase “elemento2” del elemento
document.getElementById("elemento2").classList.remove("elemento2");
// @ts-ignore
//despues de eliminar el elemnto que seleccionamos luego de esto creamos la nueva clase “nuevo-elemento2” del elemento
document.getElementById("elemento2").classList.add("nuevo-elemento2");