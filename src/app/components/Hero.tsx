'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import women from '../../assets/women.jpg'

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
          className="h-full w-full object-scale-down brightness-50"
          src={women}
          alt="Picture of the author"
        />

        <div className="absolute top-1/2 w-full truncate text-gray-100">
          <h1
            className={`${
              animation &&
              'translate-x-full transform transition delay-1000 duration-[900ms] ease-in'
            } text-md relative left-[-100%] font-semibold tracking-wide md:pb-2 md:text-4xl`}
          >
            Grupo de Dança
          </h1>
          <p
            className={`${
              animation &&
              'translate-x-[-100%] transform transition delay-1000 duration-[900ms] ease-in'
            } relative right-[-100%] text-xs font-light md:text-xl`}
          >
            Grupo de dança de Esperança, São Paulo
          </p>
        </div>
      </div>
    </>
  )
}
