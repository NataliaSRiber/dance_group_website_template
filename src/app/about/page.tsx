'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import about from '../../assets/about.jpeg'

export default function Home() {
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
          className="h-full w-full brightness-50"
          src={about}
          alt="Picture of the author"
        />
        <div className="absolute top-1/2 w-full truncate text-white">
          <h1
            className={`${
              animation &&
              'translate-x-full transform transition delay-1000 duration-[900ms] ease-in'
            } text-md relative left-[-100%] font-bold tracking-wide md:pb-8 md:text-5xl`}
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
      <div className="mx-auto flex flex-col px-10 py-10 md:px-20 md:py-20">
        <h1 className="pb-10 text-center text-2xl font-semibold text-gray-700 md:pb-20 md:text-5xl">
          Sobre nós
        </h1>
        <p className="text-md text-justify md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          sollicitudin, velit a luctus vulputate, orci erat consectetur neque,
          quis dignissim erat ligula at lacus. Quisque nec purus nec augue
          tristique rutrum ac imperdiet mi. Nulla consectetur risus vel ante
          venenatis, eu fermentum lorem placerat. Nunc viverra lobortis mauris,
          id rhoncus elit rutrum quis. Praesent feugiat finibus enim, sed tempor
          tortor dictum in. Sed eros magna, pulvinar id mollis in, ornare ac
          nunc. Donec non sagittis felis. Fusce congue quam velit. Vivamus non
          elit risus. Duis ante nibh, porttitor in ipsum a, luctus dapibus
          lectus. Praesent facilisis, felis et viverra vehicula, metus turpis
          accumsan velit, ut sollicitudin risus mauris non nisl. Mauris mattis
          lobortis mauris ut varius. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Praesent at vehicula est. Proin egestas, nisl eu
          semper aliquet, libero quam aliquam nunc, nec rhoncus mi nibh ut nunc.
          Curabitur consectetur, erat eu euismod eleifend, mauris nibh feugiat
          eros, et dignissim lacus augue non ante. Suspendisse venenatis
          consectetur sem vel mattis. Nunc eget sapien vitae mauris vulputate
          volutpat quis sed erat. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas. Etiam sollicitudin leo
          neque, vel vulputate mi sagittis a. Cras eget sapien iaculis, egestas
          leo eget, suscipit risus. Aliquam auctor leo non imperdiet
          ullamcorper. Curabitur ac justo eget ex dictum vehicula. Ut tristique
          consequat magna ut convallis. Donec et pharetra ipsum. Integer non
          quam facilisis, feugiat sapien non, varius justo. Phasellus in mi vel
          ante tristique dignissim sit amet sed ligula. Quisque et dapibus quam.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nam volutpat varius massa, eu malesuada justo
          facilisis et. Nulla a nulla libero. Donec non consequat tortor. Proin
          tempor, augue a vestibulum egestas, elit velit pharetra diam, vitae
          auctor arcu dolor faucibus magna. Duis vel vulputate elit. Sed
          volutpat lectus sit amet dolor pharetra sollicitudin id id tellus.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. In hac habitasse platea dictumst. Ut eleifend
          blandit dolor, fermentum pretium ipsum maximus quis. Aenean pulvinar
          elit ante, vehicula iaculis diam fermentum vulputate. Sed euismod,
          mauris id eleifend aliquet, ipsum leo vulputate nulla, sit amet
          sodales urna nisi vel eros. Suspendisse aliquet arcu pretium egestas
          ullamcorper. Etiam sed imperdiet tortor, eu molestie enim. Etiam
          dapibus interdum neque, nec laoreet dolor varius sed. Aenean dui
          lacus, fermentum ut nibh eget, efficitur tincidunt mi. Duis tincidunt
          ac orci vel imperdiet. Etiam et leo at diam porttitor vehicula. Nulla
          eget elit ultrices, aliquet tortor ut, convallis purus. Etiam molestie
          tellus sit amet ex facilisis, vel eleifend metus placerat. Etiam
          hendrerit ante dui, in finibus diam sollicitudin ac. Fusce lobortis
          orci ligula, quis molestie arcu hendrerit nec. Duis eu nulla vel mi
          fringilla molestie vel id massa. Curabitur ut malesuada dui. Duis
          pretium lacus id dui sagittis pretium. Ut accumsan quam a risus
          tempor, interdum pellentesque erat pulvinar. Nunc massa neque, mollis
          in congue id, scelerisque at ipsum. Nam aliquam tellus non ligula
          mollis cursus. In vel molestie nulla, non mattis turpis. Nunc sed urna
          ac lacus ultricies aliquam sodales nec massa.
        </p>
      </div>
    </>
  )
}
