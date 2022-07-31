import albums from '@/data/gallery/albums'
import Link from 'next/link'
// import { getFileBySlug } from '@/lib/mdx'

// export async function getStaticProps() {
//   const authorDetails = await getFileBySlug('authors', ['default'])
//   return { props: { authorDetails } }
// }

export default function Gallery({}) {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Gallery</h1>
      <ul className="flex flex-col gap-y-6">
        {albums.map(({ imageSource, slug, title }) => (
          <li>
            <Link href={`/albums/${slug}`}>
              <div
                className={`bg-[url('/static/${imageSource}')] object-middle flex h-52 cursor-pointer items-end rounded-xl bg-[rgb(0,0,0,0.5)] bg-bottom bg-blend-overlay`}
              >
                <h3 className="mb-6 ml-7 text-2xl font-bold text-white">{title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
