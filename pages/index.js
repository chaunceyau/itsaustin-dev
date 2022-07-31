import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import {PostCard} from '@/components/PostCard'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const MAX_DISPLAY = 20

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

// function HeroBlock() {
//   return (
//     <div>
//       <h2>👋 Hi, I'm Austin Chauncey</h2>
//     </div>
//   )
// }

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 pb-8 md:space-y-6">
        {/* <h1 className="text-lg font-extrabold leading-9 tracking-tight text-indigo-500 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Blog Posts
        </h1> */}
        <ul className="grid grid-cols-2 gap-x-8 gap-y-10 pb-8">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map(({ slug, date, title, summary, tags, heroImage }) => {
            return (
              <PostCard
                slug={slug}
                date={date}
                tags={tags}
                title={title}
                summary={summary}
                heroImage={heroImage}
              />
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
