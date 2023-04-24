import React from 'react';


const Footer = (props: any) => {
    return (
      <footer className="bg-pink-600 text-white font-[Poppins] py-2 px-6 bottom-0 fixed w-full flex flex-row place-content-evenly p-3">
        <div>
          <h2 className='text-xl font-bold'>Horários</h2>
          <p>Segunda, quarta e sexta:</p>
          <p>19:00 - 20:00</p>
        </div>
        <div>
          <h2 className='text-xl font-bold'>Endereço</h2>
          <p>Avenida Amaral Peixoto, nº710, Bairro Liberdade</p>
          <p>São Paulo - SP</p>
        </div>
      </footer>
    );
}


export default Footer;
