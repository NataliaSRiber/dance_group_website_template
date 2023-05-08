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
    swipeToSlide: true,
    
    speed: 500,
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
        <section>
          <h1 className='text-3xl md:text-5xl text-gray-700 font-semibold text-center md:pt-32 pt-32 pb-10'>Galeria de fotos</h1>
          <div className={`${styles.sliderContainer} w-full`}>
            <div className='flex flex-col md:px-20 px-10'>
              <h2 className='text-xl md:text-2xl font-medium pb-8 text-center text-blue-400'>Apresentação dia das mães</h2>
              <p className='text-justify md:text-xl text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lorem et neque rhoncus sagittis vel vitae urna. Aenean feugiat orci in fermentum malesuada. Donec libero erat, bibendum eget vehicula nec, vestibulum id mauris.</p>
            </div>
            <Slider {...settings} className='md:pt-10 pt-5 md:mb-20 mb-10'>
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
            <div className='flex flex-col text-center md:px-20 px-10'>
              <h2 className='text-xl md:text-2xl font-medium pb-8 text-center text-blue-400'>Apresentação de Natal</h2>
              <p className='text-justify md:text-xl text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lorem et neque rhoncus sagittis vel vitae urna. Aenean feugiat orci in fermentum malesuada. Donec libero erat, bibendum eget vehicula nec, vestibulum id mauris.</p>
            </div>
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
        </section>
        <WhatsappIcon />
        <Footer />
      </>
    );
}


export default OurPhotos;