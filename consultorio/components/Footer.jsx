import React from 'react'
import { Moulpali } from 'next/font/google'

const MoulpaliFont = Moulpali({ subsets: ['latin'], weight: '400' })

function Footer({titleFooter}) {
  return (
    <footer className={`p-10 bg-slate-600 ${MoulpaliFont.className}`}>
        <h1 className='uppercase text-3xl text-center font-bold text-white'>{titleFooter}</h1>
    </footer>
    
  )
}

export default Footer