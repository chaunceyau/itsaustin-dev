/* eslint-disable react/display-name */
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { useMemo } from 'react'

import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'

export const MDXComponents = {
  Tweet: ({ content, author, tweetId }) => {
    return (
      <a
        href={`https://twitter.com/${author}/status/${tweetId}`}
        style={{ textDecoration: 'none' }}
      >
        <div className="border rounded-lg p-4 text-gray-500 flex">
          <div className="pr-4 pl-2">
            <p className="m-0">{content}</p>
            <div className="flex items-center pt-4 pb-2">
              <img
                className="h-10 w-10 rounded-full m-0"
                src="https://pbs.twimg.com/profile_images/1545194945161707520/rqkwPViA_400x400.jpg"
                alt={author + ' profile image'}
              />
              <p className="ml-4 my-0">@{author}</p>
            </div>
          </div>
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              viewBox="0 0 248 204"
              height="14"
              className="mt-2"
            >
              <path
                fill="#1d9bf0"
                d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
              />
            </svg>
          </div>
        </div>
      </a>
    )
  },
  TwitterTweetEmbed,
  Image: (args) => {
    console.log('args')
    console.log(args)
    console.log('../public' + args.src)
    if (!args.src) return null
    // const image = require('../public' + args.src)
    // const image = require(args.src)
    // const image = require('../public/static/images/outbox-blog-basic.png')
    return <Image alt={args.alt} src={args.src} width={args.width} height={args.height} />
  },
  TOCInline,
  a: CustomLink,
  pre: Pre,
  blockquote: (args) => {
    const isQuoteChildrenAnArray = Array.isArray(args.children?.props?.children)

    const inspect = isQuoteChildrenAnArray
      ? args.children?.props?.children[0]
      : args.children?.props?.children
    const keywords = [':quote:', ':author:', ':jobRole', ':source:', ':sourceUrl:']

    const authorIndex = inspect.indexOf(':author:')
    const jobRoleIndex = inspect.indexOf(':jobRole:')
    const sourceIndex = inspect.indexOf(':source:')
    const sourceUrlIndex = inspect.indexOf(':sourceUrl:')

    const quote = inspect.substring(':quote:'.length, authorIndex - 1)
    const author = inspect.substring(authorIndex + ':author:'.length, jobRoleIndex - 1)
    const jobRole = inspect.substring(jobRoleIndex + ':jobRole:'.length, sourceIndex - 1)
    const source = inspect.substring(sourceIndex + ':source:'.length, sourceUrlIndex - 1)
    const sourceUrl = inspect.substring(sourceUrlIndex + ':sourceUrl:'.length)

    if (!quote) return <span>quote missing</span>

    return (
      <div className="flex w-full flex-col border-l-4 border-indigo-500 bg-indigo-200 bg-opacity-90 py-3 px-4">
        <span className="ml-2 text-sm text-indigo-600">{quote}</span>
        <span className="ml-2 mt-2 text-xs font-light text-indigo-600">
          ∙ {author}, {jobRole}
        </span>
      </div>
    )
  },
  // BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
