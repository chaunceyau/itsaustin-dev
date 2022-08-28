import { BasicCard } from '@/components/BasicCard'
import { PostList } from '@/components/blog/PostList'

const MAX_DISPLAY = 5

export const RecentPosts = ({ posts }) => (
  <BasicCard
    title="Recent Posts"
    readMore={posts.length > MAX_DISPLAY ? { href: '/blog', label: 'All Posts' } : null}
  >
    <PostList posts={posts} maxNumPostsToDisplay={MAX_DISPLAY} />
  </BasicCard>
)
