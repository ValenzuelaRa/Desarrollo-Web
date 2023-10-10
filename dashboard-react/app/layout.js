import React from 'react';
import Navbar from '@/components/Navbar';
import '../style/style.css'; 

export default function RootLayout({ children }) {
  return (
    <div className="flex w-full">
      <Navbar />
      <div className="flex flex-col w-full">
        {children}
      </div>
    </div>
  );
}
