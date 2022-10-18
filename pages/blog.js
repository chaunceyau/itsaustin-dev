import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import { PostList } from '@/components/blog/PostList'
import { BasicCard } from '@/components/BasicCard'
import { PageSEO } from '@/components/SEO'

import { useState } from 'react'

export const POSTS_PER_PAGE = 10
const SHOULD_ENABLE_SEARCH = false
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const publishedPosts = posts.filter((p) => !p.draft)
  const initialDisplayPosts = publishedPosts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(publishedPosts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts: publishedPosts, pagination } }
}

export default function AllBlogPosts({ posts, initialDisplayPosts, pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <BasicCard title="All Posts" headingSize="3xl">
        {SHOULD_ENABLE_SEARCH && (
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="mb-4 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          />
        )}
        <PostList posts={displayPosts} />
      </BasicCard>
    </>
  )
}
