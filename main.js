//2. Escribir tres maneras de accederlos por clase, id y selector.
document.getElementsByClassName("elemento3");
document.getElementById("elemento2");
document.querySelector(".elemento1");
//3. Crear un elemento nuevo con texto.
document.createElement("div");
document.createTextNode("text");
//4. Remover la clase de un elemento y agregarle una clase nueva.
    // @ts-ignore
    document.getElementById("elemento2").classList.remove("elemento2");
    // @ts-ignore
    document.getElementById("elemento2").classList.add("nuevo-elemento2");