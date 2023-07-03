'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import main from '../../assets/main-photo.jpg'

import Link from 'next/link'

export default function Hero() {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
  }, [])

  return (
    <>
      <div
        className={`${
          animation && 'opacity-100'
        } relative h-auto w-full pt-14 text-center opacity-0 transition-all delay-300 duration-700 ease-in md:pt-10`}
      >
        <Image
          className="h-screen w-full object-cover object-center brightness-50 md:h-full"
          src={main}
          alt="Picture of the author"
        />
        <div className="absolute top-1/2 flex w-full flex-col text-white">
          <h1
            className={`${
              animation &&
              'translate-x-full transform transition delay-1000 duration-[900ms] ease-in'
            } text-md relative left-[-100%] pb-4 text-2xl font-bold tracking-wide md:pb-8 md:text-5xl`}
          >
            Grupo de Dança
          </h1>
          <p
            className={`${
              animation &&
              'translate-x-[-100%] transform transition delay-1000 duration-[900ms] ease-in'
            } font-regular relative right-[-100%] mb-6 h-auto px-2 text-center text-base md:pb-20 md:text-xl`}
          >
            Venha aprender a dançar conosco!
          </p>
          <div
            className={`flex scale-0 items-center justify-center ${
              animation &&
              'scale-100 transform transition delay-[2000ms] duration-500'
            }`}
          >
            <Link href="/contact">
              <button className="relative flex cursor-pointer items-center justify-between rounded-lg bg-blue-950 p-4 text-sm font-bold text-white drop-shadow-xl hover:bg-blue-400 md:p-4 md:text-lg">
                Junte-se a nós
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
