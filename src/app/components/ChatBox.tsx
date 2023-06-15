'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import whatsIcon from '../../assets/whatsappicon.png'

export default function ChatBox() {
  const [open, setOpen] = useState(false)
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
  }, [])

  const chatToggle = () => {
    setOpen(!open)
  }

  return (
    <>
      <div
        className={`${
          open ? 'z-0 opacity-100' : 'z-[-1] opacity-0'
        } fixed bottom-0 right-0 m-2 flex h-[250px] w-[94vw] max-w-[400px] flex-col items-end rounded-[40px] bg-white shadow-lg shadow-gray-500 transition-all duration-500 ease-out min-[416px]:w-[400px]`}
      >
        <div className="flex h-1/4 w-full flex-row items-center justify-between rounded-t-[40px] bg-green-600 px-8 font-bold text-white">
          <p className="text-xl">Estamos online!</p>
          <div
            onClick={chatToggle}
            className="cursor-pointer rounded-full bg-slate-500 font-bold"
          >
            <AiOutlineClose className="h-6 w-6" />
          </div>
        </div>
        <div className="my-4 flex w-full flex-col bg-white">
          <div className="flex items-center px-4 text-xl font-normal text-gray-700">
            <div className="flex w-full items-center rounded-full border-2 p-4 shadow-lg shadow-gray-300">
              <p className="text-lg">Olá, podemos ajudar?</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          open
            ? 'visible flex w-[89vw] transition-all duration-500 ease-in min-[416px]:w-[250px]'
            : 'invisible w-16'
        } fixed bottom-0 right-0 m-4 flex h-16 max-w-[250px] rounded-full bg-green-600 text-lg font-semibold text-white shadow-lg shadow-gray-300 hover:bg-green-400`}
      >
        <a
          href="https://wa.me/5512997482555"
          target="_blank"
          className="h-full w-full"
          rel="noreferrer"
        >
          <button
            className={`flex h-full w-full cursor-pointer flex-row items-center justify-between px-4 `}
          >
            <p
              className={`${
                open
                  ? 'opacity-100 transition-all delay-500 duration-300 ease-in'
                  : 'opacity-0'
              }`}
            >
              Falar no WhatsApp
            </p>
            <BsWhatsapp
              className={`${
                open
                  ? 'opacity-100 transition-all delay-500 duration-300 ease-in'
                  : 'opacity-0'
              }`}
            />
          </button>
        </a>
      </div>
      <div
        className={`${!open ? 'z-0 flex' : 'hidden'} ${
          animation &&
          `scale-100 transform transition delay-[2000ms] duration-500`
        } fixed bottom-0 right-0 m-2 flex scale-0 cursor-pointer items-center justify-center rounded-full px-1 py-2 text-green-500`}
      >
        <span className="absolute z-[-1] h-[45%] w-[45%] animate-ping rounded-full bg-green-700 opacity-75"></span>
        <button type="button" onClick={chatToggle}>
          <Image
            className="h-16 w-16 duration-500 hover:scale-[120%]"
            src={whatsIcon}
            alt="whatsApp icon"
          />
        </button>
      </div>
    </>
  )
}
