import Link from '@/components/Link'

export const BasicCard = ({
  children,
  title,
  readMore,
  headingSize = 'xl',
  topRightElement,
  styled = false,
}) => {
  return (
    <div className={styled ? 'rounded-lg border px-6 py-4 dark:border-gray-700' : ''}>
      <div className={`flex`}>
        <h2
          className={`mb-4 flex-shrink-0 text-${headingSize} font-bold text-gray-900 dark:text-gray-100`}
        >
          {title}
        </h2>
      </div>
      {children}

      {readMore && (
        <div className="flex text-base font-medium leading-6">
          <Link
            href={readMore.href}
            className="text-dark-900 text-sm hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
            aria-label="all posts"
          >
            {readMore.label} &rarr;
          </Link>
        </div>
      )}
    </div>
  )
}
