import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, children, next, prev }) {
  const { slug, date, title, tags } = frontMatter
  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <article className="mx-auto max-w-4xl">
        <PostLayoutHeader date={date} title={title} tags={tags} />
        <PostLayoutBody children={children} />
      </article>
      {next || prev ? (
        <div className="mx-auto mb-20 mt-10 flex max-w-4xl justify-between">
          <div>{!!prev && <Link href={`/blog/${prev.slug}`}>Previous</Link>}</div>
          <div>{!!next && <Link href={`/blog/${next.slug}`}>Next</Link>}</div>
        </div>
      ) : null}
    </SectionContainer>
  )
}

const PostLayoutHeader = ({ date, title, tags }) => (
  <header className="pt-6 xl:pb-6">
    <dl className="space-y-10">
      <div>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
          </time>
        </dd>
      </div>
    </dl>
    <div className="mb-4">
      <PageTitle>{title}</PageTitle>
    </div>
    <div className="flex gap-x-2">
      {tags?.map((tag) => (
        <Tag text={tag} />
      ))}
    </div>
    {/* <hr className="border-px mt-8" /> */}
  </header>
)

const PostLayoutBody = ({ children }) => (
  <div className="prose max-w-none pb-8 dark:prose-dark">{children}</div>
)
