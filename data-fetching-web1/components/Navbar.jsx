'use client'
import { Popover, Transition } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';
import { BiMenuAltLeft } from 'react-icons/Bi';

export const NavbarHorizontal = () => {
    return (
      <header className='flex items-center justify-between px-4 h-200 sm:h-100 bg-teal-100'>
  
        <div className='hidden sm:block'>
          <Image 
            src={require('../assets/img/logo.png')}
            width={100}
            height={100}
          />
        </div>
  
  
        <div className='hidden sm:flex space-x-4'>
          <a href='#' className='text-black font-semibold p-4'>
            INICIO
          </a>
          <a href='#' className='text-black font-semibold p-4'>
            PRODUCTOS
          </a>
          <a href='#' className='text-black font-semibold p-4'>
            BLOG
          </a>
          <a href='#' className='text-black font-semibold p-4'>
            NOSOTROS
          </a>
        </div>
  
       
        <Popover className='sm:hidden'>
          <Popover.Button className={'text-5xl text-blue-500'}>
            <BiMenuAltLeft  />
          </Popover.Button>
          <Popover.Overlay className='fixed inset-0 bg-black opacity-30' />
          <Transition
            enter='transition-opacity duration-200'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            
              <Popover.Panel className='sm:hidden fixed w-2/3 bg-slate-200 p-4'>
                <nav className='flex flex-col space-y-4 p-4'>
                  <a href='#' className='text-black font-semibold hover:underline p-4'>
                    INICIO
                  </a>
                  <a href='#' className='text-black font-semibold hover:underline p-4'>
                    PRODUCTOS
                  </a>
                  <a href='#' className='text-black font-semibold hover:underline p-4'>
                    BLOG
                  </a>
                  <a href='#' className='text-black font-semibold hover:underline p-4'>
                    NOSOTROS
                  </a>
                </nav>
              </Popover.Panel>
    
          </Transition>
        </Popover>
      </header>
    );
  };