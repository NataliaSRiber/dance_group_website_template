'use client'
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

export default function MapComponent() {
  const center = {
    lat: -23.5489,
    lng: -46.6388,
  }
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  })
  return (
    <div className="h-96 w-full px-4 md:px-0">
      <h1 className="pb-8 text-center text-xl font-bold text-blue-400 md:pb-8 md:text-2xl">
        Localização
      </h1>
      <p className="px-6 pb-6 text-left text-sm font-light md:px-10 md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '80%' }}
          center={center}
          zoom={15}
        >
          <Marker
            position={center}
            options={{
              label: {
                text: 'Grupo de Dança',
                className: '-mt-8 font-bold',
              },
            }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  )
}
