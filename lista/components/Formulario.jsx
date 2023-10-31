"use Client";
import React, { useState } from 'react';
const Formulario = () => 
{  
    const [inputValue, setInputValue] = useState('');  
    const [elementos, setElementos] = useState([]);
  const handleInputChange = (e) => {    setInputValue(e.target.value);  };
  const agregarElemento = () => {    if (inputValue.trim() !== '') {      setElementos([...elementos, inputValue]);      setInputValue('');    }  };
  return (
<div>
    <input
    type="text"
    value={inputValue}
    onChange={handleInputChange}
    placeholder="Ingresa un elemento"/>
    <button onClick={agregarElemento}>Agregar</button>
    <ul>{elementos.map((elemento, index) => (<li key={index}>{elemento}</li>))}
    </ul>
    </div>);};
export default Formulario;