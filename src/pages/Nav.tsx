import Button from "./Button"
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsInstagram, BsWhatsapp, BsFacebook, BsYoutube } from 'react-icons/bs';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const links = [
    {name: "HOME", link: "/"}, // o logo deve retornar a página inicial
    {name: "GALERIA DE FOTOS", link: "/OurPhotos"},
    {name: "VÍDEOS", link: "/OurYoutubeVideos"},
    {name: "CONTATO", link: "/Contact"},
  ]

  const [open, setOpen] = useState(false);

  useEffect(() => {
    // scroll lock quando o menu mobile é aberto.
    open ? document.body.style.overflow='hidden' : document.body.style.overflow='auto';
  })

  return (
    <section className="z-10 fixed top-0 shadow-md w-full body-font font-instrument">
      {/* alterei o py de py-4 para p-5 e assim removeu o espaço entre os menus */}
      <div className="md:flex items-center justify-between bg-blue-950 py-5 md:px-10 px-7">
        <div className="text-3xl text-white mr-1 pt-2">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
            <Link href="/">
              <span>Logo</span>
            </Link>
          </div>
        </div>
        <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-7 cursor-pointer md:hidden">
          {open && <AiOutlineClose  color="white"/>}
          {!open && <GiHamburgerMenu color="white"/>}        
        </div>
        {/* o z-[-1]  esta dando problema procurar sobre */}
        <ul className={`z-[-1] md:flex md:items-center md:pb-0 pb-12 fixed md:static bg-blue-950 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-[1200ms] ease-in ${open ? 'top-20 h-full': 'top-[-1024px] h-full'}`}>
          { 
            links.map(({name, link}, index)=>
              <li key={index} className="md:ml-8 text-l font-bold md:my-0 my-7">
                <Link href={link} className="text-white hover:text-blue-400">{name}</Link>
              </li>
            )
          }
        </ul>
        <div className={`md:static absolute w-20 min-[330px]:w-36 left-0 right-0 top-8 md:m-0 m-auto font-bold text-2xl cursor-pointer flex justify-between font-[Poppins]`}>
          <a href="https://www.instagram.com/" target="_blank">
            <BsInstagram className="w-3.5 min-[330px]:w-5 text-white hover:text-blue-400"/>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <BsFacebook className="w-3.5 min-[330px]:w-5 text-white hover:text-blue-400"/>
          </a>
          <a href="https://www.whatsapp.com/?lang=pt_br" target="_blank">
            <BsWhatsapp className="w-3.5 min-[330px]:w-5 text-white hover:text-blue-400"/>
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <BsYoutube className="w-3.5 min-[330px]:w-5 text-white hover:text-blue-400"/>
          </a>
        </div>
      </div>
    </section>
  )
}
