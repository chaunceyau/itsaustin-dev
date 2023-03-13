import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const TagContainer = ({ text }) => (
  <div className="inline-block rounded-lg bg-indigo-300 bg-opacity-50 px-3 py-px dark:bg-opacity-100">
    <label className="text-sm font-semibold text-indigo-500 dark:text-indigo-600">{text}</label>
  </div>
)

const Tag = ({ text, hyperlink }) => {
  if (hyperlink) {
    return (
      <Link href={`/tags/${kebabCase(text)}`} passHref>
        <TagContainer text={text} />
      </Link>
    )
  }
  return <TagContainer text={text} />
}

export default Tag
