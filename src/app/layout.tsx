import { ReactNode } from 'react'
import Nav from './components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import ChatBox from './components/ChatBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dance website template',
  description: 'Dance website template created with React and Next.js',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Nav />
        {children}
        <ChatBox />
        <Footer />
      </body>
    </html>
  )
}
