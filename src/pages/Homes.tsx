import React, { useRef } from 'react';
import Image from 'next/image'
import Nav from './Nav';
import b1 from './assets/7254611.jpg'
import b2 from './assets/7254711.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import na from './assets/next.png'
import pa from './assets/back.png'
import '../styles/banner.module.css'


const NextBtn = (props: any) => {
  const { className, onClick} = props;
  return (
    <div className='bg-red-600 w-20' onClick={onClick}>
      <Image src={na} alt="next-arrow"/>
    </div>
  );
};

const PrevBtn = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className='bg-red-600 w-20' onClick={onClick}>
      <Image src={pa} alt="prev-arrow" />
    </div>
  );
};

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  }

    return (
      <>
        <Nav />
        <div className='bg-pink-600 w-full'>
          <Slider {...settings}>
          <div className='flex'>
            <Image
                className='bg-yellow-300'
                src={b1}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className=''
                src={b2}
                alt="Picture of the author"
              />
          </div>
          <div>
            <Image
                className=''
                src={b1}
                alt="Picture of the author"
              />
          </div>         
        </Slider>
        </div>
      </>
    );
}


export default Home;
