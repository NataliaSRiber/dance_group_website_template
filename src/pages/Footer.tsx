import React from 'react';


const Footer = (props: any) => {
    return (
      <>
        <footer className="bg-blue-950 text-white py-2 md:px-6 w-full h-auto body-font font-instrument">
          <div className='flex flex-row justify-around pl-2 md:pb-6 py-5 space-x-2'>
            <div className='text-center'>
              <h2 className='md:text-xl text-lg font-bold pb-2 text-center'>Horários</h2>
              <p className='md:text-lg text-sm text'>Segunda, quarta e sexta:</p>
              <p className='md:text-lg text-sm'>19:00 - 20:00</p>
            </div>
            <div className='text-center'>
              <h2 className='md:text-xl text-lg font-bold pb-2 text-center'>Endereço</h2>
              <p className='md:text-lg text-sm'>Avenida Amaral Peixoto, nº710, Bairro Liberdade</p>
              <p className='md:text-lg text-sm'>Balneário Camboriú - SC</p>
            </div>
          </div>
        </footer>
          <div className='text-center md:text-xs text-[10px] bg-blue-800 text-white py-1'>Site desenvolvido por @NJLinger 2023, todos os direitos reservados.</div>
      </>
    );
}


export default Footer;
