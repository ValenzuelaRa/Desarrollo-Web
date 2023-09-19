import CustomInput from "./CustomInput"




export default function Formulario(){

    function enviarDatos(e) {
        e.preventDefault()
        const { nombre, propietario, telefono, sintomas } = inputs.reduce((values, input) => {
            values[input.idlabel] = document.querySelector(`input[id="${input.idlabel}"]`).value;
            return values;
          }, {});
        const resultadoTexto = `Nombre: ${nombre}\nPropietario: ${propietario}\nTelefono: ${telefono}\nSintomas: ${sintomas}`;
        resultado.innerText = resultadoTexto;
    }


    const form = document.createElement('form')
    const resultado = document.createElement('div')
    const inputs=[
        {
            idlabel:'nombre', 
            labelTitle:'Nombre Paciente', 
            placeholderlabel:'Nombre Paciente'
        },
        {
            idlabel:'propietario', 
            labelTitle:'Nombre Propietario', 
            placeholderlabel:'Nombre Propietario'
        },
        {
            idlabel:'telefono', 
            labelTitle:'Telefono', 
            placeholderlabel:'Telefono del propietario'
        },
        {
            idlabel:'sintomas', 
            labelTitle:'Sintomas', 
            placeholderlabel:'Sintomas'
        }
    ];
    
    inputs.forEach(input => {
        const customInput = CustomInput(input)
        form.appendChild(customInput)
    })

    const button = document.createElement('button')
    button.textContent = 'Enviar'
    button.addEventListener('click', enviarDatos)
    
    form.appendChild(button)
    form.appendChild(resultado)
    return form
}