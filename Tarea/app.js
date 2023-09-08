// Funcion para convertir peso a dolar

function convertirPesoADolar(e) {
    e.preventDefault();
    let pesoConvertido = parseFloat(peso.value);
   
        let dolares = pesoConvertido / 16.79;
        res.textContent = `Los $${pesoConvertido} MXP a dolares son: $${dolares.toFixed(2)} DLLS`;
}

// Creacion de elementos asignados a una variable
const titulo = document.createElement('h1');
const peso = document.createElement('input');
const boton = document.createElement('button');
const res = document.createElement('p');

// Contenido del titulo
titulo.textContent = "Calculadora de Conversión MXP - DLLS";
// Conversion de la variable peso a numero, asi no se le asignan cadenas
peso.type = 'number';
// PlaceHolder para el input
peso.placeholder = 'Ingresa la cantidad en MXP';
// Texto para el boton
boton.innerText = "Convertir";

//Se muestran los elementos en el body
document.body.appendChild(titulo);
document.body.appendChild(peso);
document.body.appendChild(boton);
document.body.appendChild(res);

// Se le asigna un evento al boton para llamar la funcion
boton.addEventListener('click', convertirPesoADolar);