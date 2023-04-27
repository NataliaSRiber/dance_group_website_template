import React from 'react';
import Image from 'next/image'
import Nav from './Nav';
import Slider from 'react-slick';
import dance1 from './assets/dance-1.jpg'
import dance2 from './assets/dance-2.jpg'
import dance3 from './assets/dance-3.jpg'
import WhatsappIcon from './Whatsappicon';

const OurPhotos = () => {
  const settings = {
    dots: true,
    // centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    // rows: 3,
    // slidesPerRow: 3,
    // centerPadding: "80px",
  };
    return (
      <>
        <Nav />
        <h1 className='text-3xl md:text-5xl text-gray-700 font-semibold text-center py-20'>See Our recent photos</h1>
        <div className='flex justify-center mt-5 mb-5 mx-5 items-center '>
        <Slider {...settings} className="text-center w-full h-auto">
          <div>
            <Image
                className='w-96 m-3'
                src={dance1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance3}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance3}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance3}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance3}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance3}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 m-3'
                src={dance3}
                alt="Picture of the author"
              />
          </div>    
        </Slider>

        </div>
        <WhatsappIcon />
      </>
    );
}


export default OurPhotos;