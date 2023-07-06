import { StaticImageData } from 'next/image'
import dance1 from '../../assets/dance-1.jpg'
import dance2 from '../../assets/dance-2.jpg'
import dance3 from '../../assets/dance-3.jpg'
import dance4 from '../../assets/dance-4.jpg'
import danceMobile from '../../assets/dance-mobile.jpg'

export interface IPresentations {
  title: string
  description: string
  date: string
  pictures: StaticImageData[]
  videoUrl: string
}

export const presentations: IPresentations[] = [
  {
    title: 'Apresentação dia das mães',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lorem et neque rhoncus sagittis vel vitae urna. Aenean feugiat orci in fermentum malesuada. Donec libero erat, bibendum eget vehicula nec, vestibulum id mauris.',
    date: 'October 21, 2020',
    pictures: [
      dance1,
      dance2,
      dance3,
      dance4,
      dance1,
      dance2,
      dance3,
      dance4,
      danceMobile,
    ],
    videoUrl: 'https://www.youtube.com/embed/HjBXLCjvE0Q',
  },
  {
    title: 'Apresentação de Natal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lorem et neque rhoncus sagittis vel vitae urna. Aenean feugiat orci in fermentum malesuada. Donec libero erat, bibendum eget vehicula nec, vestibulum id mauris.',
    date: 'October 21, 2020',
    pictures: [
      dance1,
      dance2,
      dance3,
      dance4,
      dance1,
      dance2,
      dance3,
      dance4,
      danceMobile,
    ],
    videoUrl: 'https://www.youtube.com/embed/xPdEjrWP76s',
  },
  {
    title: 'Apresentação dia internacional da mulher',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lorem et neque rhoncus sagittis vel vitae urna. Aenean feugiat orci in fermentum malesuada. Donec libero erat, bibendum eget vehicula nec, vestibulum id mauris.',
    date: 'October 21, 2020',
    pictures: [
      dance1,
      dance2,
      dance3,
      dance4,
      dance1,
      dance2,
      dance3,
      dance4,
      danceMobile,
    ],
    videoUrl: 'https://www.youtube.com/embed/BJy6sR0-MVQ',
  },
]
