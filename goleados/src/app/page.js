import React from 'react'

async function obtenerFutbolistas(){
 const futbolistas = await fetch('')
 return futbolistas.json()
}

const page = async() => {
  const data = await obtenerFutbolistas
  return (
    <main>
      {data.map(futbolistas)}
    </main>
  )
}

export default page