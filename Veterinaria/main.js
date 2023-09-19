import Header from "./components/Header";
import Formulario from "./components/Formulario";
import "./style.css"

const veterianria ={
  titulo: 'Veterinaria',
}

document.body.appendChild(Header(veterianria));
document.body.appendChild(Formulario());
