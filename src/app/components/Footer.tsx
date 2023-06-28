import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="h-auto w-full bg-blue-950 py-2 text-white md:px-6">
        <div className="flex flex-col justify-around space-x-2 py-2 pl-2 md:flex-row md:pb-2">
          <div className="text-center">
            <h2 className="pb-2 text-center text-lg font-bold md:text-xl">
              Horários
            </h2>
            <p className="text text-sm md:text-lg">Segunda, Quarta e Sexta:</p>
            <p className="text-sm md:text-base">9:00 - 10:00</p>
            <p className="text-sm md:text-base">19:00 - 20:00</p>
          </div>
          <div className="text-center">
            <h2 className="pb-2 pt-4 text-center text-lg font-bold md:text-xl">
              Endereço
            </h2>
            <p className="text-sm md:text-base">
              Av. Amaral Peixoto, nº0, Bairro Liberdade
            </p>
            <p className="text-sm md:text-lg">Esperança - SP</p>
          </div>
        </div>
      </footer>
      <div className="bg-black py-1 text-center text-[10px] text-white md:text-xs">
        Site desenvolvido por Consortes Digital, 2023, todos os direitos
        reservados.
      </div>
    </>
  )
}
