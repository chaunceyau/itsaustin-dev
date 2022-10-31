import { BasicCard } from '@/components/BasicCard'
import { PostList } from '@/components/blog/PostList'

const MAX_DISPLAY = 5

const POSTS = [{ title: 'Interesting read' }]

export const FavoriteReads = () => (
  <BasicCard
    title="Favorite Reads"
    readMore={POSTS.length > MAX_DISPLAY ? { href: '/favorites', label: 'All Posts' } : null}
  >
    <PostList posts={POSTS} maxNumPostsToDisplay={MAX_DISPLAY} />
  </BasicCard>
)
