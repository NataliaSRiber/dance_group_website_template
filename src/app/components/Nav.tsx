import Link from 'next/link'
import Menu from './Menu'

import { BsInstagram, BsWhatsapp, BsFacebook, BsYoutube } from 'react-icons/bs'

export default function Nav() {
  return (
    <section className="fixed top-0 z-10 w-full shadow-md">
      <div className="items-center justify-between bg-blue-950 px-7 py-5 md:flex md:px-10">
        <div className="mr-1 pt-2 text-3xl text-gray-100">
          <div className="flex cursor-pointer items-center text-2xl font-bold">
            <Link href="/">
              <span>Logo</span>
            </Link>
          </div>
        </div>

        <Menu />

        <div className="absolute left-0 right-0 top-8 m-auto flex w-20 cursor-pointer justify-between text-2xl font-bold min-[330px]:w-36 md:static md:m-0">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <BsInstagram className="w-3.5 text-gray-100 hover:text-blue-400 min-[330px]:w-5" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <BsFacebook className="w-3.5 text-gray-100 hover:text-blue-400 min-[330px]:w-5" />
          </a>
          <a
            href="https://www.whatsapp.com/?lang=pt_br"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp className="w-3.5 text-gray-100 hover:text-blue-400 min-[330px]:w-5" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <BsYoutube className="w-3.5 text-gray-100 hover:text-blue-400 min-[330px]:w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
