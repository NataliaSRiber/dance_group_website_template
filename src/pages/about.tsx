import React from 'react';
import Image from 'next/image'
import hotel from './hotel-resort.jpg'

const AboutUs = () => {
    return (
      <div className='z-[-2]'>
        {/* <div className="bg-indigo-600 text-white font-[Poppins] hover:bg-indigo-400 duration-500 w-full h-64">
        </div> */}
        <Image 
          className='w-full h-80'
          src={hotel}
          alt="Picture of the author"
        />
        <h1 className='text-pink-600 text-4xl text-center py-20 font-bold'>Quem somos nós?</h1>
          <p className='text-xl text-justify px-20 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, velit a luctus vulputate, orci erat consectetur neque, quis dignissim erat ligula at lacus. Quisque nec purus nec augue tristique rutrum ac imperdiet mi. Nulla consectetur risus vel ante venenatis, eu fermentum lorem placerat. Nunc viverra lobortis mauris, id rhoncus elit rutrum quis. Praesent feugiat finibus enim, sed tempor tortor dictum in. Sed eros magna, pulvinar id mollis in, ornare ac nunc. Donec non sagittis felis. Fusce congue quam velit. Vivamus non elit risus. Duis ante nibh, porttitor in ipsum a, luctus dapibus lectus. Praesent facilisis, felis et viverra vehicula, metus turpis accumsan velit, ut sollicitudin risus mauris non nisl. Mauris mattis lobortis mauris ut varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at vehicula est. Proin egestas, nisl eu semper aliquet, libero quam aliquam nunc, nec rhoncus mi nibh ut nunc.

            Curabitur consectetur, erat eu euismod eleifend, mauris nibh feugiat eros, et dignissim lacus augue non ante. Suspendisse venenatis consectetur sem vel mattis. Nunc eget sapien vitae mauris vulputate volutpat quis sed erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sollicitudin leo neque, vel vulputate mi sagittis a. Cras eget sapien iaculis, egestas leo eget, suscipit risus. Aliquam auctor leo non imperdiet ullamcorper. Curabitur ac justo eget ex dictum vehicula. Ut tristique consequat magna ut convallis.

            Donec et pharetra ipsum. Integer non quam facilisis, feugiat sapien non, varius justo. Phasellus in mi vel ante tristique dignissim sit amet sed ligula. Quisque et dapibus quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam volutpat varius massa, eu malesuada justo facilisis et. Nulla a nulla libero. Donec non consequat tortor. Proin tempor, augue a vestibulum egestas, elit velit pharetra diam, vitae auctor arcu dolor faucibus magna. Duis vel vulputate elit. Sed volutpat lectus sit amet dolor pharetra sollicitudin id id tellus.

            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Ut eleifend blandit dolor, fermentum pretium ipsum maximus quis. Aenean pulvinar elit ante, vehicula iaculis diam fermentum vulputate. Sed euismod, mauris id eleifend aliquet, ipsum leo vulputate nulla, sit amet sodales urna nisi vel eros. Suspendisse aliquet arcu pretium egestas ullamcorper. Etiam sed imperdiet tortor, eu molestie enim. Etiam dapibus interdum neque, nec laoreet dolor varius sed. Aenean dui lacus, fermentum ut nibh eget, efficitur tincidunt mi. Duis tincidunt ac orci vel imperdiet. Etiam et leo at diam porttitor vehicula. Nulla eget elit ultrices, aliquet tortor ut, convallis purus. Etiam molestie tellus sit amet ex facilisis, vel eleifend metus placerat.

            Etiam hendrerit ante dui, in finibus diam sollicitudin ac. Fusce lobortis orci ligula, quis molestie arcu hendrerit nec. Duis eu nulla vel mi fringilla molestie vel id massa. Curabitur ut malesuada dui. Duis pretium lacus id dui sagittis pretium. Ut accumsan quam a risus tempor, interdum pellentesque erat pulvinar. Nunc massa neque, mollis in congue id, scelerisque at ipsum. Nam aliquam tellus non ligula mollis cursus. In vel molestie nulla, non mattis turpis. Nunc sed urna ac lacus ultricies aliquam sodales nec massa.
        </p>
      </div>
    );
}


export default AboutUs;
