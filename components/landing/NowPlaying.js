import { BasicCard } from '@/components/BasicCard'
import Image from 'next/image'

const ARTISTS = [
  {
    name: 'Surfaces',
    href: 'https://www.surfacesmusic.com',
    imgSrc: require('public/static/images/now-playing/surfaces.jpeg'),
  },
  {
    name: 'Alicia Keys',
    href: 'https://www.aliciakeys.com',
    imgSrc: require('public/static/images/now-playing/alicia-keys.jpeg'),
  },
  {
    name: 'Tems',
    href: 'https://www.leadingvibe.com/',
    imgSrc: require('public/static/images/now-playing/tems.webp'),
  },
  {
    name: 'Giveon',
    href: 'https://www.giveonofficial.com/',
    imgSrc: require('public/static/images/now-playing/giveon.webp'),
  },
  {
    name: 'Koffee',
    href: 'https://www.originalkoffee.com/',
    imgSrc: require('public/static/images/now-playing/koffee.png'),
  },
]

const NowPlayingCard = ({ href, imgSrc, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="rounded-lg">
    <Image
      className="mb-2 aspect-square rounded-lg object-cover shadow-sm duration-300 hover:scale-105 hover:transform"
      src={imgSrc}
      alt={alt}
      width={250}
      height={250}
      placeholder="blur"
    />
  </a>
)

export const NowPlaying = () => {
  return (
    <BasicCard title="Now Playing" readMore={{ href: '/blog', label: 'All Artists' }}>
      <div className="mb-2 grid grid-cols-5 gap-x-4">
        {ARTISTS.map(({ href, imgSrc, name }) => (
          <NowPlayingCard key={imgSrc} href={href} imgSrc={imgSrc} alt={name} />
        ))}
      </div>
    </BasicCard>
  )
}
