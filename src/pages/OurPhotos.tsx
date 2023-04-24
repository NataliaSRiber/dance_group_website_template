import React from 'react';
import Image from 'next/image'
import hotel from './hotel-resort.jpg'

const OurPhotos = () => {
    return (
      <>
      <h1 className='text-pink-600 text-4xl text-center py-20 font-bold'>Algumas de nossas apresentações!</h1>
      <div>
        <ul>
          <li>
            <div>
              <iframe src='https://www.youtube.com/embed/v=mcSPTHa_rak'>

              </iframe>
              <h2>David Bowie - As The World falls down</h2>
              <p>Labyrinth original movie soundtrack</p>
            </div>
          </li>
        </ul>


        <p className='text-xl text-justify px-20 '>
           
        </p>
      </div>
      </>
    );
}


export default OurPhotos;