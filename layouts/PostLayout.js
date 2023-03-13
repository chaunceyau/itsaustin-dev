import React from 'react'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import Image from '@/components/Image'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, children, authorDetails, next, prev }) {
  const { slug, date, title, tags, quotedIndividuals } = frontMatter
  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <article className="mx-auto max-w-3xl">
        <PostLayoutHeader
          date={date}
          title={title}
          tags={tags}
          quotedIndividuals={quotedIndividuals}
        />
        <PostLayoutBody>{children}</PostLayoutBody>
      </article>
      {next || prev ? (
        <div className="mx-auto mb-20 mt-10 flex max-w-3xl justify-between">
          <div>{!!prev && <Link href={`/blog/${prev.slug}`}>Previous</Link>}</div>
          <div>{!!next && <Link href={`/blog/${next.slug}`}>Next</Link>}</div>
        </div>
      ) : null}
    </SectionContainer>
  )
}

const PostLayoutHeader = ({ date, title, tags, quotedIndividuals }) => (
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
    <div className="mb-6 flex gap-x-2">
      {tags?.map((tag) => (
        <Tag text={tag} key={tag} />
      ))}
    </div>
    {quotedIndividuals?.length > 0 && (
      <div className="flex">
        <div className="flex items-center justify-center">
          <h1 className="mb-3 text-sm -rotate-90 mt-3 text-gray-600 -ml-12 font-light">Quotes</h1>
        </div>
        <div className="flex gap-4 flex-wrap">
          {quotedIndividuals.map((q) => (
            <QuotedIndividual key={q.name} {...q} />
          ))}
        </div>
      </div>
    )}
    {/* <hr className="border-px mt-8" /> */}
  </header>
)

const QuotedIndividual = ({ name, title, avatarFilePath }) => (
  <div className="border rounded px-3 py-2 flex items-center shadow-sm">
    <div className="flex items-center overflow-hidden">
      <Image
        width={36}
        height={36}
        src={avatarFilePath}
        className="rounded-full m-0 object-cover"
        alt={name + ' profile image'}
      />
    </div>
    <div className="ml-3">
      <p className="font-medium">{name}</p>
      <p className="text-sm">{title}</p>
    </div>
  </div>
)

const PostLayoutBody = ({ children }) => {
  return <div className="prose max-w-none pb-8 dark:prose-dark">{children}</div>
}
