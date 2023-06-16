'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import women from '../assets/main-photo.jpg'
import Nav from './components/Nav'
import Link from 'next/link'

export default function Home() {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
  }, [])

  return (
    <>
      <Nav />
      <div
        className={`${
          animation && 'opacity-100'
        } relative h-auto w-full pt-14 text-center opacity-0 transition-all delay-300 duration-700 ease-in md:pt-10`}
      >
        <Image
          className="h-full w-full brightness-50"
          src={women}
          alt="Picture of the author"
        />
        <div className="absolute top-1/2 w-full truncate text-white">
          <h1
            className={`${
              animation &&
              'translate-x-full transform transition delay-1000 duration-[900ms] ease-in'
            } text-md relative left-[-100%] font-bold tracking-wide md:text-5xl pb-4 md:pb-8`}
          >
            Grupo de Dança
          </h1>
          <p
            className={`${
              animation &&
              'translate-x-[-100%] transform transition delay-1000 duration-[900ms] ease-in'
            } relative right-[-100%] text-xs font-light md:text-xl md:pb-20 pb-6`}
          >
            Venha aprender a dançar conosco!
          </p>
          <div className={`scale-0 flex items-center justify-center ${animation && 'scale-100 transform transition delay-[2000ms] duration-500'}`}>
            <Link href="/contact" >
              <button className="drop-shadow-xl flex cursor-pointer items-center justify-between rounded-lg bg-blue-950 md:p-4 md:text-lg p-2 text-xs font-bold text-white hover:bg-blue-400 relative">
                Junte-se a nós
              </button>
            </Link>

          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col px-10 py-10 md:px-20 md:py-20">
        <h1 className="pb-10 text-center text-2xl font-semibold text-gray-700 md:pb-20 md:text-5xl">
          Seja bem vindo ao Grupo de Dança
        </h1>
        <p className="text-md text-justify md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          sollicitudin, velit a luctus vulputate, orci erat consectetur neque,
          quis dignissim erat ligula at lacus. Quisque nec purus nec augue
          tristique rutrum ac imperdiet mi. Nulla consectetur risus vel ante
          venenatis, eu fermentum lorem placerat. Nunc viverra lobortis mauris,
          id rhoncus elit rutrum quis. Praesent feugiat finibus enim, sed tempor
          tortor dictum in. Sed eros magna, pulvinar id mollis in, ornare ac
          nunc. Donec non sagittis felis. Fusce congue quam velit. 
        </p>
      </div>
    </>
  )
}
