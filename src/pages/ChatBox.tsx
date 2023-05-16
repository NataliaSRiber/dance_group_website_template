import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import whatsIcon from './assets/whatsApp.svg.png'


const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [delay, setDelay] = useState(1200);

  useEffect(() => {
    setAnimation(true);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setDelay(0);
    }, 2000);
  }, [animation])
  
  const chatToggle = () => {
    setOpen(!open);
  }
  
    return (
      <>
        <div className={`${open ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'} h-[250px] shadow-lg shadow-gray-500 rounded-[40px] transition-all duration-500 ease-out fixed bottom-0 right-0 flex flex-col w-[94vw] min-[416px]:w-[400px] max-w-[400px] items-end bg-white m-2`}>
          <div className='w-full bg-green-600 flex flex-row items-center justify-between px-4 h-1/4 text-white font-bold rounded-t-[40px]'>
            <p className='text-xl'>Estamos online!</p>
            <div onClick={chatToggle} className='rounded-full bg-slate-500 cursor-pointer font-bold'>
              <AiOutlineClose className="w-6 h-6" />
            </div>
          </div>
          <div className='bg-white flex flex-col w-full my-4'>
            <div className='flex items-center text-gray-700 font-normal text-xl px-4'>
              <div className='flex items-center border-2 shadow-lg shadow-gray-300 rounded-full p-4 w-full'>
                <p className='text-lg'>Olá, podemos ajudar?</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${open ? 'flex min-[416px]:w-[250px] w-[89vw] visible transition-all duration-500 ease-in' : 'w-16 invisible'} shadow-lg shadow-gray-300 h-16 max-w-[250px] fixed bottom-0 right-0 m-4 flex bg-green-600 hover:bg-green-400 text-white font-semibold rounded-full text-lg`}>
          <a href='https://wa.me/5512997482555' target='_blank' className='w-full h-full'>
            <button className={`px-4 w-full h-full cursor-pointer items-center justify-between flex flex-row `}>
              <p className={`${open ? 'opacity-100 transition-all duration-300 ease-in delay-500' : 'opacity-0'}`}>Falar no Whatsapp</p>
              <BsWhatsapp className={`${open ? 'opacity-100 transition-all duration-300 ease-in delay-500' : 'opacity-0'}`}/>
            </button>
          </a>
        </div>
        <div className={`${!open ? 'flex z-10' : 'hidden'} ${animation && `transition transform scale-100 duration-300 delay-[1200ms]`} scale-0 flex items-center justify-center rounded-full text-green-500 fixed bottom-0 right-0 cursor-pointer px-1 py-2 m-2`}>
          <span className='z-[-1] animate-ping absolute h-2/4 w-2/4 rounded-full bg-green-700 opacity-75'></span>
          <button type='button' onClick={chatToggle}>
            <Image
              className='h-16 w-16 hover:scale-110 duration-500'
              src={whatsIcon}
              alt='whatsapp icon'
            />
          </button>
        </div>
      </>
    );
}


export default ChatBox;