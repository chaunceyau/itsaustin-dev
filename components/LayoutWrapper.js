import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'

import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SectionContainer from './SectionContainer'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="mb-20 flex h-screen flex-col justify-between">
        <header className="flex items-start justify-between pt-10 pb-8">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                {/* <div className="mr-3">
                  <Logo />
                </div> */}
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden sm:block">
                    <h1 className="h-6 text-2xl font-bold tracking-wide text-indigo-500">
                      {siteMetadata.headerTitle}
                    </h1>
                    {/* <p className='text-gray-500 mt-3'>Built by Austin Chauncey</p> */}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          {/* <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div> */}
        </header>
        <main className="mb-auto">{children}</main>
        {/* <Footer /> */}
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
