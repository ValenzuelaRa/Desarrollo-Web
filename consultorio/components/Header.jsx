import React from 'react'
import { Skranji } from 'next/font/google'

const fontSkranji = Skranji({ subsets: ['latin'], weight: '400' })

function Header({title}) {
  return (
    <header className={`p-10 bg-slate-600 ${fontSkranji.className}`}>
      <h1 className='uppercase text-3xl text-center font-bold'>{title}</h1>
      
    </header>
  )
}

export default Header