import React from 'react';
import Image from 'next/image'
import hotel from './hotel-resort.jpg'

const OurYoutubeVideos = () => {
    return (
      <section className='md:h-full flex items-center text-gray-600'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-12'>
            <h5 className='text-base mb:text-lg text-pink-700 mb-1'>See Our recent videos</h5>
            <h1 className='text-4xl md:text-6xl text-gray-700 font-semibold'>Talwind Css responsive Card</h1>
          </div>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 sm:w-1/2 lg:w-1/3'>
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Image
                  alt="Pictures of the class"
                  src={hotel}
                  className='lg:h-72 md:h-48 w-full object-cover object-center' //h-72 para 54
                />
                <div className='p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in cursor-pointer'>
                  <h2 className='text-base font-medium text-pink-300 mb-1'>October 21, 2020</h2>
                  <h1 className='text-2xl font-semibold mb-3'>Beautiful Beach</h1>
                  <p className='leadind-relaxed mb-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

            </div>
            <div className='p-4 sm:w-1/2 lg:w-1/3'>
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Image
                  alt="Pictures of the class"
                  src={hotel}
                  className='lg:h-72 md:h-48 w-full object-cover object-center' //h-72 para 54
                />
                <div className='p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in cursor-pointer'>
                  <h2 className='text-base font-medium text-pink-300 mb-1'>October 21, 2020</h2>
                  <h1 className='text-2xl font-semibold mb-3'>Beautiful Beach</h1>
                  <p className='leadind-relaxed mb-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

            </div>
            <div className='p-4 sm:w-1/2 lg:w-1/3'>
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Image
                  alt="Pictures of the class"
                  src={hotel}
                  className='lg:h-72 md:h-48 w-full object-cover object-center' //h-72 para 54
                />
                <div className='p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in cursor-pointer'>
                  <h2 className='text-base font-medium text-pink-300 mb-1'>October 21, 2020</h2>
                  <h1 className='text-2xl font-semibold mb-3'>Beautiful Beach</h1>
                  <p className='leadind-relaxed mb-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

            </div>
            <div className='p-4 sm:w-1/2 lg:w-1/3'>
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Image
                  alt="Pictures of the class"
                  src={hotel}
                  className='lg:h-72 md:h-48 w-full object-cover object-center' //h-72 para 54
                />
                <div className='p-6 hover:bg-pink-700 hover:text-white transition duration-300 ease-in cursor-pointer'>
                  <h2 className='text-base font-medium text-pink-300 mb-1'>October 21, 2020</h2>
                  <h1 className='text-2xl font-semibold mb-3'>Beautiful Beach</h1>
                  <p className='leadind-relaxed mb-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      {/* <h1 className='text-pink-600 text-4xl text-center py-20 font-bold'>Algumas de nossas apresentações!</h1> */}
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
    );
}


export default OurYoutubeVideos;