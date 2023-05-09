import { Inter } from 'next/font/google'
import Footer from './Footer'
import WhatsappIcon from './Whatsappicon'
import Homes from './Home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Homes/>
      <WhatsappIcon />
      <Footer />
    </div>
  )
}
