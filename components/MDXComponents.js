/* eslint-disable react/display-name */
import { useMemo } from 'react'

import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'

export const MDXComponents = {
  Image: (args) => {
    if (!args.src) return null
    return <Image alt={args.alt} src={require(args.src)} width={args.width} height={args.height} />
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
