import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Consultorio',
  description: 'App creada para la materia de desarrollo web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header title = 'consultorio web'/>
        {children}
        <Footer titleFooter = '© 2023 - 2023 consultorio - All Rights Reserved.'/>
      </body>
    </html>
  )
}
