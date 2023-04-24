import Button from "./Button"
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsInstagram, BsWhatsapp, BsFacebook, BsYoutube } from 'react-icons/bs';

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const links = [
    // {name: "HOME", link: "/"},
    // {name: "ABOUT", link: "/"},
    // {name: "SERVICE", link: "/"},
    // {name: "CONTACT", link: "/"},
    {name: "SOBRE", link: "/About"},
    {name: "GALERIA DE FOTOS", link: "/OurPhotos"},
    {name: "NOSSOS VÍDEOS", link: "/OurYoutubeVideos"},
  ]

  const [open, setOpen] = useState(false);

  return (
    <div className="z-10 shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-amber-600 py-4 md:px-10 px-7">
        <div className="text-3xl text-white mr-1 pt-2">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
            <span>Logo</span>
          </div>
        </div>
        <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          {open && <AiOutlineClose  color="white"/>}
          {!open && <GiHamburgerMenu color="white"/>}        
        </div>
        {/* o z-[-1]  esta dando problema procurar sobre */}
        <ul className={`z-0 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-amber-600 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20': 'top-[-490px]'}`}>
          { 
            links.map(({name, link}, index)=>
              <li key={index} className="md:ml-8 text-l font-bold md:my-0 my-7">
                <Link href={link} className="text-white hover:text-amber-950 duration-500">{name}</Link>
              </li>
            )
          }
          {/* <Button>Get Started</Button > */}
        </ul>
        {/* <div className="w-30 font-bold text-2xl cursor-pointer flex p-3 justify-between font-[Poppins] text-sky-600" >
          <BsInstagram className="pr-2" size='30px'/>
          <BsFacebook className="pr-2" size='30px'/>
          <BsWhatsapp size='25px'/>
          <BsYoutube size='30px'/>
        </div> */}
      </div>
    </div>
  )
}
