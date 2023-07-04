import React from 'react'
import { presentations } from '../lib/presentations'

export default function OurYouTubeVideos() {
  return (
    <>
      <section className="flex items-center text-gray-600 md:h-full">
        <div className="container mx-auto pb-16 pt-32">
          <div className="pb-10 text-center md:pb-20">
            <h1 className="px-2 text-2xl font-semibold text-gray-700 md:text-5xl">
              Assista algumas de nossas apresentações
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
            {presentations.map(
              ({ title, description, date, videoUrl }, index) => (
                <div key={index} className="p-4 md:w-1/2 xl:w-1/3">
                  <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                    <iframe
                      className="aspect-video w-full"
                      src={videoUrl}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="cursor-pointer p-6 transition duration-300 ease-in hover:bg-blue-950 hover:text-gray-100">
                      <h2 className="mb-1 text-sm font-medium text-blue-300 md:text-base">
                        {date}
                      </h2>
                      <h1 className="mb-3 text-xl font-semibold md:text-2xl">
                        {title}
                      </h1>
                      <p className="mb-3 leading-relaxed">{description}</p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  )
}
