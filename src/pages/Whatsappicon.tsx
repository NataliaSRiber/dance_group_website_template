import React from 'react';
import Image from 'next/image'
import whatsIcon from './assets/whatsApp.svg.png'

const WhatsappIcon = () => {
    return (
      <div className="rounded-full hover:scale-110 text-green-500 fixed bottom-0 right-0 cursor-pointer hover:text-green-700 duration-500 p-2">
        <a href='https://wa.me/5512997482555'>
          <Image 
            className='w-20 h-20 '
            src={whatsIcon}
            alt="Picture of the author"
        />
        </a>
      </div>
    );
}


export default WhatsappIcon;