import React from 'react';

const Home = () => {
  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-6 gap-10 p-10 w-full justify-center content-center bg-slate-100 min-h-screen '>
      
      <div className='bg-slate-100 bordeborder-4 border-4 border-[#243c5a] hover:border-[#4FC1EC] rounded-md p-4 flex flex-col justify-center items-center'>
        <h1 className='text-slate-950 font-mono text-2xl font-bold mb-4'>Document</h1> 
        <p className='font-mono text-4xl font-bold text-slate-950'>146.00</p>
      </div>

      <div className='bg-slate-100 rounded-md p-4 flex flex-col justify-center items-center  bordeborder-4 border-4 border-[#243c5a] hover:border-[#4FC1EC]'>
        <h1 className='text-slate-950 font-mono text-2xl font-bold mb-4'>Contacto</h1> 
        <p className='font-mono text-4xl font-bold text-slate-950'>146.00</p>
      </div>

      <div className='bg-slate-100 rounded-md p-4 flex flex-col justify-center items-center  bordeborder-4 border-4 border-[#243c5a] hover:border-[#4FC1EC]'>
        <h1 className='text-slate-950 font-mono text-2xl font-bold mb-4'>Correo Electronico</h1> 
        <p className='font-mono text-4xl font-bold text-slate-950'>146.00</p>
      </div>

      <div className='hidden md:flex bg-slate-300 rounded-md col-span-1 row-span-6  bordeborder-4 border-4 border-[#243c5a] hover:border-[#4FC1EC]'></div>

      <div className='bg-slate-300 rounded-md col-span-1 sm:col-span-2 md:col-span-1  bordeborder-4 border-4 border-[#243c5a] hover:border-[#4FC1EC]'>
        {/* Contenido de la imagen */}
      </div>

      <div className='bg-slate-300 rounded-md col-span-1 sm:col-span-2 md:col-span-1  bordeborder-4 border-4 border-[#243c5a] hover:border-[#4FC1EC]'>
        {/* Contenido de la imagen */}
      </div>

      <div className='bg-slate-300 rounded-md col-span-1 sm:col-span-2 md:col-span-3 row-span-4  bordeborder-4 border-4 border-[#243c5a] hover:border-[#4FC1EC]'></div>
    </main>
  );
}

export default Home;
