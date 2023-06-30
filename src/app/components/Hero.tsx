'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import main from '../../assets/main-photo.jpg'
import mainMobile from '../../assets/home-mobile.png'

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
          className="hidden h-full w-full pt-10 brightness-50 md:block"
          src={main}
          alt="Picture of the author"
        />
        <Image
          className="block h-screen w-full pt-6 brightness-50 md:hidden"
          src={mainMobile}
          alt="Picture of the author"
        />
        <div className="absolute top-1/2 w-full truncate text-white">
          <h1
            className={`${
              animation &&
              'translate-x-full transform transition delay-1000 duration-[900ms] ease-in'
            } text-md relative left-[-100%] pb-4 font-bold tracking-wide md:pb-8 md:text-5xl`}
          >
            Grupo de Dança
          </h1>
          <p
            className={`${
              animation &&
              'translate-x-[-100%] transform transition delay-1000 duration-[900ms] ease-in'
            } relative right-[-100%] pb-6 text-xs font-light md:pb-20 md:text-xl`}
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
              <button className="relative flex cursor-pointer items-center justify-between rounded-lg bg-blue-950 p-2 text-xs font-bold text-white drop-shadow-xl hover:bg-blue-400 md:p-4 md:text-lg">
                Junte-se a nós
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
