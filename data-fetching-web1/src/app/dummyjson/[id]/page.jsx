import React from 'react'


async function consultarDatosProducto(id){
    const response = await fetch('https://fakestoreapi.com/products')
    if(!response.ok) throw new Error('No se pudieron obetener los productos')
    return response.json()
  }

const page = ({params:{id}}) => {
    const data = consultarDatosProducto(id)
  return (
    <div>
        <h1>{data.title}</h1>
    </div>
  )
}

export default page