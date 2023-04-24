import { Inter } from 'next/font/google'
import Nav from '../pages/Nav'
import AboutUs from './About'
import Footer from './Footer'
import Form from './Form'
import Slider from './Slider'
import WhatsappIcon from './Whatsappicon'
import OurYoutubeVideos from './OurYoutubeVideos'

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
