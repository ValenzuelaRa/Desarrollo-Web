'use client';

import { Popover, Transition } from '@headlessui/react'
import React from 'react'
import { BiMenuAltLeft } from 'react-icons/bi';

const NavbarHorizontal = () => {
  return (
    <header>
    <Popover className=''>
    <Popover.Button><BiMenuAltLeft /></Popover.Button>
    <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
    <Transition 
    enter='transition-opacity '
    />

    
    <Popover.Panel className='absolute z-10'>
        <nav>
            <div>INICIO</div>
            <div>PRODUCTOS</div>
            <div>BLOG</div>
            <div>NOSOTROS</div>
        </nav>
        </Popover.Panel>
    </Popover>
    </header>
  )
}

export default NavbarHorizontal