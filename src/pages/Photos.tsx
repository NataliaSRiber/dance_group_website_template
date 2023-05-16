import React, { useState } from 'react';
import Image from 'next/image'
import Nav from './Nav';
import Slider from 'react-slick';
import Footer from './Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/banner.module.css'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import presentations from './api/presentations';
import ChatBox from './ChatBox';

const Photos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const NextBtn = (props: any) => {
    const { onClick, visibility } = props;
    
    return (
      <div className={`${visibility} cursor-pointer`} onClick={onClick}>
        <IoIosArrowForward className='text-3xl md:text-5xl text-blue-950 hover:text-blue-700 duration-300'/>
      </div>
    );
  };

  const PrevBtn = (props: any) => {
    const { onClick, visibility } = props;
    return (
      <div className={`${visibility} cursor-pointer `} onClick={onClick}>
        <IoIosArrowBack className='text-3xl md:text-5xl text-blue-950 hover:text-blue-700 duration-300'/>
      </div>
    );
  };

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextBtn visibility={'visible'}/>,
    prevArrow: <PrevBtn visibility={'visible'}/>,
    pauseOnHover: true,
    swipeToSlide: true,
    dots: true,
    beforeChange: (_oldIndex:number, newIndex:number) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextBtn visibility={'invisible'}/>,
          prevArrow: <PrevBtn visibility={'invisible'}/>,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextBtn visibility={'invisible'}/>,
          prevArrow: <PrevBtn visibility={'invisible'}/>,
        }
      }
    ]
  };

  return (
    <>
      <Nav />
      <section>
        <h1 className='text-3xl md:text-5xl text-gray-700 font-semibold text-center md:pt-32 pt-32'>Galeria de fotos</h1>
        <div className={`${styles.sliderContainer} w-full`}>
          {presentations.map(({title, description, pictures}) => (
            <>
              <div className='flex flex-col md:px-20 px-10'>
                <h2 className='text-xl md:text-2xl font-medium py-10 text-center text-blue-400'>{title}</h2>
                <p className='text-justify md:text-xl text-md pb-10'>{description}</p>
              </div>
              <Slider {...settings} className=''>
                {pictures.map((img, index) =>(
                    <div>
                      <Image
                          className={`${(currentSlide - index === 1 || currentSlide - index === -(pictures.length - 1)) ? 'prevSlide' : ''} ${(index - currentSlide === 1 || index - currentSlide === -(pictures.length - 1)) ? 'nextSlide' : ''}`}
                          src={img}
                          alt='Picture of the author'
                        />
                    </div>
                ))}
              </Slider>
            </>
          ))}
        </div>
      </section>
      <ChatBox />
      <Footer />
    </>
  );
}


export default Photos;