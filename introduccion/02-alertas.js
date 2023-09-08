/**
 * Usando alertas básicas
 */

var mensaje = "Soy una alerta";

window.alert(mensaje);
console.log("continua el código....");

/**
 * Para obtener datos del usuario
 * prompt( text, [default]);
 */

var edad = prompt("¿Cuántos años tienes");
console.log(edad);

/**
 * Usar un modal para confirmar
 */

var resultado = window.confirm("Estudias");

if (resultado) {
  window.alert("Felicidades");
} else {
  window.alert("😫");
}
