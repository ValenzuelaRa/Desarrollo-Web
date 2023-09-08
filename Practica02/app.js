const usuario = document.getElementById('usuario')
const contraseña = document.getElementById('contraseña')
const formulario = document.getElementById('formulario')
const error_usuario = document.getElementById('error_usuario')
const error_contraseña = document.getElementById('error_contraseña')
const check = document.getElementById('check')

formulario.addEventListener('submit', (e) => {
  let hayErrores = false

  if (usuario.value === '' || usuario.value == null) {
    error_usuario.style.display = "block"
    hayErrores = true
  } else {
    error_usuario.style.display = "none"
  }

  if (!/(?=.*?[A-Z])(?=.*?[0-9])/.test(contraseña.value)) {
    error_contraseña.style.display = "block"
    hayErrores = true
  } else {
    error_contraseña.style.display = "none"
  }

  if (!hayErrores) {
    // No hay errores, muestra una alerta de éxito
    alert("Formulario enviado con éxito.");
  } else {
    e.preventDefault(); // Evita que se envíe el formulario si hay errores
  }


})
