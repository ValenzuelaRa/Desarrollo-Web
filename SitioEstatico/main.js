import './style.css';
import { apiData } from './helper/data'; 
import Card from './components/Card';
import Header from './components/Header';

const empresa = {
  titulo: 'Agronomo Baja',
  giro: 'Agricultura',
};

const h2 = document.createElement('h2');
h2.textContent = 'Nuestro Equipo';

document.body.appendChild(Header(empresa));
document.body.appendChild(h2);

const main = document.createElement('main');

apiData.forEach((employeeData) => {
  main.appendChild(Card(employeeData));
});

document.body.appendChild(main);
