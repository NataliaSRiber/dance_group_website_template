import { Inter } from 'next/font/google'
import Nav from '../pages/components/Nav'
import AboutUs from './components/about'
import Footer from './components/Footer'
import Form from './components/Form'
import Slider from './components/Slider'
import WhatsappIcon from './components/Whatsappicon'
import OurYoutubeVideos from './components/OurYoutubeVideos'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />
      {/* <div className="bg-indigo-600 w-full h-screen"> */}
        {/* <Slider /> */}
      {/* </div> */}
      {/* <Form /> */}
      {/* <AboutUs />
      <Footer /> */}
      {/* <OurYoutubeVideos /> */}
      <WhatsappIcon />
    </div>
  )
}
