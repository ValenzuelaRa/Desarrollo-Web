import './style.css'
import {personas} from "./helper/data";
import card from "./components/Card"
import Header from "./components/header"

const empresa = {
  titulo: 'Manejo de sistemas Agrarios',
  giro: 'Agricultura'
}


document.body.appendChild(Header(empresa))
const main = document.createElement('main')



personas.forEach(persona => {
  main.appendChild(card(persona))  
});

document.body.appendChild(main)