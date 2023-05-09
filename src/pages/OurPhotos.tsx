import React, { useState } from 'react';
import Image from 'next/image'
import Nav from './Nav';
import Slider from 'react-slick';
import dance1 from './assets/dance-1.jpg'
import dance2 from './assets/dance-2.jpg'
import dance3 from './assets/dance-3.jpg'
import b1 from './assets/yoga.jpg'
import WhatsappIcon from './Whatsappicon';
import Footer from './Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/banner.module.css'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const images = [dance1, dance2, dance3, dance1, dance2, dance3, dance1, dance2, dance3] 

const NextBtn = (props: any) => {
  const { onClick, visibility } = props;
  
  return (
    <div className={`${visibility} cursor-pointer`} onClick={onClick}>
      <IoIosArrowForward className="text-3xl md:text-5xl text-blue-950 hover:text-blue-700 duration-300"/>
    </div>
  );
};

const PrevBtn = (props: any) => {
  const { onClick, visibility } = props;
  return (
    <div className={`${visibility} cursor-pointer `} onClick={onClick}>
      <IoIosArrowBack className="text-3xl md:text-5xl text-blue-950 hover:text-blue-700 duration-300"/>
    </div>
  );
};

const OurPhotos = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextBtn visibility={'visible'}/>,
    prevArrow: <PrevBtn visibility={'visible'}/>,
    pauseOnHover: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
            {images.map((img) =>(
              <div>
                <Image
                    className=''
                    src={img}
                    alt="Picture of the author"
                  />
              </div>
            ))}
          </Slider>
          <Slider {...settings} className=''>
            {images.map((img) =>(
                <div>
                  <Image
                      className=''
                      src={img}
                      alt="Picture of the author"
                    />
                </div>
            ))}
          </Slider>
          <Slider {...settings} className=''>
            {images.map((img) =>(
                <div>
                  <Image
                      className=''
                      src={img}
                      alt="Picture of the author"
                    />
                </div>
            ))}
          </Slider>
        </div>
        <WhatsappIcon />
        <Footer />
      </>
    );
}


export default OurPhotos;