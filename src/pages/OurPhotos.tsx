import React from 'react';
import Image from 'next/image'
import Nav from './Nav';
import Slider from 'react-slick';
// import dance1 from './assets/dance-1.jpg'
// import dance2 from './assets/dance-2.jpg'
// import dance3 from './assets/dance-3.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import b1 from './assets/yoga.jpg'
import b2 from './assets/yoga.jpg'
import na from './assets/next.png'
import pa from './assets/back.png'
import WhatsappIcon from './Whatsappicon';
import styles from '../styles/banner.module.css'
import Footer from './Footer';


const NextBtn = (props: any) => {
  const { onClick } = props;
  return (
    <div className='text-blue-950 md:w-64 cursor-pointer' onClick={onClick}>
      <Image src={na} alt="next-arrow"/>
    </div>
  );
};

const PrevBtn = (props: any) => {
  const { onClick } = props;
  return (
    <div className='text-blue-950 md:w-64 cursor-pointer' onClick={onClick}>
      <Image src={pa} alt="prev-arrow" />
    </div>
  );
};

const OurPhotos = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    // className: "center",
    // centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          centerMode: false,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: false,
        }
      }
    ]
  };
    return (
      <>
        <Nav />
        <h1 className='text-3xl md:text-5xl text-gray-700 font-semibold text-center md:pt-32 pt-32 pb-16 md:px-20 px-10'>Galeria de fotos</h1>
        <div>
          <h2 className="text-lg md:text-3xl text-blue-400 font-medium text-center">Apresentação no dia das mães</h2>
          <Slider {...settings} className={`${styles["slick-slider"]} pt-4 md:mx-3`}>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>
            <div>
              <Image
                  className='w-{100}'
                  src={b2}
                  alt="Picture of the author"
                />
            </div>    
          </Slider>
          <h2 className="text-lg md:text-3xl text-blue-400 font-medium text-center pt-10">Apresentação de Natal</h2>
          <Slider {...settings} className={`${styles["slick-slider"]} md:pt-20 pt-10 md:mb-20 mb-10 md:mx-3`}>
            <div>
              <Image
                  className='w-auto'
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
        </div>
        <WhatsappIcon />
        <Footer />
      </>
    );
}


export default OurPhotos;