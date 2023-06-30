import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import '../../styles/modal.css'

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
  pauseOnFocus: true,
  swipeToSlide: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextBtn visibility={'invisible'} />,
        prevArrow: <PrevBtn visibility={'invisible'} />,
      },
    },
  ],
}

interface IProps {
  pictures: Array<StaticImageData>
  toggleModal: Function
}

export default function Carousel(props: IProps) {
  const { pictures, toggleModal } = props
  return (
    <>
      <Slider {...settings}>
        {pictures.map((img: any, index: any) => (
          <div key={index}>
            <button
              disabled={screen.width <= 640}
              onClick={() => toggleModal(img)}
            >
              <Image src={img} alt="dance-picture" />
            </button>
          </div>
        ))}
      </Slider>
    </>
  )
}
