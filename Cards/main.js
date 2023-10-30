Claro, puedo mostrarte un ejemplo básico de una función en React para agregar elementos a una lista. Primero, asegúrate de tener React instalado en tu proyecto. Luego, puedes crear un componente funcional en React para manejar la lista de la siguiente manera:

```jsx
import React, { useState } from 'react';

const Lista = () => {
  const [items, setItems] = useState([]); // Estado para almacenar los elementos de la lista
  const [nuevoItem, setNuevoItem] = useState(''); // Estado para almacenar el nuevo elemento

  const agregarItem = () => {
    if (nuevoItem.trim() !== '') {
      setItems([...items, nuevoItem]); // Agrega el nuevo elemento a la lista
      setNuevoItem(''); // Limpia el campo de entrada después de agregar el elemento
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nuevoItem}
        onChange={(e) => setNuevoItem(e.target.value)}
      />
      <button onClick={agregarItem}>Agregar</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
```

En este ejemplo, `useState` se utiliza para manejar el estado de la lista (`items`) y el nuevo elemento que se va a agregar (`nuevoItem`). Cuando el usuario ingresa un nuevo elemento en el campo de entrada y hace clic en el botón "Agregar", se llama a la función `agregarItem`, que agrega el nuevo elemento a la lista utilizando el operador spread (`...`). La lista se representa como elementos de lista (`<li>`) en el componente.

Este componente `Lista` puede ser utilizado en otro componente principal o en cualquier parte de tu aplicación de React para mostrar y agregar elementos a una lista. Recuerda que este es un ejemplo básico y puede ser extendido según tus necesidades específicas. './style.css'
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