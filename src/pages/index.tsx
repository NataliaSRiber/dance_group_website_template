import { Inter } from 'next/font/google'
import Footer from './Footer'
import Homes from './Homes'
import WhatsappIcon from './Whatsappicon'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Homes />
      <WhatsappIcon />
    </div>
  )
}
