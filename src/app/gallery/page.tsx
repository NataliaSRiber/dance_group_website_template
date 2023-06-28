'use client'

import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from '../../styles/banner.module.css'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { presentations } from '../api/presentations'

const NextBtn = (props: any) => {
  const { onClick, visibility } = props

  return (
    <div className={`${visibility} cursor-pointer`} onClick={onClick}>
      <IoIosArrowForward className="text-3xl text-blue-950 duration-300 hover:text-blue-700 md:text-5xl" />
    </div>
  )
}

const PrevBtn = (props: any) => {
  const { onClick, visibility } = props
  return (
    <div className={`${visibility} cursor-pointer `} onClick={onClick}>
      <IoIosArrowBack className="text-3xl text-blue-950 duration-300 hover:text-blue-700 md:text-5xl" />
    </div>
  )
}

const settings = {
  infinite: true,
  centerMode: true,
  centerPadding: '0px',
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  nextArrow: <NextBtn visibility={'visible'} />,
  prevArrow: <PrevBtn visibility={'visible'} />,
  pauseOnHover: true,
  swipeToSlide: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextBtn visibility={'invisible'} />,
        prevArrow: <PrevBtn visibility={'invisible'} />,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextBtn visibility={'invisible'} />,
        prevArrow: <PrevBtn visibility={'invisible'} />,
      },
    },
  ],
}

export default function OurPhotos() {
  return (
    <>
      <section className="pb-16">
        <h1 className="pt-32 text-center text-2xl font-semibold text-gray-700 md:pt-32 md:text-5xl">
          Galeria de fotos
        </h1>
        <div className={`${styles.sliderContainer} w-full`}>
          {presentations.map(({ title, description, pictures }, index) => (
            <div key={index} className="mb-10">
              <div className="flex flex-col px-10 md:px-20">
                <h2 className="py-10 text-center text-xl font-medium text-blue-400 md:text-2xl">
                  {title}
                </h2>
                <p className="text-md pb-10 text-justify md:text-xl">
                  {description}
                </p>
              </div>
              <Slider {...settings}>
                {pictures.map((img, index) => (
                  <div key={index}>
                    <Image src={img} alt="dance-photos" />
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
