import React from 'react';
import Image from 'next/image'
import Nav from './Nav';
import Slider from 'react-slick';
// import dance1 from './assets/dance-1.jpg'
// import dance2 from './assets/dance-2.jpg'
// import dance3 from './assets/dance-3.jpg'
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
    // infinite: true,
    className: "center",
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 500,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
    return (
      <>
        <Nav />
        <h1 className='text-3xl md:text-5xl text-gray-700 font-semibold text-center md:pt-32 pt-32 pb-16 md:px-20 px-10'>Galeria de fotos</h1>
        <div>
          <Slider {...settings} className={`${styles["slick-slider"]} pt-4 mx-5`}>
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
          <Slider {...settings} className={`${styles["slick-slider"]} md:pt-20 pt-10 md:pb-20 pb-10`}>
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