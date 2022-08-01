import { RecentPosts } from '@/components/landing/RecentPosts'
import { HeroBlock } from '@/components/landing/HeroBlock'
import { NowPlaying } from '@/components/landing/NowPlaying'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex flex-col gap-y-6">
        <HeroBlock />
        <RecentPosts posts={posts} />
        <NowPlaying />
      </div>
    </>
  )
}
