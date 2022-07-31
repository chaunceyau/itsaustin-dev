import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import * as icons from '@/components/BlogIcons'
const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

const BasicCard = ({ children }) => {
  return <div className="rounded-lg border px-6 py-4">{children}</div>
}

function HeroBlock() {
  return (
    <BasicCard>
      <h2 className="text-xl font-medium">👋 Hi, I'm Austin - </h2>
    </BasicCard>
  )
}

function NowPlaying() {
  return (
    <BasicCard>
      <h2 className="mb-4 text-xl font-bold">Now Playing</h2>
      <div className="mb-2 grid grid-cols-5 gap-x-4">
        <a href="https://www.surfacesmusic.com" target="_blank">
          <img
            className="mb-2 aspect-square	 rounded-lg object-cover"
            src="https://66.media.tumblr.com/9b69ac60fef23386e6ab01f86bd62953/c65658cdab350bbc-77/s540x810/0ab88e2df6be765617374e8f282871ae283431a2.jpg"
          />
        </a>
        <a href="https://www.aliciakeys.com/" target="_blank">
          <img
            className="mb-2 aspect-square	 rounded-lg object-cover"
            src="https://www.biography.com/.image/t_share/MTQ0NTk4NzY3ODM4OTYzMDMx/alicia_keys_michael_muller_nbc_nbcu_getty_images_592222308_profile.jpg"
          />
        </a>
        <a href="https://www.aliciakeys.com/" target="_blank">
          <img
            className="mb-2 aspect-square	 rounded-lg object-cover"
            src="https://www.essence.com/wp-content/uploads/2021/07/126320300_422382922255489_4024618295309104371_n.jpg?width=600"
          />
        </a>
        <a href="https://www.aliciakeys.com/" target="_blank">
          <img
            className="mb-2 aspect-square	 rounded-lg object-cover"
            src="https://www.billboard.com/wp-content/uploads/2021/08/soundopener-giveon-2021-bb11-tayo-kuku-billboard-2-1240-1628180503.jpg?w=1024"
          />
        </a>
        <a href="https://www.aliciakeys.com/" target="_blank">
          <img
            className="mb-2 aspect-square	 rounded-lg object-cover"
            src="https://www.dancehallmag.com/assets/2022/03/About-Me-Instagram-Post.png"
          />
        </a>
      </div>
      <div className="flex text-base font-medium leading-6">
        <Link
          href="/blog"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="all posts"
        >
          All Artists &rarr;
        </Link>
      </div>
    </BasicCard>
  )
}

const RecentPosts = ({ posts }) => (
  <BasicCard>
    <div className="space-y-2 pb-6 md:space-y-6">
      <ul className="flex flex-col gap-y-4">
        {posts?.length > 0 ? (
          <h2 className="text-xl font-bold">Recent Posts</h2>
        ) : (
          <p>No posts found.</p>
        )}
        {posts
          .slice(0, MAX_DISPLAY)
          .map(({ slug, date, title, icon, summary, tags, heroImage }) => {
            console.log(icon)
            const IconComponent = icons[icon]
            return (
              <div className="flex hover:pl-1 duration-300 text-primary-500" key={slug}>
                {IconComponent && (
                  <div className="mt-[0.35rem] h-full w-4">
                    <IconComponent />
                  </div>
                )}
                <a href="https://google.com" className="pl-3">
                  <h2 className="text-lg font-medium mb-px">{title}</h2>
                  <p className="text-gray-600">{summary}</p>
                </a>
              </div>
            )
          })}
      </ul>
    </div>
    {posts.length > MAX_DISPLAY && (
      <div className="flex text-base font-medium leading-6">
        <Link
          href="/blog"
          className="text-gray-600 text-sm"
          // className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="all posts"
        >
          Read All Posts &rarr;
        </Link>
      </div>
    )}
  </BasicCard>
)

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex flex-col gap-y-6">
        {/* <HeroBlock /> */}
        <RecentPosts posts={posts} />
        <NowPlaying />
      </div>
    </>
  )
}
