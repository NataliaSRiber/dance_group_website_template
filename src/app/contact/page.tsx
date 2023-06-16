import React from 'react'

export default function Contact() {
  return (
    <>
      <section className="flex flex-col px-10 pb-16 pt-32 md:px-20 md:py-32">
        <h1 className="pb-10 text-center text-2xl font-semibold text-gray-700 md:text-5xl">
          Contato
        </h1>
        <div className="text-left text-xl">
          <h1 className="z pb-8 text-center text-xl font-bold text-blue-400 md:pb-8 md:text-2xl">
            Diretoria e coordenações
          </h1>
          <div>
            <p className="pb-2 text-lg font-semibold md:text-lg">
              Joaquina Silva
            </p>
            <p className="pb-2 text-sm font-light md:text-lg">Presidente</p>
            <p className="pb-4 text-sm font-light md:text-lg">
              Contato: (35)99800-2234
            </p>
          </div>
          <div>
            <p className="text-md pb-2 font-semibold md:text-lg">Rúbia Rosa</p>
            <p className="pb-2 text-sm font-light md:text-lg">
              Vice-Presidente
            </p>
            <p className="pb-6 text-sm font-light md:text-lg">
              Contato: (35)99800-2234
            </p>
          </div>
          <div>
            <p className="text-md pb-2 font-semibold md:text-lg">
              Carmen Lúcia
            </p>
            <p className="pb-2 text-sm font-light md:text-lg">Tesoureira</p>
            <p className="pb-6 text-sm font-light md:text-lg">
              Contato: (35)99800-2234
            </p>
          </div>
          <div>
            <p className="text-md pb-2 font-semibold md:text-lg">
              Lúcio Almeida
            </p>
            <p className="pb-2 text-sm font-light md:text-lg">
              Coordenador de dança
            </p>
            <p className="pb-6 text-sm font-light md:text-lg">
              Contato: (35)99800-2234
            </p>
            <p className="pb-6 text-sm font-light md:text-lg">
              Email: grupodança@lalla.com.br
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
