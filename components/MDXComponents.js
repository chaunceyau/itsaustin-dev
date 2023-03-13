/* eslint-disable react/display-name */
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { useMemo } from 'react'

import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'

export const MDXComponents = {
  h1: ({ children }) => <h1 className="mb-4">{children}</h1>,
  Tweet: ({ content, author, tweetId, authorAvatarFilePath }) => {
    // <Tweet
    //   author="dan_abramov"
    //   tweetId="1634959944733835265"
    //   authorAvatarFilePath="/static/images/people/dan-abramov.jpg"
    //   content="if you’re not composing GraphQL fragments from multiple components into one query (as Relay does), i think you’re missing 80% of the point of GraphQL."
    // />
    return (
      <a
        href={`https://twitter.com/${author}/status/${tweetId}`}
        style={{ textDecoration: 'none' }}
      >
        <div className="border rounded-lg p-4 text-gray-500 flex">
          <div className="pr-4 pl-2">
            <p className="m-0">{content}</p>
            <div className="flex items-center pt-4 pb-2">
              <Image
                width={36}
                height={36}
                src={authorAvatarFilePath}
                className="rounded-full m-0"
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
    const keywords = [':quote:', ':author:', ':jobTitle', ':source:']

    const authorIndex = inspect.indexOf(':author:')
    const jobTitleIndex = inspect.indexOf(':jobTitle:')
    const sourceIndex = inspect.indexOf(':source:')

    const quote = inspect.substring(':quote:'.length, authorIndex - 1)
    const author = inspect.substring(authorIndex + ':author:'.length, jobTitleIndex - 1)
    const jobTitle = inspect.substring(jobTitleIndex + ':jobTitle:'.length, sourceIndex - 1)
    const source = args.children?.props?.children[1]?.props?.children

    if (!quote) return <span>Quote missing</span>
    return (
      <div className="flex w-full flex-col border-l-4 border-indigo-500 bg-indigo-200 bg-opacity-90 py-3 px-4">
        <span className="ml-2 text-sm text-indigo-600">{quote}</span>
        <div className="flex items-end justify-between">
          <span className="ml-2 mt-2 text-xs font-light text-indigo-600">
            ∙ {author}, {jobTitle}
          </span>
          <a
            href={source}
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.25"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>

            {/* <span className="text-xs mr-1 font-light">Source</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="w-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg> */}
          </a>
        </div>
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
