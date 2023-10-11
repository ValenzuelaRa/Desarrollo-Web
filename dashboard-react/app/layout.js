
import React from 'react';
import '../style/style.css'; 
import NavbarHorizontal from '@/components/NavbarHorizontal';

export default function RootLayout({ children }) {
  return (
    <div>
      <NavbarHorizontal/>
      <div>
        {children}
      </div>
    </div>
  );
}
