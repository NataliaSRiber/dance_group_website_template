import React from 'react';
import Image from 'next/image'
import hotel from './hotel-resort.jpg'
import Nav from './Nav';
import WhatsappIcon from './Whatsappicon';
import Footer from './Footer';

const OurYoutubeVideos = () => {
    return (
      <>
      <Nav/>
        <section className='md:h-full flex items-center text-gray-600'>
          <div className='container md:px-20 md:py-20 mx-auto py-10'>
            <div className='text-center md:pb-20 pb-10'>
              {/* <h5 className='text-base mb:text-lg text-blue-700 mb-1'>See Our recent videos</h5> */}
              <h1 className='text-3xl md:text-5xl text-gray-700 font-semibold px-10'>Assista algumas de nossas apresentações</h1>
            </div>
            <div className='flex flex-wrap justify-center'>
              <div className='p-4 md:w-1/2 lg:w-1/3'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/xNRJwmlRBNU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <div className='p-6 hover:bg-blue-950 hover:text-white transition duration-300 ease-in cursor-pointer'>
                    <h2 className='md:text-base text-sm font-medium text-blue-300 mb-1'>October 21, 2020</h2>
                    <h1 className='md:text-2xl text-xl font-semibold mb-3'>Apresentação 1</h1>
                    <p className='leadind-relaxed mb-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
              <div className='p-4 md:w-1/2 lg:w-1/3'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/xNRJwmlRBNU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <div className='p-6 hover:bg-blue-950 hover:text-white transition duration-300 ease-in cursor-pointer'>
                    <h2 className='md:text-base text-sm font-medium text-blue-300 mb-1'>October 21, 2020</h2>
                    <h1 className='md:text-2xl text-xl font-semibold mb-3'>Apresentação 2</h1>
                    <p className='leadind-relaxed mb-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
              <div className='p-4 md:w-1/2 lg:w-1/3'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/xNRJwmlRBNU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <div className='p-6 hover:bg-blue-950 hover:text-white transition duration-300 ease-in cursor-pointer'>
                    <h2 className='md:text-base text-sm font-medium text-blue-300 mb-1'>October 21, 2020</h2>
                    <h1 className='md:text-2xl text-xl font-semibold mb-3'>Apresentação 3</h1>
                    <p className='leadind-relaxed mb-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
              <div className='p-4 md:w-1/2 lg:w-1/3'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/xNRJwmlRBNU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <div className='p-6 hover:bg-blue-950 hover:text-white transition duration-300 ease-in cursor-pointer'>
                    <h2 className='md:text-base text-sm font-medium text-blue-300 mb-1'>October 21, 2020</h2>
                    <h1 className='md:text-2xl text-xl font-semibold mb-3'>Apresentação 4</h1>
                    <p className='leadind-relaxed mb-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* <h1 className='text-blue-600 text-4xl text-center py-20 font-bold'>Algumas de nossas apresentações!</h1> */}
        {/* <div> 
          <ul>
            <li>
              <div>
                <iframe src='https://www.youtube.com/embed/v=mcSPTHa_rak'>

                </iframe>
                <h2>David Bowie - As The World falls down</h2>
                <p>Labyrinth original movie soundtrack</p>
              </div>
            </li>
          </ul>


          <p className='text-xl text-justify px-20 '>
            
          </p>
        </div> */}
        </section>
        <WhatsappIcon />
        <Footer />
      </>
    );
}


export default OurYoutubeVideos;