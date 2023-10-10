"use client";

import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [estatura, setEstatura] = useState('');
  const [peso, setPeso] = useState('');
  const [bmi, setBmi] = useState(0);
  const [error, setError] = useState(false)

  const handleFormulario = (e) => {
    e.preventDefault();
    if([peso.trim(), estatura.trim(), nombre.trim()].includes('')){
        setError(true)
        return
    }
    
    let bmi = peso / Math.pow(estatura / 100, 2);
    console.log(bmi);
    setBmi(bmi);
    setError(false)
    return
  };

  return (
    <div className="flex justify-center">
      <form
        action=""
        className="flex flex-col space-y-10 justify-center p-3 m-[5%] border border-solid border-cyan-950 rounded-md bg-slate-100 shadow-md px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        {error && <div className="bg-red-500 p-5 border border-solid rounded-md text-white text-center">Error Campos sin llenar</div>}
        <div className="flex flex-col">
          <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
            Nombre
          </label>

          <input
            type="text"
            id="nombre"
            placeholder="Nombre"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="estatura" className="block text-gray-700 text-sm font-bold mb-2">
            Estatura
          </label>
          <input
            type="text"
            id="estatura"
            placeholder="Estatura"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setEstatura(e.target.value)}
            value={estatura}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="peso" className="block text-gray-700 text-sm font-bold mb-2">
            Peso
          </label>

          <input
            type="text"
            id="peso"
            placeholder="Peso"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPeso(e.target.value)}
            value={peso}
          />
        </div>

        <button
          className="bg-neutral-900 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit" // Cambiado a "submit" para enviar el formulario
          onClick={handleFormulario}
        >
          Enviar
        </button>
        {bmi === 0 ? (
        ""
      ): <section className="flex justify-center">
      <p className="text-xl text-gray-700 font-bold mb-2">Resultado: {bmi.toFixed(2)}</p>
    </section>}
      </form>
      
      
    </div>
  );
}

export default Formulario;
