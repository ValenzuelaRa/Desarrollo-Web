import React from 'react'
import { useRouter } from 'next/navigation'

export const TarjetaProductoDummy = ({pruduct}) => {
    const rutas = new useRouter()
  return (
    <div>
        <div>
            <p>{product.title}</p>
        </div>
        <button
        onClick={() => {
            console.log(product.id);
            rutas.push(`http://localhost.300/dummyjson${product.id}`)
        }}>
            Ver Mas
        </button>
    </div>
  )
}
