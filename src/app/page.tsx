'use client'

import React from 'react'
import Hero from './components/Hero'

export default function Home() {
  return (
    <>
      <Hero />
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
