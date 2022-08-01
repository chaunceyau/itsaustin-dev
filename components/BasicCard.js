export const BasicCard = ({ children, title, readMore, headingSize = 'xl', topRightElement }) => {
  return (
    <div className="rounded-lg border px-6 py-4">
      <div className={`flex`}>
        <h2 className={`mb-4 flex-shrink-0 text-${headingSize} font-bold`}>{title}</h2>
      </div>
      {children}
    </div>
  )
}
