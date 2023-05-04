import { Inter } from 'next/font/google'
import Footer from './Footer'
import WhatsappIcon from './Whatsappicon'
import AboutUs from './About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <AboutUs/>
      <WhatsappIcon />
      <Footer />
    </div>
  )
}
