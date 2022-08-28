import { BasicCard } from '@/components/BasicCard'

const ARTISTS = [
  {
    href: 'https://www.surfacesmusic.com',
    imgSrc:
      'https://66.media.tumblr.com/9b69ac60fef23386e6ab01f86bd62953/c65658cdab350bbc-77/s540x810/0ab88e2df6be765617374e8f282871ae283431a2.jpg',
  },
  {
    href: 'https://www.aliciakeys.com',
    imgSrc:
      'https://www.biography.com/.image/t_share/MTQ0NTk4NzY3ODM4OTYzMDMx/alicia_keys_michael_muller_nbc_nbcu_getty_images_592222308_profile.jpg',
  },
  {
    href: 'https://www.aliciakeys.com',
    imgSrc:
      'https://www.essence.com/wp-content/uploads/2021/07/126320300_422382922255489_4024618295309104371_n.jpg?width=600',
  },
  {
    href: 'https://www.aliciakeys.com',
    imgSrc:
      'https://www.billboard.com/wp-content/uploads/2021/08/soundopener-giveon-2021-bb11-tayo-kuku-billboard-2-1240-1628180503.jpg?w=1024',
  },
  {
    href: 'https://www.aliciakeys.com',
    imgSrc: 'https://www.dancehallmag.com/assets/2022/03/About-Me-Instagram-Post.png',
  },
]

const NowPlayingCard = ({ href, imgSrc }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img
      className="mb-2 aspect-square rounded-lg object-cover shadow-sm duration-300 hover:scale-105 hover:transform"
      src={imgSrc}
    />
  </a>
)

export const NowPlaying = () => {
  return (
    <BasicCard title="Now Playing" readMore={{ href: '/blog', label: 'All Artists' }}>
      <div className="mb-2 grid grid-cols-5 gap-x-4">
        {ARTISTS.map(({ href, imgSrc }) => (
          <NowPlayingCard key={imgSrc} href={href} imgSrc={imgSrc} />
        ))}
      </div>
    </BasicCard>
  )
}
