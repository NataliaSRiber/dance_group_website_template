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
import styles from '../styles/banner.module.css'

const NextBtn = (props: any) => {
  const { onClick } = props;
  return (
    <div className='text-blue-950 sm:w-52 w-20' onClick={onClick}>
      <Image src={na} alt='next-arrow'/>
    </div>
  );
};

const PrevBtn = (props: any) => {
  const { onClick } = props;
  return (
    <div className='text-blue-950 sm:w-52 w-20' onClick={onClick}>
      <Image src={pa} alt='prev-arrow' />
    </div>
  );
};

const Homes = () => {
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  }

    return (
      <>
        <Nav />
        <div className='w-full'>
          <Slider ref={slider} {...settings} className={`${styles['slick-slider']}`}>
          <div>
            <Image
                className=''
                src={b1}
                alt='Picture of the author'
              />
          </div>
          <div>
            <Image
                className=''
                src={b2}
                alt='Picture of the author'
              />
          </div>
          <div>
            <Image
                className=''
                src={b1}
                alt='Picture of the author'
              />
          </div>         
        </Slider>
        </div>
      </>
    );
}


export default Homes;
