import React from 'react';
import Image from 'next/image'
import Nav from './Nav';
import Slider from 'react-slick';
import dance1 from './assets/dance-1.jpg'
import dance2 from './assets/dance-2.jpg'
import dance3 from './assets/dance-3.jpg'
import b1 from './assets/yoga.jpg'
import na from './assets/next.png'
import pa from './assets/back.png'
import WhatsappIcon from './Whatsappicon';
import Footer from './Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/banner.module.css'

const NextBtn = (props: any) => {
  const { onClick, visibility } = props;
  console.log(visibility);
  
  return (
    <div className={`${visibility} text-blue-950 cursor-pointer`} onClick={onClick}>
      <Image src={na} alt="next-arrow"/>
    </div>
  );
};

const PrevBtn = (props: any) => {
  const { onClick, visibility } = props;
  return (
    <div className={`${visibility} text-blue-950 cursor-pointer`} onClick={onClick}>
      <Image src={pa} alt="prev-arrow" />
    </div>
  );
};

const OurPhotos = () => {
  const settings = {
    infinite: true,
    // centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <NextBtn visibility={'visible'}/>,
    prevArrow: <PrevBtn visibility={'visible'}/>,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <NextBtn visibility={'invisible'}/>,
          prevArrow: <PrevBtn visibility={'invisible'}/>,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextBtn visibility={'invisible'}/>,
          prevArrow: <PrevBtn visibility={'invisible'}/>,
          // dots: true
        }
      }
    ]
  };
    return (
      <>
        <Nav />
        <h1 className='text-3xl md:text-5xl text-gray-700 font-semibold text-center md:pt-32 pt-32 pb-16 md:px-20 px-10'>Galeria de fotos</h1>
        <div className={`${styles.sliderContainer} w-full`}>
          <Slider {...settings} className='md:pt-20 pt-10 md:mb-20 mb-10'>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>    
          </Slider>
          <Slider {...settings} className='md:pt-20 pt-10 md:mb-20 mb-10'>
            <div>
              <Image
                  className='w-auto'
                  src={dance1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={dance2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={dance3}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={dance1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={dance2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={dance3}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={dance1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={dance2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={dance3}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={dance1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={dance2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={dance3}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={dance1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={dance2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={dance3}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={dance1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b1}
                  alt="Picture of the author"
                />
            </div>    
          </Slider>
        </div>
        <WhatsappIcon />
        <Footer />
      </>
    );
}


export default OurPhotos;