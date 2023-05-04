import React from 'react';


const Footer = (props: any) => {
    return (
      <footer className="bg-blue-950 text-white font-[Poppins] py-2 px-6 w-full">
        <div className='flex flex-row place-content-evenly p-2 pb-10'>
          <div className='text-justify'>
            <h2 className='md:text-xl font-bold pb-2 text-center'>Horários</h2>
            <p>Segunda, quarta e sexta:</p>
            <p>19:00 - 20:00</p>
          </div>
          <div className='text-justify'>
            <h2 className='md:text-xl font-bold pb-2 text-center'>Endereço</h2>
            <p>Avenida Amaral Peixoto, nº710, Bairro Liberdade</p>
            <p>Balneário Camboriú - SC</p>
          </div>
        </div>
        <p className='text-center text-xs'>Site desenvolvido por @NJLinger 2023, todos os direitos reservados.</p>
      </footer>
    );
}


export default Footer;
