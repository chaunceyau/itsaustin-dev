/* eslint-disable react/display-name */
import { useMemo } from 'react'

import { motion } from 'framer-motion'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  defintion: () => {
    console.log('hmmm')
    return <bold>test..fdsa.</bold>
  },
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return (
      <motion.div
        initial={{ opacity: 0.5, height: 25 }}
        animate={{ opacity: 1, height: '100%' }}
        transition={{ duration: 1.5 }}
        className="overflow-hidden"
      >
        <Layout {...rest} />
      </motion.div>
    )
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
