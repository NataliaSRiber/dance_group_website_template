import React from 'react';
import Nav from './Nav';
import WhatsappIcon from './Whatsappicon';
import Footer from './Footer';
import presentations from './api/presentations';

const OurYoutubeVideos = () => {
    return (
      <>
      <Nav/>
        <section className='md:h-full flex items-center text-gray-600 body-font font-instrument'>
          <div className='container md:px-20 md:py-32 pt-32 pb-16 mx-auto'>
            <div className='text-center md:pb-20 pb-10'>
              <h1 className='text-3xl md:text-5xl text-gray-700 font-semibold px-10'>Assista algumas de nossas apresentações</h1>
            </div>
            {presentations.map(({title, description, date, videoUrl}) => (
              <div className='flex flex-wrap justify-center'>
                <div className='p-4 md:w-1/2 lg:w-1/3'>
                  <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                    <iframe className='w-full aspect-video' src={videoUrl} title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
                    <div className='p-6 hover:bg-blue-950 hover:text-white transition duration-300 ease-in cursor-pointer'>
                      <h2 className='md:text-base text-sm font-medium text-blue-300 mb-1'>{date}</h2>
                      <h1 className='md:text-2xl text-xl font-semibold mb-3'>{title}</h1>
                      <p className='leading-relaxed mb-3'>{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <WhatsappIcon />
        <Footer />
      </>
    );
}


export default OurYoutubeVideos;