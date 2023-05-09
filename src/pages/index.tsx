import { Inter } from 'next/font/google'
import Footer from './Footer'
import WhatsappIcon from './Whatsappicon'
import Homes from './Home'
import ChatDiv from './ChatDiv'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col body-font font-instrument'>
      <Homes/>
      {/* <ChatDiv /> */}
      <WhatsappIcon />
      <Footer />
    </div>
  )
}
