import Link from '@/components/Link'
import * as icons from '@/components/blog/BlogIcons'

export const PostList = ({ posts, maxNumPostsToDisplay }) => (
  <div className="space-y-2 pb-6 md:space-y-6">
    <ul className="flex flex-col gap-y-4">
      {posts.length === 0 && <p>No posts found.</p>}
      {posts
        .slice(0, maxNumPostsToDisplay)
        .map(({ slug, date, title, icon, summary, tags, heroImage }) => {
          const IconComponent = icons[icon]
          return (
            <Link
              href={'/blog/' + slug}
              className="flex text-primary-500 duration-300 hover:pl-1"
              key={slug}
            >
              {IconComponent && (
                <div className="mt-[0.35rem] h-full w-4">
                  <IconComponent />
                </div>
              )}
              <div className="pl-3">
                <h2 className="mb-px text-lg font-medium">{title}</h2>
                <p className="text-gray-500 dark:text-gray-400">{summary}</p>
              </div>
            </Link>
          )
        })}
    </ul>
  </div>
)
