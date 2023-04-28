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
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
      {
        dots: true,
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        dots: true,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
      <>
        <Nav />
        <h1 className='text-3xl md:text-5xl text-gray-700 font-semibold text-center py-20'>See our recent photos</h1>
        <div className='flex justify-center mt-5 mb-5 mx-5 items-center'>
        <Slider {...settings} className="text-center w-full h-auto">
          <div>
            <Image
                className='w-96 p-3'
                src={dance1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 p-3'
                src={dance2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 p-3'
                src={dance3}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 p-3'
                src={dance1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 p-3'
                src={dance2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 p-3'
                src={dance3}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className='w-96 p-3'
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