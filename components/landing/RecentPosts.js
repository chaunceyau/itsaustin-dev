import { BasicCard } from '@/components/BasicCard'
import { PostList } from '@/components/blog/PostList'
import Link from '@/components/Link'

const MAX_DISPLAY = 3

export const RecentPosts = ({ posts }) => (
  <BasicCard title="Recent Posts">
    <PostList posts={posts} maxNumPostsToDisplay={MAX_DISPLAY} />
    {posts.length > MAX_DISPLAY && (
      <div className="flex text-base font-medium leading-6">
        <Link
          href="/blog"
          className="text-sm text-gray-600"
          // className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="all posts"
        >
          Read All Posts &rarr;
        </Link>
      </div>
    )}
  </BasicCard>
)
