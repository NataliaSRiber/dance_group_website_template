import React from 'react';
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';


const ChatDiv = () => {
    return (
      <div className="rounded-full fixed bottom-0 right-0 md:w-1/3 h-1/4 md:1/3 w-full bg-black">
        <div className='bg-green-600 flex flex-row items-center justify-between px-4 h-1/4 text-white font-bold rounded'>
          <p className='md:text-lg text-base'>Estamos online!</p>
          <div className='rounded-full bg-slate-500 cursor-pointer font-bold'>
            <AiOutlineClose className="w-3.5 min-[330px]:w-5" />
          </div>
        </div>
        <div className='bg-white h-3/4 flex flex-col flex-end'>
          <div className='flex items-center md:m-2 h-3/4 text-gray-700 font-normal text-xl md:text-left px-4'>
            <div className='h-2/4 flex items-center border-2 shadow-lg rounded-full lg:p-4 p-2 w-full'>
              <p className='lg:text-lg text-sm' >Olá, como podemos te ajudar?</p>
            </div>
          </div>
          <div className='flex place-content-end md:pb-3'>
            <button className="bg-green-600 text-white font-semibold font-[Poppins] py-2 lg:px-4 px-2 rounded-full hover:bg-green-400 duration-500 lg:w-1/2 w-2/3 cursor-pointer items-center justify-between flex flex-row h-full md:m-2 lg:text-lg text-sm">
              Falar no Whatsapp
              <BsWhatsapp />
            </button>
          </div>
        </div>
      </div>
    );
}


export default ChatDiv;