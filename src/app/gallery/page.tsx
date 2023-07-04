'use client'

import Slider from 'react-slick'
import React, { useEffect, useRef, useState } from 'react'
import { StaticImageData } from 'next/image'
import styles from '../../styles/banner.module.css'
import { presentations } from '../lib/presentations'
import '../../styles/modal.css'
import Carousel from '../components/Carousel'
import ImageViewer from '../components/ImageViewer'

export default function OurPhotos() {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)
  const [imageSource, setImageSource] = useState<StaticImageData | undefined>()
  const sliderWithRef = useRef<Slider | null>(null)

  function toggleModal(img?: StaticImageData) {
    setIsOpen(!modalIsOpen)
    !modalIsOpen && setImageSource(img)
  }

  useEffect(() => {
    if (!modalIsOpen) {
      document.body.style.overflow = 'auto'
      sliderWithRef?.current?.slickPlay()
    }
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden'
      sliderWithRef?.current?.slickPause()
    }
  }, [modalIsOpen])

  return (
    <>
      <section className="pb-16">
        <h1 className="pt-32 text-center text-2xl font-semibold text-gray-700 md:pt-32 md:text-5xl">
          Galeria de fotos
        </h1>
        <div className={`${styles.sliderContainer} w-full`}>
          {presentations.map(({ title, description, pictures }, index1) => (
            <div key={index1} className="mb-10">
              <div className="flex flex-col px-6 md:px-20">
                <h2 className="py-10 text-center text-xl font-medium text-blue-400 md:text-2xl">
                  {title}
                </h2>
                <p className="text-md mb-10 text-justify md:text-xl">
                  {description}
                </p>
              </div>
              <Carousel
                pictures={pictures}
                toggleModal={toggleModal}
                sliderWithRef={sliderWithRef}
              />
            </div>
          ))}
        </div>
      </section>

      <ImageViewer
        modalIsOpen={modalIsOpen}
        toggleModal={toggleModal}
        imageSource={imageSource}
      />
    </>
  )
}
