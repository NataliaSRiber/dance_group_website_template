import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { GrInstagram, GrFacebook, GrYoutube } from 'react-icons/gr';
import { RiWhatsappFill } from 'react-icons/ri';
import WhatsappIcon from './Whatsappicon';



const Contact = (props: any) => {
    return (
      <>
      <Nav />
      <section className='flex flex-col md:py-32 pt-32 pb-16 md:px-20 px-10'>
      <h1 className='text-3xl md:text-5xl text-gray-700 font-semibold text-center pb-10'>Contato</h1>
        {/* <div className='border border-y-blue-900 py-14 border-x-white'>
          <h1 className='text-3xl md:text-5xl text-gray-700 font-semibold text-center pb-20'>Contato</h1>
          <div className='text-xl text-left pb-8'>
            <p className='pb-4'>Quer saber mais sobre nós? Quer aprender a dançar?</p>
            <p>Contate-nos em nossas redes sociais:</p>
          </div>
          <div className='flex flex-row text-blue-950 justify-around text-3xl md:text-5xl md:w-2/3 lg:w-1/2 pt-10 w-full'>
            <a href="https://www.instagram.com/" target="_blank">
              <GrInstagram className="hover:text-blue-600"/>
            </a>    
            <a href="https://www.facebook.com/" target="_blank">
              <GrFacebook className="hover:text-blue-600"/>
            </a>         
            <a href="https://www.whatsapp.com/?lang=pt_br" target="_blank">
              <RiWhatsappFill className="hover:text-blue-600"/>
            </a>      
            <a href="https://www.youtube.com/" target="_blank">
              <GrYoutube className="hover:text-blue-600"/>
            </a>
          </div>
        </div> */}
        <div className='pt-8 text-xl text-left'>
          <h1 className='z md:pb-8 text-xl md:text-2xl pb-8 font-semibold text-center'>Diretoria e coordenações</h1>
          <div>
            <p className='font-medium text-lg md:text-lg pb-2'>Joaquina Silva</p>
            <p className='font-light text-sm md:text-lg pb-2'>Presidente</p>
            <p className='font-light text-sm md:text-lg pb-4'>Contato: (35)99800-2234</p>
          </div>
          <div>
            <p className='font-medium pb-2 text-md md:text-lg'>Rúbia Rosa</p>
            <p className='font-light text-sm md:text-lg pb-2'>Vice-Presidente</p>
            <p className='font-light text-sm md:text-lg pb-6'>Contato: (35)99800-2234</p>
          </div>
          <div>
            <p className='font-medium pb-2 text-md md:text-lg'>Carmen Lúcia</p>
            <p className='font-light text-sm md:text-lg pb-2'>Tesoureira</p>
            <p className='font-light text-sm md:text-lg pb-6'>Contato: (35)99800-2234</p>
          </div>
          <div>
            <p className='font-medium pb-2 text-md md:text-lg'>Lúcio Almeida</p>
            <p className='font-light text-sm md:text-lg pb-2'>Coordenadora de dança</p>
            <p className='font-light text-sm md:text-lg pb-6'>Contato: (35)99800-2234</p>
          </div>
        </div>
      </section>
      <WhatsappIcon />
      <Footer />
      </>
    );
}


export default Contact;