import React, { useEffect } from 'react'
import { TarjetaProductoDummy } from '../../../components/TarjetaProductoDummy'
import { useRouter } from 'next/navigation'




export const DummyJsonPage = async() => {
    
    const {product} = await obtenerProductosDummyJson()

    useEffect(() => {
        
    },[])
  return <div>
    <h1>PRODUCTOS DMMY JSON API</h1>
    {products.map(product => (
    <TarjetaProductoDummy product = {product}/>
    
  ))}
  </div>
}
