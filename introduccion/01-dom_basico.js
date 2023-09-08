/**
 * Usando el DOM API (Document Object Model)
 */

//Forma 1
// document.getElementById("parrafo").textContent = "Xenia Padilla";

//Forma 2
var parrafo = document.getElementById("parrafo");
parrafo.textContent = "Aprendiendo JavaScript DOM API";

/**
 * Creando elementos desde JavaScript a HTML
 */

var elemento = document.createElement("p");
elemento.textContent = "Creando elementos";
document.body.appendChild(elemento);
