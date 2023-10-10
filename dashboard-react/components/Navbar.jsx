import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='bg-slate-600 w-1/3 p-4 h-screen mx-hi'>
      <div className='flex justify-center items-center mb-4'>
        <Image
          src="/ruta/de/la/imagen.jpg"
          alt="Descripción de la imagen"
          width={50}
          height={50}
        />
      </div>
      <div>
        <nav className='flex flex-col justify-center items-center h-3/4'>
          <ul className='space-y-2 p-10'>
            <li className='text-white p-5'>Link 2</li>
            <li className='text-white p-5'>Link 1</li>
            <li className='text-white p-5'>Link 3</li>
          </ul>
          <div className='mt-4'>
            <Link href="#" className='text-white hover:underline mr-4'>Sign-in</Link>
            <Link href="#" className='text-white hover:underline'>Log Out</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
